# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :heart,
  ecto_repos: [Heart.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :heart, HeartWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: HeartWeb.ErrorHTML, json: HeartWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Heart.PubSub,
  live_view: [signing_salt: "bMQWorgG"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :heart, Heart.Mailer, adapter: Swoosh.Adapters.Local

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.25.4",
  heart: [
    # args:
    #   ~w(js/app.js --bundle --target=es2022 --outdir=../priv/static/assets/js --external:/fonts/* --external:/images/* --alias:@=.),
    # cd: Path.expand("../assets", __DIR__),
    # env: %{"NODE_PATH" => [Path.expand("../deps", __DIR__), Mix.Project.build_path()]}
    # args:
    #   ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/* --loader:.js=jsx --loader:.jsx=jsx --loader:.png=file --loader:.jpg=file --loader:.jpeg=file --loader:.svg=file --loader:.gif=file),
    # cd: Path.expand("../assets", __DIR__),
    # env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/* --loader:.js=jsx --loader:.jsx=jsx --loader:.png=file --loader:.jpg=file --loader:.jpeg=file --loader:.svg=dataurl --conditions=style),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "4.1.7",
  heart: [
    args: ~w(
      --input=assets/css/app.css
      --output=priv/static/assets/css/app.css
    ),
    cd: Path.expand("..", __DIR__)
  ]

# Configures Elixir's Logger
config :logger, :default_formatter,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
