defmodule Heart.Repo.Migrations.CreateUserSecurityAttributes do
  use Ecto.Migration

  def change do
    create table(:user_security_attributes, primary_key: false) do
      add :id, :binary_id, primary_key: true

      add :user_id, :binary_id, null: false
      add :password, :text
      add :auth_type, :string, default: "password"
      add :pending_email, :string

      add :password_reset_token, :text
      add :password_reset_token_expiry, :utc_datetime

      add :email_verification_token, :text
      add :email_token_expiry, :utc_datetime

      add :email_verified, :boolean, default: false
      add :email_verified_at, :utc_datetime

      add :two_factor_enabled, :boolean, default: false
      add :two_factor_secret, :text

      add :failed_login_attempts, :integer, default: 0
      add :lock_until, :utc_datetime

      add :is_deleted, :boolean, default: false
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    # Indexes
    create unique_index(:user_security_attributes, [:user_id])
    create index(:user_security_attributes, [:email_verified])
    create index(:user_security_attributes, [:is_deleted])
    create index(:user_security_attributes, [:lock_until])
  end
end
