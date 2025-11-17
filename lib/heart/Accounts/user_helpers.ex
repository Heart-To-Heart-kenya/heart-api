defmodule Heart.Accounts.UserHelpers do
  import Ecto.Query
  alias Heart.Repo
  alias Heart.Accounts.Users

  @doc """
  Suggests 5 unique usernames based on a given base username.
  """
  def suggest_usernames(base_username) do
    exists = Repo.exists?(from u in Users, where: u.username == ^base_username)

    if not exists do
      [base_username | generate_random_usernames(base_username, 4)]
    else
      generate_random_usernames(base_username, 5)
    end
  end

  defp generate_random_usernames(base, count) do
    1..count
    |> Enum.map(fn _ -> generate_unique_username(base) end)
    |> Enum.uniq()
  end

  defp generate_unique_username(base) do
    suffix = :rand.uniform(9999)
    "#{base}#{suffix}"
  end
end
