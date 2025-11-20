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
      get "/", Authorization.RoleController, :api_get_roles
      post "/", Authorization.RoleController, :api_create_role
      put "/:id", Authorization.RoleController, :api_update_role
      delete "/:id", Authorization.RoleController, :api_delete_role
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
