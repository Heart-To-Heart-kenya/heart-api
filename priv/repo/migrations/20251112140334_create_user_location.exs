defmodule Heart.Repo.Migrations.CreateUserLocation do
  use Ecto.Migration

  def change do
    create table(:user_locations, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id, null: false
      add :country, :string
      add :timezone, :string, default: "UTC"
      add :state, :string
      add :city, :string
      add :zip, :string
      timestamps(type: :utc_datetime)
    end

    create index(:user_locations, [:user_id])
    create index(:user_locations, [:city])
  end
end
