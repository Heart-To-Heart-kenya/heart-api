defmodule Heart.Repo.Migrations.CreateUserPreferences do
  use Ecto.Migration

  def change do
    create table(:user_preferences, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id, null: false
      add :show_email, :boolean, default: false
      add :show_phone, :boolean, default: false
      add :show_location, :boolean, default: false
      add :show_gender, :boolean, default: false
      add :show_role, :boolean, default: false
      add :show_profile, :boolean, default: true
      add :allow_following, :boolean, default: true
      add :language, :string, default: "en"
      add :theme, :string, default: "light"
      add :timezone, :string, default: "UTC"

      add :receive_security_emails, :boolean, default: false
      timestamps(type: :utc_datetime)
    end

    create index(:user_preferences, [:user_id])
    create index(:user_preferences, [:show_profile])
  end
end
