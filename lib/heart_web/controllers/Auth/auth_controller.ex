defmodule HeartWeb.Auth.AuthController do
  use HeartWeb, :controller
  alias Heart.Authenticate.Authenticate

  def register(conn, params) do
    case Authenticate.register_user(params) do
      {:ok, user} ->
        conn
        |> put_status(200)
        |> json(%{email: user.email})

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(changeset)
    end
  end

  def verify(conn, %{"email" => email, "code" => code}) do
    case Authenticate.verify_email(email, code) do
      {:ok, _user} ->
        conn
        |> put_status(200)
        |> json(%{message: "Email verified successfully"})

      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid code or email expired"})
    end
  end

  def login(conn, %{"email" => email, "password" => password}) do
    ip = to_string(:inet_parse.ntoa(conn.remote_ip))
    device = get_req_header(conn, "user-agent") |> List.first() || "unknown"

    case Authenticate.login_user(email, password, device, ip) do
      {:ok, session} ->
        conn
        |> put_status(:ok)
        |> json(%{token: session.token, user_id: session.user_id})

      {:error, :unverified_email} ->
        conn
        |> put_status(:forbidden)
        |> json(%{error: "Email not verified"})

      {:error, _} ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Invalid credentials"})
    end
  end

  def forgot_password(conn, %{"email" => email}) do
    Authenticate.request_password_reset(email)

    json(conn, %{message: "If the email exists, a reset code has been sent."})
  end

  def reset_password(conn, %{"email" => email, "code" => code, "new_password" => new_password}) do
    case Authenticate.reset_password(email, code, new_password) do
      {:ok, _} ->
        json(conn, %{message: "Password reset successful"})

      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid code or expired"})
    end
  end
end
