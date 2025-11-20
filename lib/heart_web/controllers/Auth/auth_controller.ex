defmodule HeartWeb.Auth.AuthController do
  use HeartWeb, :controller
  use PhoenixSwagger
  alias Heart.Authenticate.Authenticate
  alias HeartWeb.APIResponse

  # --- SWAGGER DEFINITIONS ---
  def swagger_definitions do
    %{
      UserRegistration:
        swagger_schema do
          title("UserRegistration")
          description("Fields required to register a new user.")

          properties do
            first_name(:string, "User's first name", required: true)
            last_name(:string, "User's last name", required: true)
            email(:string, "Unique email address", required: true, format: :email)
            password(:string, "Password (will be hashed)", required: true, format: :password)
          end

          example(%{
            first_name: "Jane",
            last_name: "Doe",
            email: "jane.doe@example.com",
            password: "mysecurepassword123"
          })
        end,
      UserLogin:
        swagger_schema do
          title("UserLogin")
          description("Credentials required for login.")

          properties do
            email(:string, "User's email address", required: true, format: :email)
            password(:string, "User's password", required: true, format: :password)
          end

          example(%{
            email: "jane.doe@example.com",
            password: "mysecurepassword123"
          })
        end,
      UserVerification:
        swagger_schema do
          title("UserVerification")
          description("Details to verify a user's email.")

          properties do
            email(:string, "User's email address", required: true, format: :email)
            code(:string, "6-digit verification code sent to email", required: true)
          end

          example(%{
            email: "jane.doe@example.com",
            code: "123456"
          })
        end,
      PasswordResetRequest:
        swagger_schema do
          title("PasswordResetRequest")
          description("Email to send a password reset code to.")

          properties do
            email(:string, "User's email address", required: true, format: :email)
          end

          example(%{
            email: "jane.doe@example.com"
          })
        end,
      PasswordReset:
        swagger_schema do
          title("PasswordReset")
          description("Details to perform a password reset.")

          properties do
            email(:string, "User's email address", required: true, format: :email)
            code(:string, "6-digit reset code received via email", required: true)
            new_password(:string, "New password", required: true, format: :password)
          end

          example(%{
            email: "jane.doe@example.com",
            code: "654321",
            new_password: "a_new_secure_password"
          })
        end
    }
  end

  # --- SWAGGER PATHS ---

  swagger_path :register do
    post("/api/v1/auth/register")
    summary("Register a new user")

    parameters do
      body(:body, Schema.ref(:UserRegistration), "Registration details", required: true)
    end

    response(200, "Success")
    response(422, "Unprocessable Entity")
  end

  def register(conn, params) do
    case Authenticate.register_user(params) do
      {:ok, user} ->
        json(
          conn,
          APIResponse.format_response(
            "success",
            %{email: user.email},
            "User registered. Please check email for verification code."
          )
        )

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(APIResponse.format_response("error", changeset, "Registration failed"))
    end
  end

  swagger_path :verify do
    post("/api/v1/auth/verify")
    summary("Verify user's email address")

    parameters do
      body(:body, Schema.ref(:UserVerification), "Email and verification code", required: true)
    end

    response(200, "Success")
    response(400, "Bad Request")
  end

  def verify(conn, %{"email" => email, "code" => code}) do
    case Authenticate.verify_email(email, code) do
      {:ok, _user} ->
        json(conn, APIResponse.format_response("success", nil, "Email verified successfully"))

      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(APIResponse.format_response("error", nil, "Invalid code or email expired"))
    end
  end

  swagger_path :login do
    post("/api/v1/auth/login")
    summary("Authenticate user and get a session token")

    parameters do
      body(:body, Schema.ref(:UserLogin), "Login credentials", required: true)
    end

    response(200, "Success")
    response(401, "Unauthorized")
    response(403, "Forbidden")
  end

  def login(conn, %{"email" => email, "password" => password}) do
    ip = to_string(:inet_parse.ntoa(conn.remote_ip))
    device = get_req_header(conn, "user-agent") |> List.first() || "unknown"

    case Authenticate.login_user(email, password, device, ip) do
      {:ok, session} ->
        conn
        |> put_status(:ok)
        |> json(
          APIResponse.format_response(
            "success",
            %{token: session.token, user_id: session.user_id},
            "Login successful"
          )
        )

      {:error, :unverified_email} ->
        conn
        |> put_status(:forbidden)
        |> json(APIResponse.format_response("error", nil, "Email not verified"))

      {:error, _} ->
        conn
        |> put_status(:unauthorized)
        |> json(APIResponse.format_response("error", nil, "Invalid credentials"))
    end
  end

  swagger_path :forgot_password do
    post("/api/v1/auth/forgot-password")
    summary("Request password reset code")

    parameters do
      body(:body, Schema.ref(:PasswordResetRequest), "User's email to receive the reset code",
        required: true
      )
    end

    response(200, "Success")
  end

  def forgot_password(conn, %{"email" => email}) do
    Authenticate.request_password_reset(email)

    json(
      conn,
      APIResponse.format_response(
        "success",
        nil,
        "If the email exists, a reset code has been sent."
      )
    )
  end

  swagger_path :reset_password do
    post("/api/v1/auth/reset-password")
    summary("Reset password with the received code")

    parameters do
      body(:body, Schema.ref(:PasswordReset), "Email, reset code, and new password",
        required: true
      )
    end

    response(200, "Success")
    response(400, "Bad Request")
  end

  def reset_password(conn, %{"email" => email, "code" => code, "new_password" => new_password}) do
    case Authenticate.reset_password(email, code, new_password) do
      {:ok, _} ->
        json(conn, APIResponse.format_response("success", nil, "Password reset successful"))

      {:error, _} ->
        conn
        |> put_status(:bad_request)
        |> json(APIResponse.format_response("error", nil, "Invalid code or expired"))
    end
  end
end
