defmodule Heart.Repo.Migrations.CreateUserSessions do
  use Ecto.Migration

  def change do
    create table(:user_sessions, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id, null: false
      add :token, :string, null: false
      add :expires_at, :utc_datetime
      add :device_info, :string
      add :ip_address, :string
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    create index(:user_sessions, [:user_id])
    create unique_index(:user_sessions, [:token])
  end
end
