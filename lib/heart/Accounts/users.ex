defmodule Heart.Accounts.Users do
  use Ecto.Schema

  import Ecto.Changeset

  alias Heart.Repo
  alias Heart.Authorization.Roles
  alias Heart.Authorization.UserRoles
  alias Heart.Accounts.{UserPreferences, UserLocation}

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "users" do
    field :username, :string
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :msidn, :string
    field :bio, :string
    field :avatar_url, :string
    field :date_of_birth, :date
    field :gender, :string
    field :deleted_at, :utc_datetime_usec
    field :last_modified_by, :binary_id

    has_one :preferences, UserPreferences, foreign_key: :user_id
    has_one :location, UserLocation, foreign_key: :user_id
    has_many :user_roles, UserRoles, foreign_key: :user_id
    has_many :roles, through: [:user_roles, :roles]

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [
      :first_name,
      :last_name,
      :email,
      :bio,
      :avatar_url,
      :date_of_birth,
      :gender,
      :last_modified_by,
      :deleted_at
    ])
    |> validate_required([:first_name, :last_name])
    |> auto_gen_username()
    |> unique_constraint(:username, massage: "Chose Another username")
    |> unique_constraint(:email, message: "Email already in use")
  end

  def create(attrs) do
    Repo.transaction(fn ->
      user =
        %__MODULE__{}
        |> changeset(attrs)
        |> Repo.insert!()

      maybe_give_default_role(user)
      user
    end)
  end

  def maybe_give_default_role(user) do
    case Roles.maybe_get_role_name("user") do
      nil ->
        "Role User Not Found"

      role ->
        %UserRoles{}
        |> UserRoles.changeset(%{user_id: user.id, role_id: role.id})
        |> Repo.insert!()

        Roles.maybe_update_role_count(role)
    end
  end

  def auto_gen_username(changeset) do
    case get_change(changeset, :username) do
      nil ->
        email = get_field(changeset, :email) || ""

        base_username =
          email
          |> String.split("@")
          |> hd()
          |> String.replace(~r/[^a-zA-Z0-9_.]/, "")

        username = make_unique_username(base_username)

        put_change(changeset, :username, username)

      _username ->
        changeset
    end
  end

  defp make_unique_username(base) do
    exists? = fn username ->
      Repo.get_by(__MODULE__, username: username) != nil
    end

    if exists?.(base) do
      suffix = :crypto.strong_rand_bytes(2) |> Base.url_encode64() |> binary_part(0, 4)
      make_unique_username(base <> suffix)
    else
      base
    end
  end
end
