defmodule Heart.Authorization.Permission do
  use Ecto.Schema
  alias Heart.Repo

  use Heart.RepoHelpers, repo: Heart.Repo
  import Ecto.Changeset

  alias Heart.Authorization.{Roles, RolePermission}

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "permissions" do
    field :permission_name, :string
    field :description, :string
    field :scope, :string
    field :status, :string, default: "active"
    field :created_by, :binary_id
    field :last_modified_by, :binary_id
    field :version, :integer, default: 1
    field :deleted_at, :utc_datetime_usec

    # Many-to-many through role_permissions
    many_to_many :roles, Roles,
      join_through: "role_permissions",
      join_keys: [permission_id: :id, role_id: :id]

    has_many :role_permissions, RolePermission, foreign_key: :permission_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(permission, attrs) do
    permission
    |> cast(attrs, [
      :permission_name,
      :description,
      :scope,
      :status,
      :created_by,
      :last_modified_by,
      :version,
      :deleted_at
    ])
    |> validate_required([:permission_name, :status])
    |> unique_constraint(:permission_name)
  end

  def create(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> Repo.insert!()
  end

  def update(permission, params) do
    permission
    |> changeset(params)
    |> Repo.update!()
  end
end
