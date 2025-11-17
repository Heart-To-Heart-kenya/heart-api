defmodule Heart.Repo.Migrations.CreateUserRoles do
  use Ecto.Migration

  def change do
    create table(:user_roles, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id, null: false
      add :role_id, :binary_id, null: false
      add :status, :string, default: "active", null: false
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    create index(:user_roles, [:user_id])
    create index(:user_roles, [:role_id])
    create index(:user_roles, [:status])
    create unique_index(:user_roles, [:user_id, :role_id], name: :user_role_unique_index)
  end
end
