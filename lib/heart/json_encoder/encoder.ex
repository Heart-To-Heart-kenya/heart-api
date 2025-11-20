defmodule Heart.JsonEncoder do
  @moduledoc """
  Global Jason.Encoder implementation for Heart structs.
  It ensures all Ecto structs are serialized consistently by removing Ecto/OTP metadata,
  and handles special cases like Ecto.Changeset and Scrivener.Page.
  """
  import Ecto.Changeset, only: [traverse_errors: 2]

  # -----------------------------------------------------------------------------
  # Encoder Helper Functions (Publicized for access by defimpl blocks)
  # -----------------------------------------------------------------------------

  @doc false
  # Recursively processes a struct to convert it for JSON encoding.
  def process_for_json(data) do
    data
    # 1. Convert struct to map
    |> Map.from_struct()
    # 2. Remove Ecto/OTP metadata that shouldn't be exposed
    |> Map.delete(:__meta__)
    |> Map.delete(:__cardinality__)
    |> Map.delete(:__field__)
    |> Map.delete(:__owner__)
    |> Enum.into([])
    # 3. Iterate over fields to clean up associations and nested structs
    |> Enum.reduce([], &remove_unloaded/2)
    |> Enum.into(%{})
  end

  @doc false
  # Cleans up unloaded associations and recursively calls process_for_json on nested structs.
  def remove_unloaded({key, %Ecto.Association.NotLoaded{}}, accum),
    do: Keyword.put(accum, key, nil)

  def remove_unloaded({key, %_{__meta__: _} = data_map}, accum),
    do: Keyword.put(accum, key, process_for_json(data_map))

  def remove_unloaded(field, accum), do: [field | accum]

  @doc false
  # Converts Ecto.Changeset errors into a standardized map format.
  def encode_changeset_errors(changeset) do
    traverse_errors(changeset, fn {message, opts} ->
      Regex.replace(~r"%{(\w+)}", message, fn _, key ->
        Map.get(opts, String.to_existing_atom(key), key)
      end)
    end)
  end
end

# -----------------------------------------------------------------------------
# Global Jason.Encoder Protocol Implementation: Special Cases (Dedicated blocks)
# -----------------------------------------------------------------------------

# Implementation for Ecto.Changeset (Only matches Changeset structs)
defimpl Jason.Encoder, for: Ecto.Changeset do
  def encode(changeset, opts) do
    # FIX: Removed the hardcoded "message" key.
    # We only return the errors map, as the controller handles the outer message.
    formatted_errors = %{
      errors: Heart.JsonEncoder.encode_changeset_errors(changeset)
    }

    Jason.Encoder.encode(formatted_errors, opts)
  end
end

# Implementation for Scrivener.Page (Only matches Scrivener Page structs)
defimpl Jason.Encoder, for: Scrivener.Page do
  def encode(page, opts) do
    formatted_map = %{
      data: page.entries,
      meta: %{
        page_number: page.page_number,
        page_size: page.page_size,
        total_pages: page.total_pages,
        total_entries: page.total_entries
      }
    }

    Jason.Encoder.encode(formatted_map, opts)
  end
end

# -----------------------------------------------------------------------------
# Global Jason.Encoder Protocol Implementation: Ecto Schemas (Generic Handler)
# -----------------------------------------------------------------------------

# This implementation handles all Heart.Authorization schemas listed below.
defimpl Jason.Encoder,
  for: [
    Heart.Authorization.Roles,
    Heart.Authorization.RolePermission,
    Heart.Authorization.Permission
    # ... add all other Ecto schemas in your project here ...
  ] do
  # This single clause handles all structs listed in the 'for:' block.
  # The input 'value' will always be one of the Heart.Authorization structs.
  def encode(value, opts) do
    value
    |> Heart.JsonEncoder.process_for_json()
    |> Jason.Encode.map(opts)
  end
end
