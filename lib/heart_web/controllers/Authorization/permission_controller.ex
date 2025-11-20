defmodule HeartWeb.Authorization.PermissionController do
  use HeartWeb, :controller
  use PhoenixSwagger

  alias Heart.Authorization.Permission
  alias Heart.Repo
  alias HeartWeb.APIResponse

  def swagger_definitions do
    %{
      Permission:
        swagger_schema do
          title("Permission")
          description("The permission details")

          properties do
            permission_name(:string, "Unique name of the permission (e.g. view_users)",
              required: true
            )

            scope(:string, "Scope string (e.g. users:view)", required: false)
            description(:string, "Optional description", required: false)
            status(:string, "Status (active/inactive)", required: true, default: "active")
          end

          example(%{
            permission_name: "manage_permissions",
            scope: "permissions:manage",
            description: "Can create/edit/delete permissions",
            status: "active"
          })
        end
    }
  end

  swagger_path :api_get_permissions do
    get("/api/v1/permissions")
    summary("List all permissions")

    parameters do
      search(:query, :string, "Search by permission name", required: false)
      status(:query, :string, "Filter by status (active/inactive)", required: false)
    end

    response(200, "Success")
  end

  def api_get_permissions(conn, params) do
    permissions = Permission.search(params)

    response =
      APIResponse.format_response("success", permissions, "Permissions retrieved successfully")

    json(conn, response)
  end

  swagger_path :api_create_permission do
    post("/api/v1/permissions")
    summary("Create a new permission")

    parameters do
      permission(:body, Schema.ref(:Permission), "Permission attributes", required: true)
    end

    response(201, "Permission Created")
    response(422, "Unprocessable Entity")
  end

  def api_create_permission(conn, params) do
    with {:ok, permission} <- Permission.create(params) do
      response =
        APIResponse.format_response(
          "success",
          %{id: permission.id},
          "Permission created successfully"
        )

      conn
      |> put_status(:created)
      |> json(response)
    else
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(APIResponse.format_response("error", changeset, "Validation failed"))
    end
  end

  swagger_path :api_update_permission do
    put("/api/v1/permissions/{id}")
    summary("Update permission")

    parameters do
      id(:path, :string, "Permission ID", required: true)

      permission(:body, Schema.ref(:Permission), "Permission attributes to update",
        required: true
      )
    end

    response(200, "Updated")
    response(422, "Unprocessable Entity")
  end

  def api_update_permission(conn, %{"id" => id} = params) do
    case Repo.get(Permission, id) do
      nil ->
        json(conn, APIResponse.format_response("error", nil, "Permission not found"))

      permission ->
        case Permission.update(permission, params) do
          {:ok, updated_permission} ->
            response =
              APIResponse.format_response("success", %{id: updated_permission.id}, "Updated")

            json(conn, response)

          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> json(APIResponse.format_response("error", changeset, "Failed"))
        end
    end
  end

  swagger_path :api_delete_permission do
    delete("/api/v1/permissions/{id}")
    summary("Delete permission")

    parameters do
      id(:path, :string, "Permission ID", required: true)
    end

    response(204, "Deleted")
  end

  def api_delete_permission(conn, %{"id" => id}) do
    case Repo.get(Permission, id) do
      nil ->
        json(conn, APIResponse.format_response("error", nil, "Not Found"))

      permission ->
        Repo.delete!(permission)

        conn
        |> put_status(:no_content)
        |> json(APIResponse.format_response("success", nil, "Deleted"))
    end
  end
end
