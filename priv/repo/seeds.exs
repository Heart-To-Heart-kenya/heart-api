# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Heart.Repo.insert!(%Heart.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Heart.Repo
alias Heart.Authorization.{Roles, Permission, RolePermission}

# -- 1️⃣  Create some Roles --
roles = [
  %{
    role_name: "Admin",
    slug: "admin",
    description: "System administrator with full access",
    level: 10,
    is_system_role: true,
    status: "active",
    created_by: nil
  },
  %{
    role_name: "Donner",
    slug: "donner",
    description: "Manager with elevated permissions",
    level: 5,
    status: "active",
    created_by: nil
  },
  %{
    role_name: "User",
    slug: "user",
    description: "Regular user with limited access",
    level: 1,
    status: "active",
    created_by: nil
  }
]

roles =
  Enum.map(roles, fn attrs ->
    Repo.insert!(
      %Roles{}
      |> Roles.changeset(attrs),
      on_conflict: {:replace_all_except, [:id]},
      conflict_target: :role_name
    )
  end)

# -- 2️⃣  Create some Permissions --
permissions = [
  %{
    permission_name: "view_users",
    description: "Can view user information",
    scope: "users:view",
    status: "active",
    created_by: nil
  },
  %{
    permission_name: "edit_users",
    description: "Can edit user information",
    scope: "users:edit",
    status: "active",
    created_by: nil
  },
  %{
    permission_name: "delete_users",
    description: "Can delete users",
    scope: "users:delete",
    status: "inactive",
    created_by: nil
  },
  %{
    permission_name: "manage_roles",
    description: "Can manage roles and permissions",
    scope: "roles:manage",
    status: "active",
    created_by: nil
  }
]

permissions =
  Enum.map(permissions, fn attrs ->
    Repo.insert!(
      %Permission{}
      |> Permission.changeset(attrs),
      on_conflict: {:replace_all_except, [:id]},
      conflict_target: :permission_name
    )
  end)

# -- 3️⃣  Create Role-Permission links --

# Helper to find roles/permissions by name
get_role = fn name -> Enum.find(roles, &(&1.role_name == name)) end
get_perm = fn name -> Enum.find(permissions, &(&1.permission_name == name)) end

role_permissions = [
  %{role_id: get_role.("Admin").id, permission_id: get_perm.("view_users").id},
  %{role_id: get_role.("Admin").id, permission_id: get_perm.("edit_users").id},
  %{role_id: get_role.("Admin").id, permission_id: get_perm.("delete_users").id},
  %{role_id: get_role.("Admin").id, permission_id: get_perm.("manage_roles").id},
  %{role_id: get_role.("Donner").id, permission_id: get_perm.("view_users").id},
  %{role_id: get_role.("User").id, permission_id: get_perm.("view_users").id}
]

Enum.each(role_permissions, fn attrs ->
  Repo.insert!(
    %RolePermission{}
    |> RolePermission.changeset(Map.put(attrs, :created_by, nil)),
    on_conflict: :nothing
  )
end)

IO.puts("✅ Seeding completed successfully!")
