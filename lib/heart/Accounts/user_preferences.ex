defmodule Heart.Accounts.UserPreferences do
  use Ecto.Schema
  import Ecto.Changeset

  alias Heart.Repo
  alias Heart.Accounts.Users

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "user_preferences" do
    field :show_email, :boolean, default: false
    field :show_phone, :boolean, default: false
    field :show_location, :boolean, default: false
    field :show_gender, :boolean, default: false
    field :show_role, :boolean, default: false
    field :show_profile, :boolean, default: true
    field :allow_following, :boolean, default: true
    field :language, :string, default: "en"
    field :theme, :string, default: "light"
    field :timezone, :string, default: "UTC"
    field :receive_security_emails, :boolean, default: false

    belongs_to :user, Users, type: :binary_id

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(prefs, attrs) do
    prefs
    |> cast(attrs, [
      :user_id,
      :show_email,
      :show_phone,
      :show_location,
      :show_gender,
      :show_role,
      :show_profile,
      :allow_following,
      :language,
      :theme,
      :timezone,
      :receive_security_emails
    ])
    |> validate_required([:user_id])
    |> assoc_constraint(:user)
  end

  def create(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> Repo.insert!()
  end

  # Helpers
  # def is_public_profile(%__MODULE__{} = prefs) do
  #   prefs.show_profile and
  #     Enum.any?([
  #       prefs.show_email,
  #       prefs.show_phone,
  #       prefs.show_location,
  #       prefs.show_gender,
  #       prefs.show_role
  #     ])
  # end
end
