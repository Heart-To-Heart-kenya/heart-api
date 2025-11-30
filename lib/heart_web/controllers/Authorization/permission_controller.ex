defmodule HeartWeb.Authorization.PermissionController do
  use HeartWeb, :controller
  alias Heart.Authorization.Permission
  alias Heart.Repo

  def api_get_permissions(conn, params) do
    Permission.search(params)
    |> then(&(put_status(conn, 200) |> json(&1)))
  end

  def api_create_permission(conn, params) do
    with {:ok, _permission} <- Permission.create(params) do
      conn
      |> put_status(:created)
      |> json(:ok)
    else
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(changeset)
    end
  end

  def api_update_permission(conn, %{"id" => id} = params) do
    case Repo.get(Permission, id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Permission not found"})

      permission ->
        case Permission.update(permission, params) do
          {:ok, _succes} ->
            conn
            |> put_status(200)
            |> json(:ok)

          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> json(changeset)
        end
    end
  end

  def api_delete_permission(conn, %{"id" => id}) do
    case Repo.get(Permission, id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Not Found"})

      permission ->
        Repo.delete!(permission)

        conn
        |> put_status(:no_content)
        |> json(%{})
    end
  end
end
