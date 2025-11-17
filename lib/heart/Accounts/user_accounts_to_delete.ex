defmodule Heart.Accounts.AccountsToDelete do
  use Ecto.Schema
  import Ecto.Changeset

  alias Heart.Accounts.Users

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "accounts_to_delete" do
    field :reason, :string
    field :scheduled_date_of_deleting, :utc_datetime

    belongs_to :user, Users, foreign_key: :user_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(account_to_delete, attrs) do
    account_to_delete
    |> cast(attrs, [:user_id, :reason, :scheduled_date_of_deleting])
    |> validate_required([:user_id])
  end
end
