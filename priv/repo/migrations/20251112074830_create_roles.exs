defmodule Heart.Repo.Migrations.CreateRoles do
  use Ecto.Migration

  def change do
    create table(:roles, primary_key: false) do
      add :id, :binary_id, primary_key: true

      add :role_name, :string, size: 100, null: false
      add :slug, :string
      add :description, :string, size: 255
      add :level, :integer, null: false, default: 1
      add :status, :string, size: 20, null: false, default: "active"
      add :is_system_role, :boolean, default: false
      add :number_of_users, :bigint, null: false, default: 0
      add :created_by, :binary_id
      add :last_modified_by, :binary_id
      add :version, :integer, default: 1

      timestamps(type: :utc_datetime)
      add :deleted_at, :utc_datetime_usec
    end

    create unique_index(:roles, [:role_name])
    create index(:roles, [:deleted_at])
  end
end
