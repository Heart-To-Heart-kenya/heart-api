import React, { useState } from 'react'
import AssignPermissions from './AssignPermissions';
import PermissionList from './PermissionList';

function Permissions() {
  const [activeTab, setActiveTab] = useState('permissions')

  return (
    <div className="mt-8 m-3 bg-card-light dark:bg-card-dark transition-colors duration-300 rounded-lg">
      {/* Navigation Tabs */}
      <div className="border-b border-border-light dark:border-border-dark">
        <nav className="flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab('permissions')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'permissions'
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
            }`}
          >
            Permissions
          </button>
          <button
            onClick={() => setActiveTab('AssignPermissions')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'AssignPermissions'
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
            }`}
          >
            Assign Permissions
          </button>
        </nav>
      </div>


  

       {/* Permissions Tab Content */}
      {activeTab === 'permissions' && (
        <PermissionList/>
      )}

      {/* Permissions Tab Content */}
      {activeTab === 'AssignPermissions' && (
        <AssignPermissions/>
      )}
    </div>

  
    
  )
}

export default Permissions