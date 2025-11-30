import React, { useState } from "react";
import {
  ShieldCheck,
  Trash2,
  Edit,
  PlusCircle
} from 'lucide-react';
import RoleForm from "../../../../components/Forms/RoleForm";
import { roles } from "../../../../common/RolesList";
import ConfirmDialog from "../../../../common/ConfirmDialog";
import Header from "../../layouts/Header";

function Roles() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [editMode, setEditMode] = useState(false);



  const handleEdit = (role) => {
    setSelectedRole(role);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedRole(null);
    setEditMode(false);
    setIsModalOpen(true);
  };

  const handleDelete = (role) => {
    setSelectedRole(role);
    setIsConfirm(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole(null);
    setEditMode(false);
  };



  return (
    <>
      <Header title="Role Management" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Role Management
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Create and manage system roles with specific permissions and
                    access levels
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 bg-primary text-white font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
               <PlusCircle className="w-4 h-4" />
                Add Role
              </button>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl  bg-primary/10 text-primary">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          {role.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {role.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-end pt-4 border-t border-slate-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(role)}
                        className="flex items-center gap-1 px-3 py-1.5 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors group/edit"
                      >
                        <Edit className="h-4 w-4 group-hover/edit:scale-110 transition-transform" />
                      </button>
                      <button
                        onClick={() => handleDelete(role)}
                        className="flex items-center gap-1 px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group/delete"
                      >
                        <Trash2 className="h-4 w-4 group-hover/delete:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Add/Edit Role Modal */}
        {isModalOpen && (
          <RoleForm
            onClose={handleCloseModal}
            role={selectedRole}
            mode={editMode ? "edit" : "create"}
          />
        )}

        {/* Delete Confirmation Dialog */}
        {isConfirm && (
          <ConfirmDialog
            onClose={() => setIsConfirm(false)}
            onConfirm={() => {
              // Handle delete logic here
              console.log("Deleting role:", selectedRole);
              setIsConfirm(false);
              setSelectedRole(null);
            }}
            title="Delete Role"
            message={`Are you sure you want to delete the "${selectedRole?.name}" role?`}
            warningMessage="Users assigned to this role will lose their permissions. This action cannot be undone."
            confirmLabel="Delete Role"
            cancelLabel="Cancel"
            type="danger"
          />
        )}
      </main>
    </>
  );
}

export default Roles;