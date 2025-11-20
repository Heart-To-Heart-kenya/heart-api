defmodule Heart.Repo.Migrations.AlterTableUsersAddColumnPasswordHash do
  use Ecto.Migration

  def change do
    alter table(:user_security_attributes) do
      add :password_hash, :string
    end
  end
end
