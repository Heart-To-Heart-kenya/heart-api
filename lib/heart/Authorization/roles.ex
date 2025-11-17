defmodule Heart.Authorization.Roles do
  use Ecto.Schema
  alias Heart.Repo
  import Ecto.Changeset
  import Slugy

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "roles" do
    field :role_name, :string
    field :slug, :string
    field :description, :string
    field :level, :integer, default: 1
    field :status, :string, default: "active"
    field :is_system_role, :boolean, default: false
    field :number_of_users, :integer, default: 0
    field :created_by, :binary_id
    field :last_modified_by, :binary_id
    field :version, :integer, default: 1
    field :deleted_at, :utc_datetime_usec

    has_many :role_permissions, Heart.Authorization.RolePermission, foreign_key: :role_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(role, attrs) do
    role
    |> cast(attrs, [
      :role_name,
      :description,
      :level,
      :slug,
      :status,
      :is_system_role,
      :number_of_users,
      :created_by,
      :last_modified_by,
      :version,
      :deleted_at
    ])
    |> validate_required([:role_name, :level, :status])
    |> unique_constraint(:role_name)
    |> slugify(:role_name)

    # |> validate_length(:number_of_users, grater_than_or_equals_to: 0)

    # |> auto_gen_slug()
  end

  def create(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> Repo.insert!()
  end

  def update(roles, params) do
    roles
    |> changeset(params)
    |> Repo.update!()
  end

  def maybe_get_role_name(role) do
    Repo.get_by!(__MODULE__, slug: role)
  end

  def maybe_update_role_count(role) do
    update_count = (role.number_of_users || 0) + 1
    update(role, %{number_of_users: update_count})
  end

  # def auto_gen_slug(changeset) do
  #   def case(get_change(changeset, :role_name)) do
  #     nil ->
  #       changeset

  #     role_name ->
  #       role_name
  #       |> String.downcase()
  #       |> String.replace(~r/[^\w-]+/u, "-")
  #       |> String.replace(~r/--+/, "-")
  #       |> String.trim("-")

  #       put_change(changeset, :slug, role_name)
  #   end
  # end
end
