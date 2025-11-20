defmodule Heart.Accounts.Notifier do
  import Swoosh.Email
  alias Heart.Mailer

  @from_email "info@api.starlinkkenya.com"

  def send_verification_email(user, code) do
    new()
    |> to({user.first_name, user.email})
    |> from(@from_email)
    |> subject("Verify your Heart Account")
    |> html_body(
      "<h1>Welcome #{user.first_name}!</h1><p>Your verification code is: <strong>#{code}</strong></p>"
    )
    |> text_body("Welcome #{user.first_name}! Your verification code is: #{code}")
    |> Mailer.deliver()
  end

  def send_password_reset_email(user, code) do
    new()
    |> to({user.first_name, user.email})
    |> from(@from_email)
    |> subject("Reset your Heart Password")
    |> html_body("<p>Use this code to reset your password: <strong>#{code}</strong></p>")
    |> text_body("Use this code to reset your password: #{code}")
    |> Mailer.deliver()
  end
end
