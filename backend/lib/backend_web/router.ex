defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :put_secure_browser_headers
  end

  scope "/", BackendWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end
end
