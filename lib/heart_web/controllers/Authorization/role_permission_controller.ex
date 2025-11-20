defmodule HeartWeb.Authorization.RolePermissionController do
  use HeartWeb, :controller
  use PhoenixSwagger

  alias Heart.Authorization.RolePermission
  alias Heart.Repo
  alias HeartWeb.APIResponse

  def swagger_definitions do
    %{
      RolePermission:
        swagger_schema do
          title("RolePermission")
          description("Represents an association between a role and a permission.")

          properties do
            role_id(:string, "ID of the role", required: true, format: :uuid)
            permission_id(:string, "ID of the permission", required: true, format: :uuid)

            created_by(:string, "User ID who created the association",
              required: false,
              format: :uuid
            )
          end

          example(%{
            role_id: "78a9c336-d243-41c6-a675-8120e2e9c135",
            permission_id: "4b5e4118-9210-4f0c-9f17-ab3048f8597b",
            created_by: "542a1b93-e123-4f0e-b9b5-f48d1d8c1c4f"
          })
        end
    }
  end

  swagger_path :api_list_role_permissions do
    get("/api/v1/role_permissions")
    summary("List all role-permission associations")

    parameters do
      role_id(:query, :string, "Filter by Role ID", required: false)
      permission_id(:query, :string, "Filter by Permission ID", required: false)
    end

    response(200, "Success")
  end

  def api_list_role_permissions(conn, params) do
    role_permissions = RolePermission.list(params)

    response =
      APIResponse.format_response(
        "success",
        role_permissions,
        "Role permissions retrieved successfully"
      )

    json(conn, response)
  end

  swagger_path :api_create_role_permission do
    post("/api/v1/role_permissions")
    summary("Create a new role-permission association")

    parameters do
      role_permission(:body, Schema.ref(:RolePermission), "Role and Permission IDs to link",
        required: true
      )
    end

    response(201, "Association Created")
    response(422, "Unprocessable Entity")
  end

  def api_create_role_permission(conn, params) do
    with {:ok, association} <- RolePermission.create(params) do
      response =
        APIResponse.format_response(
          "success",
          %{id: association.id},
          "Association created successfully"
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

  swagger_path :api_delete_role_permission do
    delete("/api/v1/role_permissions/{id}")
    summary("Delete a role-permission association (Dissociate)")

    parameters do
      id(:path, :string, "ID of the association record", required: true)
    end

    response(204, "Deleted")
  end

  def api_delete_role_permission(conn, %{"id" => id}) do
    case Repo.get(RolePermission, id) do
      nil ->
        json(conn, APIResponse.format_response("error", nil, "Association not found"))

      association ->
        Repo.delete!(association)

        conn
        |> put_status(:no_content)
        |> json(APIResponse.format_response("success", nil, "Deleted"))
    end
  end
end
