defmodule HeartWeb.Authorization.RoleController do
  use HeartWeb, :controller
  alias Heart.Authorization.Roles
  alias Heart.Repo

  def api_get_roles(conn, params) do
    roles = Roles.search(params)
    json(conn, roles)
  end

  def api_create_role(conn, params) do
    with {:ok, _role} <- Roles.create(params) do
      conn
      |> put_status(:created)
      |> json(:ok)
    else
      error ->
        error
    end
  end

  def api_update_role(conn, %{"id" => id} = params) do
    case Repo.get(Roles, id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Role not found"})

      role ->
        case Roles.update(role, params) do
          {:ok, _updated_role} ->
            conn
            |> put_status(200)
            |> json(:ok)

          error ->
            error
        end
    end
  end

  def api_delete_role(conn, %{"id" => id}) do
    case Repo.get(Roles, id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Not Found"})

      role ->
        Repo.delete!(role)

        conn
        |> put_status(:no_content)
        |> json(%{})
    end
  end
end
