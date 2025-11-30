defmodule HeartWeb.Authorization.RolePermissionController do
  use HeartWeb, :controller
  alias Heart.Authorization.RolePermission
  alias Heart.Repo

  def api_list_role_permissions(conn, params) do
    role_permissions = RolePermission.list(params)
    json(conn, role_permissions)
  end

  def api_create_role_permission(conn, params) do
    with {:ok, association} <- RolePermission.create(params) do
      conn
      |> put_status(:created)
      |> json(%{id: association.id})
    else
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(changeset)
    end
  end

  def api_delete_role_permission(conn, %{"id" => id}) do
    case Repo.get(RolePermission, id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> json(%{error: "Association not found"})

      association ->
        Repo.delete!(association)

        conn
        |> put_status(:no_content)
        |> json(%{})
    end
  end
end
