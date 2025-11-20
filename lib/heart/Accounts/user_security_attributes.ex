defmodule Heart.Accounts.UserSecurityAttributes do
  use Ecto.Schema
  import Ecto.Changeset
  alias Heart.Accounts.Users

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "user_security_attributes" do
    field :password, :string, redact: true
    field :auth_type, :string, default: "password"
    field :pending_email, :string

    field :password_reset_token, :string
    field :password_reset_token_expiry, :utc_datetime_usec

    field :email_verification_token, :string
    field :email_token_expiry, :utc_datetime_usec

    field :email_verified, :boolean, default: false
    field :email_verified_at, :utc_datetime_usec

    field :two_factor_enabled, :boolean, default: false
    field :two_factor_secret, :string

    field :failed_login_attempts, :integer, default: 0
    field :lock_until, :utc_datetime_usec
    field :is_deleted, :boolean, default: false

    belongs_to :user, Users, type: :binary_id

    timestamps(type: :utc_datetime_usec)
    field :deleted_at, :utc_datetime_usec
  end

  @doc false
  def changeset(security, attrs) do
    security
    |> cast(attrs, [
      :user_id,
      :password,
      :auth_type,
      :email_verification_token,
      :email_token_expiry,
      :email_verified,
      :password_reset_token,
      :password_reset_token_expiry
    ])
    |> validate_required([:user_id])
    |> unique_constraint(:user_id)
    |> hash_password()
  end

  # Helper functions

  def is_locked?(%__MODULE__{lock_until: nil}), do: false

  def is_locked?(%__MODULE__{lock_until: lock_until}) do
    DateTime.compare(lock_until, DateTime.utc_now()) == :gt
  end

  def can_attempt_login?(attrs) do
    not is_locked?(attrs) and not attrs.is_deleted
  end

  def needs_email_verification?(%__MODULE__{
        email_verification_token: token,
        email_token_expiry: expiry
      }) do
    token && (expiry == nil or DateTime.compare(expiry, DateTime.utc_now()) == :gt)
  end

  def reset_login_attempts(attrs) do
    %{attrs | failed_login_attempts: 0, lock_until: nil}
  end

  def increment_failed_attempts(attrs, max_attempts) do
    failed_attempts = attrs.failed_login_attempts + 1

    lock_until =
      if failed_attempts >= max_attempts do
        DateTime.add(DateTime.utc_now(), (failed_attempts - max_attempts + 1) * 3600, :second)
      else
        attrs.lock_until
      end

    %{attrs | failed_login_attempts: failed_attempts, lock_until: lock_until}
  end

  defp hash_password(changeset) do
    case get_change(changeset, :password) do
      password when is_binary(password) ->
        put_change(changeset, :password, Bcrypt.hash_pwd_salt(password))

      _ ->
        changeset
    end
  end
end
