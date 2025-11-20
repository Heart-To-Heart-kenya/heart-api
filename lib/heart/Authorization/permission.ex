defmodule Heart.Authorization.Permission do
  use Ecto.Schema
  alias Heart.Repo

  use Heart.RepoHelpers, repo: Heart.Repo
  import Ecto.Changeset
  import Ecto.Query

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

    many_to_many :roles, Roles,
      join_through: "role_permissions",
      join_keys: [permission_id: :id, role_id: :id]

    has_many :role_permissions, RolePermission, foreign_key: :permission_id

    timestamps(type: :utc_datetime_usec)
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
    |> Repo.insert()
  end

  def update(permission, params) do
    permission
    |> changeset(params)
    |> Repo.update()
  end

  @doc """
  Search/filter permissions by name or status.
  """
  def search(queryable \\ __MODULE__, filters) do
    Enum.reduce(filters, queryable, fn {k, v}, accum_query ->
      cond do
        v == "" ->
          accum_query

        k == "search" ->
          from(i in accum_query,
            where: ilike(i.permission_name, ^"%#{v}%")
          )

        k == "status" ->
          from(i in accum_query,
            where: i.status == ^v
          )

        true ->
          accum_query
      end
    end)
    |> Repo.all()
  end
end
