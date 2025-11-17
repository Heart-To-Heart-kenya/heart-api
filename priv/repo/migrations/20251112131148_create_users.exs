defmodule Heart.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :username, :string, size: 50, null: false
      add :first_name, :string, size: 100, null: false
      add :last_name, :string, size: 100, null: false
      add :email, :string, size: 255
      add :msidn, :string
      add :bio, :text
      add :avatar_url, :text
      add :date_of_birth, :date
      add :gender, :string, size: 50

      add :last_modified_by, :binary_id
      add :deleted_at, :utc_datetime_usec

      timestamps(type: :utc_datetime)
    end

    create unique_index(:users, [:username])
    create unique_index(:users, [:email])
    create index(:users, [:deleted_at])
  end
end
