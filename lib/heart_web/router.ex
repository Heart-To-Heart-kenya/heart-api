defmodule HeartWeb.Router do
  use HeartWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {HeartWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  def swagger_info do
    %{
      schemes: ["http", "https"],
      info: %{
        version: "1.0",
        title: "Heart Project API",
        description: "API documentation for the Heart Project authorization system.",
        contact: %{
          name: "API Support",
          email: "support@heart-project.com"
        }
      },
      consumes: ["application/json"],
      produces: ["application/json"]
    }
  end

  forward "/swagger", PhoenixSwagger.Plug.SwaggerUI,
    otp_app: :heart,
    swagger_file: "swagger.json"

  scope "/", HeartWeb do
    pipe_through :browser

    get "/", PageController, :home
  end

  scope "/api/v1", HeartWeb do
    pipe_through :api

    scope "/roles" do
      get("/", Authorization.RoleController, :api_get_roles)
      post("/", Authorization.RoleController, :api_create_role)
      put("/:id", Authorization.RoleController, :api_update_role)
      delete("/:id", Authorization.RoleController, :api_delete_role)
    end

    scope "/permissions" do
      get("/", Authorization.PermissionController, :api_get_permissions)
      post("/", Authorization.PermissionController, :api_create_permission)
      put("/:id", Authorization.PermissionController, :api_update_permission)
      delete("/:id", Authorization.PermissionController, :api_delete_permission)
    end

    scope "/role_permissions" do
      get("/", Authorization.RolePermissionController, :api_list_role_permissions)
      post("/", Authorization.RolePermissionController, :api_create_role_permission)
      delete("/:id", Authorization.RolePermissionController, :api_delete_role_permission)
    end

    scope "/auth" do
      post("/register", Auth.AuthController, :register)
      post("/verify", Auth.AuthController, :verify)
      post("/login", Auth.AuthController, :login)
      post("/forgot-password", Auth.AuthController, :forgot_password)
      post("/reset-password", Auth.AuthController, :reset_password)
    end
  end

  if Application.compile_env(:heart, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: HeartWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
