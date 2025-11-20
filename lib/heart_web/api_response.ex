defmodule HeartWeb.APIResponse do
  @moduledoc """
  A shared utility module for standardizing API responses across all controllers
  into the {status, message, data} format.
  """

  @doc """
  Formats data into the standard API response structure: %{status: ..., message: ..., data: ...}.

  - status: Typically "success" or "error".
  - data: The primary payload (e.g., list of records, single record, or changeset errors).
  - message: A human-readable description of the operation result.
  """
  def format_response(status, data \\ nil, message \\ nil) do
    %{
      status: status,
      message: message,
      data: data
    }
  end
end
