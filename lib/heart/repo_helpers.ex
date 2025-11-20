defmodule Heart.RepoHelpers do
  @moduledoc """
  Convenience macros so Repo backed schemas don't have to re-implement common access patterns.
  """

  import Ecto.Query, only: [from: 1, from: 2]

  defmacro __using__(opts) do
    quote do
      import Ecto.Query, only: [from: 1, from: 2]

      @repo Keyword.fetch!(unquote(opts), :repo)
      @filterable Keyword.get(unquote(opts), :filterable, [])

      # --- Basic CRUD ---

      def get!(queryable \\ __MODULE__, id)
      def get!(queryable, id), do: @repo.get!(queryable, id)
      def get(queryable \\ __MODULE__, id), do: @repo.get(queryable, id)

      def one!(queryable \\ __MODULE__), do: @repo.one!(queryable)
      def one(queryable \\ __MODULE__), do: @repo.one(queryable)

      def count(queryable \\ __MODULE__) do
        @repo.one(from(queryable, select: count("*")))
      end

      def all(queryable \\ __MODULE__, opts \\ []) do
        queryable
        |> Heart.RepoHelpers.query_from_opts(opts)
        |> @repo.all()
      end

      def newest(queryable \\ __MODULE__) do
        from(m in queryable, order_by: [desc: :id], limit: 1)
        |> @repo.one()
      end

      def delete(id) when is_binary(id) or is_integer(id) do
        from(m in __MODULE__, where: m.id == ^id)
        |> @repo.delete_all()
      end

      # --- Pagination (Requires Scrivener in Heart.Repo) ---

      def paginate(queryable \\ __MODULE__, params, opts \\ []) do
        queryable
        |> Heart.RepoHelpers.query_from_opts(opts)
        |> @repo.paginate(params)
      end

      def fetch(queryable \\ __MODULE__, params, opts \\ [])

      def fetch(queryable, %{"paginated" => "true"} = params, opts) do
        paginate(queryable, params, opts)
      end

      def fetch(queryable, %{paginated: true} = params, opts) do
        paginate(queryable, params, opts)
      end

      def fetch(queryable, _params, opts), do: all(queryable, opts)

      # --- Filtering ---

      def filter_query(queryable \\ __MODULE__, filters) do
        @filterable
        |> Enum.reduce(queryable, fn
          {field, type}, query ->
            query_by_field_type(query, {field, type}, Map.get(filters, to_string(field)))

          field, query ->
            query_by_field_type(query, field, Map.get(filters, to_string(field)))
        end)
      end

      defp query_by_field_type(queryable, _field, nil), do: queryable
      defp query_by_field_type(queryable, _field, ""), do: queryable

      defp query_by_field_type(queryable, {field, type}, value) do
        case type do
          :text -> from(q in queryable, where: ilike(field(q, ^field), ^"%#{value}%"))
          _ -> from(q in queryable, where: field(q, ^field) == ^value)
        end
      end

      defp query_by_field_type(queryable, field, value) do
        from(q in queryable, where: field(q, ^field) == ^value)
      end

      # Fixed arity for filter_query
      defoverridable get: 2, get!: 2, filter_query: 2
    end
  end

  # --- Public Helper Functions ---

  @doc """
  Add selects, offsets, limits and order_by clauses from opts
  """
  @spec query_from_opts(Ecto.Queryable.t(), Keyword.t()) :: Ecto.Query.t()
  def query_from_opts(queryable, opts) do
    {columns, opts} = Keyword.pop(opts, :select, [])
    {offset, opts} = Keyword.pop(opts, :offset)
    {limit, opts} = Keyword.pop(opts, :limit)
    {order_by, _opts} = Keyword.pop(opts, :order_by)
    {date_range, _opts} = Keyword.pop(opts, :date_range)
    {preload, _opts} = Keyword.pop(opts, :preload)

    queryable
    |> select_for_opts(columns)
    |> order_by_for_opts(order_by)
    |> offset_for_opts(offset)
    |> limit_for_opts(limit)
    |> date_range_query(date_range)
    |> preload_opts(preload)
  end

  defp select_for_opts(queryable, []), do: from(queryable)

  defp select_for_opts(queryable, columns) when is_list(columns) do
    from(queryable, select: ^columns)
  end

  defp order_by_for_opts(queryable, nil), do: queryable
  defp order_by_for_opts(queryable, order_by), do: from(queryable, order_by: ^order_by)

  defp offset_for_opts(queryable, nil), do: queryable
  defp offset_for_opts(queryable, offset) when offset >= 0, do: from(queryable, offset: ^offset)

  defp limit_for_opts(queryable, nil), do: queryable
  defp limit_for_opts(queryable, limit) when limit >= 0, do: from(queryable, limit: ^limit)

  defp date_range_query(queryable, nil), do: queryable

  defp date_range_query(queryable, %{start_date: start_date, end_date: end_date}) do
    from(q in queryable,
      where:
        q.inserted_at >= ^check_date_format(start_date) and
          q.inserted_at <= ^check_date_format(end_date)
    )
  end

  defp check_date_format(date_time_string) do
    case Date.from_iso8601(date_time_string) do
      {:ok, _} -> NaiveDateTime.from_iso8601!(date_time_string <> " 00:00:00")
      _ -> NaiveDateTime.from_iso8601!(date_time_string)
    end
  end

  defp preload_opts(queryable, nil), do: queryable
  defp preload_opts(queryable, []), do: queryable
  defp preload_opts(queryable, [_ | _] = opts), do: from(q in queryable, preload: ^opts)
end
