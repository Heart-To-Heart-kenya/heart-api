defmodule :"Elixir.Heart.Repo.Migrations.Alter-table-role-permission-edit-column-created-by" do
  use Ecto.Migration

  def change do
    alter table(:role_permissions) do
      modify :created_by, :binary_id, null: true
    end
  end
end
