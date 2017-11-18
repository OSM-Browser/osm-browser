defmodule BackendWeb.PageController do
  use BackendWeb, :controller
  require Logger

  def index(conn, _params) do
    ip = conn.remote_ip
      |> :inet_parse.ntoa
      |> to_string

    location = case Geolix.lookup("8.8.8.8", [where: :city]) do
      %{location: location} ->
        %{:lat  => location.latitude |> to_string,
          :lng  => location.longitude |> to_string,
          :zoom => "13"}
      _ ->
        %{:lat  => "50.5134265",
          :lng  => "17.2045898",
          :zoom => "5"}
    end

    render conn, "index.html", location: location
  end
end
