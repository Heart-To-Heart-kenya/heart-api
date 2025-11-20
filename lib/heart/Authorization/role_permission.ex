defmodule Heart.Authorization.RolePermission do
  use Ecto.Schema
  alias Heart.Repo
  # import Ecto.Query

  use Heart.RepoHelpers, repo: Heart.Repo
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "role_permissions" do
    field :created_by, :binary_id
    field :deleted_at, :utc_datetime_usec

    belongs_to :role, Heart.Authorization.Roles, foreign_key: :role_id, type: :binary_id

    belongs_to :permission, Heart.Authorization.Permission,
      foreign_key: :permission_id,
      type: :binary_id

    # Corrected timestamp type
    timestamps(type: :utc_datetime_usec)
  end

  @doc false
  def changeset(role_permission, attrs) do
    role_permission
    |> cast(attrs, [:role_id, :permission_id, :created_by, :deleted_at])
    |> validate_required([:role_id, :permission_id])
    |> unique_constraint([:role_id, :permission_id])
    |> foreign_key_constraint(:role_id)
    |> foreign_key_constraint(:permission_id)
    |> assoc_constraint(:role)
    |> assoc_constraint(:permission)
  end

  def create(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> Repo.insert()
  end

  def update(role_permission, params) do
    role_permission
    |> changeset(params)
    |> Repo.update()
  end

  def list(filters \\ %{}) do
    query =
      __MODULE__
      |> Ecto.Query.preload(:role)
      |> Ecto.Query.preload(:permission)

    query
    |> filter_query(filters)
    |> Repo.all()
  end
end
