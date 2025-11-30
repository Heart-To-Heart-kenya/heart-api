import React, { useState, useMemo, useCallback } from 'react'
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react'
import { roles } from '../../../../common/RolesList'
import ConfirmDialog from '../../../../common/ConfirmDialog'
import Header from '../../layouts/Header'

function AssigningUserRole() {
  const [selectedRole, setSelectedRole] = useState('Admin')
  const [isConfirm, setIsConfirm] = useState(false)
  const [currentUser] = useState({
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    currentRole: "Admin",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    status: "active"
  })

  const handleRoleUpdate = useCallback(() => setIsConfirm(true), [])
  const handleRoleSelect = useCallback((roleName) => setSelectedRole(roleName), [])
  const handleCancel = useCallback(() => window.history.back(), [])

  // Calculate permission changes if roles had permissions
  const permissionChanges = useMemo(() => {
    const currentRole = roles.find(r => r.name === currentUser.currentRole)
    const newRole = roles.find(r => r.name === selectedRole)
    if (!currentRole || !newRole) return []
    return []
  }, [currentUser.currentRole, selectedRole])

  const isRoleChanged = selectedRole !== currentUser.currentRole

  // Role Card
  const RoleCard = React.memo(({ role, isSelected, isCurrent, onSelect }) => {
    const IconComponent = role.icon || Shield
    return (
      <div
        role="radio"
        aria-checked={isSelected}
        tabIndex={0}
        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 
          ${isSelected
            ? 'border-primary bg-gradient-to-r from-primary/5 to-primary/2 shadow-sm'
            : 'border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800/50'}
          ${isCurrent ? 'ring-2 ring-primary/20' : ''}`}
        onClick={() => onSelect(role.name)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect(role.name)
          }
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-lg ${
              isSelected
                ? 'bg-primary/20 text-primary'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <IconComponent className="h-5 w-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-semibold text-gray-900 dark:text-white text-lg">{role.name}</span>
              {isSelected && (
                <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-primary">Selected</span>
                </div>
              )}
              {isCurrent && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{role.description}</p>
          </div>

          <div
            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? 'bg-primary border-primary' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {isSelected && <CheckCircle2 className="h-3 w-3 text-white" />}
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <Header title='Assign User Role' />
      <div className="mx-auto max-w-2xl p-6">
        <div className="flex flex-col gap-8 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          {/* Header */}
          <header className="relative">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Update User Role</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Manage user permissions and access levels across the platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* User Profile */}
          <section>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-16 w-16 rounded-2xl object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{currentUser.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 truncate">{currentUser.email}</p>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium border bg-gray-100 text-green-800"
                  >
                    {currentUser.currentRole}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Role Selection */}
          <section>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-lg font-semibold text-gray-900 dark:text-white">Select New Role</label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Choose the appropriate role</p>
                </div>
                <span className="text-xs text-red-500 font-medium bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                  Required
                </span>
              </div>

              <div role="radiogroup" className="grid gap-4">
                {roles.map((role) => (
                  <RoleCard
                    key={role.name}
                    role={role}
                    isSelected={selectedRole === role.name}
                    isCurrent={currentUser.currentRole === role.name}
                    onSelect={handleRoleSelect}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <footer className="flex gap-3 pt-4">
            <button
              onClick={handleCancel}
              className="flex-1 px-6 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleRoleUpdate}
              disabled={!isRoleChanged}
              className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              <span>Update User Role</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </footer>

          {!isRoleChanged && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center -mt-4">
              Select a different role to enable update
            </p>
          )}
        </div>

        {/* Confirmation Dialog */}
        {isConfirm && (
          <ConfirmDialog
            onClose={() => setIsConfirm(false)}
            title="Confirm Role Change"
            message={`Are you sure you want to change ${currentUser.name}'s role from "${currentUser.currentRole}" to "${selectedRole}"?`}
            warningMessage="This action will modify user permissions and access levels."
            confirmLabel="Confirm Change"
            cancelLabel="Cancel"
            type="warning"
            user={{
              name: currentUser.name,
              avatar: currentUser.avatar,
              currentRole: currentUser.currentRole,
              newRole: selectedRole
            }}
          />
        )}
      </div>
    </>
  )
}


export default AssigningUserRole

