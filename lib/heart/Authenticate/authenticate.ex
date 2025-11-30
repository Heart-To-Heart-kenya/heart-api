defmodule Heart.Authenticate.Authenticate do
  import Ecto.Query, warn: false
  alias Heart.Repo
  alias Heart.Accounts.{Users, UserSecurityAttributes, UserSession}

  def register_user(attrs) do
    Repo.transaction(fn ->
      user =
        %Users{}
        |> Users.changeset(attrs)
        |> Repo.insert!()

      verification_code = Enum.random(100_000..999_999) |> Integer.to_string()
      expiry = DateTime.add(DateTime.utc_now(), 30, :minute)

      %UserSecurityAttributes{}
      |> UserSecurityAttributes.changeset(%{
        user_id: user.id,
        password: attrs["password"],
        email_verification_token: verification_code,
        email_token_expiry: expiry,
        email_verified: false
      })
      |> Repo.insert!()

      Users.maybe_give_default_role(user)

      Heart.Accounts.Notifier.send_verification_email(user, verification_code)

      user
    end)
  end

  def verify_email(email, code) do
    user = Repo.get_by(Users, email: email)

    with %Users{} = user <- user,
         security = Repo.get_by(UserSecurityAttributes, user_id: user.id),
         true <- valid_token?(security.email_verification_token, code),
         true <- not_expired?(security.email_token_expiry) do
      security
      |> Ecto.Changeset.change(%{
        email_verified: true,
        email_verified_at: DateTime.utc_now(),
        email_verification_token: nil
      })
      |> Repo.update()

      {:ok, user}
    else
      _ -> {:error, :invalid_token_or_email}
    end
  end

  def login_user(email, password, device_info \\ "unknown", ip \\ "0.0.0.0") do
    user = Repo.get_by(Users, email: email)

    with %Users{} = user <- user,
         security = Repo.get_by(UserSecurityAttributes, user_id: user.id),
         true <- Argon2.verify_pass(password, security.password),
         true <- security.email_verified do
      create_session(user, device_info, ip)
    else
      false -> {:error, :unverified_email}
      _ -> {:error, :invalid_credentials}
    end
  end

  defp create_session(user, device_info, ip) do
    token = :crypto.strong_rand_bytes(32) |> Base.url_encode64(padding: false)
    expiry = DateTime.add(DateTime.utc_now(), 60, :day)

    %UserSession{}
    |> UserSession.changeset(%{
      user_id: user.id,
      token: token,
      expires_at: expiry,
      device_info: device_info,
      ip_address: ip
    })
    |> Repo.insert()
  end

  def request_password_reset(email) do
    user = Repo.get_by(Users, email: email)

    if user do
      reset_code = Enum.random(100_000..999_999) |> Integer.to_string()
      expiry = DateTime.add(DateTime.utc_now(), 15, :minute)

      Repo.get_by!(UserSecurityAttributes, user_id: user.id)
      |> Ecto.Changeset.change(%{
        password_reset_token: reset_code,
        password_reset_token_expiry: expiry
      })
      |> Repo.update!()

      Heart.Accounts.Notifier.send_password_reset_email(user, reset_code)
    end

    {:ok, :email_sent_if_exists}
  end

  def reset_password(email, code, new_password) do
    user = Repo.get_by(Users, email: email)

    with %Users{} = user <- user,
         security = Repo.get_by(UserSecurityAttributes, user_id: user.id),
         true <- valid_token?(security.password_reset_token, code),
         true <- not_expired?(security.password_reset_token_expiry) do
      security
      |> UserSecurityAttributes.changeset(%{
        password: new_password,
        password_reset_token: nil
      })
      |> Repo.update()
    else
      _ -> {:error, :invalid_reset_attempt}
    end
  end

  defp valid_token?(stored, provided), do: stored == provided
  defp not_expired?(expiry), do: DateTime.compare(expiry, DateTime.utc_now()) == :gt
end
