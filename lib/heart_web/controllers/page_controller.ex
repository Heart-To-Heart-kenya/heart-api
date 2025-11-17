defmodule HeartWeb.PageController do
  use HeartWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
