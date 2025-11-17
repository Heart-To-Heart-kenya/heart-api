defmodule Heart.Accounts.UserLocation do
  use Ecto.Schema
  import Ecto.Changeset

  alias Heart.Accounts.Users

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "user_locations" do
    field :country, :string
    field :timezone, :string, default: "UTC"
    field :state, :string
    field :state_name, :string
    field :city, :string
    field :zip, :string

    belongs_to :user, Users, type: :binary_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:user_id, :country, :continent, :timezone, :state, :state_name, :city, :zip])
    |> validate_required([:user_id, :country, :continent, :timezone])
    |> assoc_constraint(:user)
  end

  # Helper
  def full_location(%__MODULE__{} = location) do
    [location.city, location.state_name || location.state, location.country]
    |> Enum.filter(&(&1 && &1 != ""))
    |> Enum.join(", ")
  end
end
