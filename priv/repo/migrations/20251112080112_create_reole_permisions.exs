defmodule Heart.Repo.Migrations.CreateRolePermissions do
  use Ecto.Migration

  def change do
    create table(:role_permissions, primary_key: false) do
      add :id, :binary_id, primary_key: true

      add :role_id, :binary_id, null: false
      add :permission_id, :binary_id, null: false
      add :created_by, :binary_id, null: false
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    create index(:role_permissions, [:role_id])
    create index(:role_permissions, [:permission_id])
    create index(:role_permissions, [:deleted_at])
    create unique_index(:role_permissions, [:role_id, :permission_id])

    alter table(:role_permissions) do
      modify :role_id,
             references(:roles, type: :binary_id, on_delete: :delete_all, on_update: :update_all)

      modify :permission_id,
             references(:permissions,
               type: :binary_id,
               on_delete: :delete_all,
               on_update: :update_all
             )
    end
  end
end
