defmodule HeartWeb.Authorization.RoleController do
  use HeartWeb, :controller
  use PhoenixSwagger

  alias Heart.Authorization.Roles
  alias Heart.Repo
  alias HeartWeb.APIResponse

  def swagger_definitions do
    %{
      Role:
        swagger_schema do
          title("Role")
          description("The role details")

          properties do
            role_name(:string, "Unique name of the role", required: true)
            level(:integer, "Hierarchy level (e.g. 10)", required: true)
            description(:string, "Optional description", required: false)
            is_system_role(:boolean, "Is this a system role?", required: false)
          end

          example(%{
            role_name: "Manager",
            level: 10,
            description: "Can manage users",
            is_system_role: false
          })
        end
    }
  end

  swagger_path :api_get_roles do
    get("/api/v1/roles")
    summary("List all roles")

    parameters do
      search(:query, :string, "Search by name", required: false)
    end

    response(200, "Success")
  end

  def api_get_roles(conn, params) do
    roles = Roles.search(params)
    response = APIResponse.format_response("success", roles, "Roles retrieved successfully")
    json(conn, response)
  end

  # --- 2. CREATE ROLE ---
  swagger_path :api_create_role do
    post("/api/v1/roles")
    summary("Create a new role")

    parameters do
      role(:body, Schema.ref(:Role), "Role attributes", required: true)
    end

    response(201, "Role Created")
  end

  def api_create_role(conn, params) do
    with {:ok, role} <- Roles.create(params) do
      response =
        APIResponse.format_response("success", %{id: role.id}, "Role created successfully")

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

  swagger_path :api_update_role do
    put("/api/v1/roles/{id}")
    summary("Update role")

    parameters do
      id(:path, :string, "Role ID", required: true)
      role(:body, Schema.ref(:Role), "Role attributes to update", required: true)
    end

    response(200, "Updated")
  end

  def api_update_role(conn, %{"id" => id} = params) do
    case Repo.get(Roles, id) do
      nil ->
        json(conn, APIResponse.format_response("error", nil, "Role not found"))

      role ->
        case Roles.update(role, params) do
          {:ok, updated_role} ->
            response = APIResponse.format_response("success", %{id: updated_role.id}, "Updated")
            json(conn, response)

          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> json(APIResponse.format_response("error", changeset, "Failed"))
        end
    end
  end

  swagger_path :api_delete_role do
    delete("/api/v1/roles/{id}")
    summary("Delete role")

    parameters do
      id(:path, :string, "Role ID", required: true)
    end

    response(204, "Deleted")
  end

  def api_delete_role(conn, %{"id" => id}) do
    case Repo.get(Roles, id) do
      nil ->
        json(conn, APIResponse.format_response("error", nil, "Not Found"))

      role ->
        Repo.delete!(role)

        conn
        |> put_status(:no_content)
        |> json(APIResponse.format_response("success", nil, "Deleted"))
    end
  end
end
