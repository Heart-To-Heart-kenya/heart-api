defmodule Heart.Accounts.UserSession do
  use Ecto.Schema
  import Ecto.Changeset

  alias Heart.Accounts.Users

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "user_sessions" do
    field :token, :string
    field :expires_at, :utc_datetime
    field :device_info, :string
    field :ip_address, :string
    field :temp_location, :string, virtual: true
    field :deleted_at, :utc_datetime_usec

    belongs_to :user, Users, type: :binary_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user_session, attrs) do
    user_session
    |> cast(attrs, [:user_id, :token, :expires_at, :device_info, :ip_address, :deleted_at])
    |> validate_required([:user_id, :token])
    |> unique_constraint(:token)
    |> assoc_constraint(:user)
  end

  def expired?(%__MODULE__{expires_at: nil}), do: false

  def expired?(%__MODULE__{expires_at: expires_at}),
    do: DateTime.compare(DateTime.utc_now(), expires_at) == :gt
end
