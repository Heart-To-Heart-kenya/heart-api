defmodule Heart.Repo.Migrations.CreatePermissions do
  use Ecto.Migration

  def change do
    create table(:permissions, primary_key: false) do
      add :id, :binary_id, primary_key: true

      add :permission_name, :string, size: 100, null: false
      add :description, :string, size: 255
      add :scope, :string, size: 255
      add :status, :string, size: 20, null: false, default: "active"
      add :created_by, :binary_id
      add :last_modified_by, :binary_id
      add :version, :integer, default: 1
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    create unique_index(:permissions, [:permission_name])
    create index(:permissions, [:deleted_at])
  end
end
