defmodule Heart.Authorization.UserRoles do
  use Ecto.Schema
  import Ecto.Changeset

  alias Heart.Repo
  alias Heart.Accounts.Users
  alias Heart.Authorization.Roles

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "user_roles" do
    field :status, :string, default: "active"
    field :deleted_at, :utc_datetime_usec

    belongs_to :user, Users
    belongs_to :role, Roles

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user_role, attrs) do
    user_role
    |> cast(attrs, [:user_id, :role_id, :status, :deleted_at])
    |> validate_required([:user_id, :role_id, :status])
    |> unique_constraint(:user_id, name: :user_role_unique_index)
    |> assoc_constraint(:user)
    |> assoc_constraint(:role)
  end

  def create(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> Repo.insert!()
  end
end
