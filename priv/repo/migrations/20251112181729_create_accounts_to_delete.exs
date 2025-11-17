defmodule Heart.Repo.Migrations.CreateAccountsToDelete do
  use Ecto.Migration

  def change do
    create table(:accounts_to_delete, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id, null: false
      add :reason, :text
      add :scheduled_date_of_deleting, :utc_datetime

      timestamps(type: :utc_datetime)
    end

    create index(:accounts_to_delete, [:user_id])
    create index(:accounts_to_delete, [:scheduled_date_of_deleting])
  end
end
