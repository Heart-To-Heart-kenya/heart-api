import React, { useState } from "react";
import {
  PlusCircle,
  Trash2,
  ShieldCheck,
  Edit,
  UserRoundCog,
} from 'lucide-react';
import ConfirmDialog from "../../../../common/ConfirmDialog";
import Header from "../../layouts/Header";
import PermissionsForm from "../../../../components/Forms/PermissionsForm";
import ItemNotFound from "../../../../components/ItemNotFound";


const permissions = [
  { id: 1, name: 'user.create', description: 'Allows creating a new user account.' },
  { id: 2, name: 'user.edit', description: 'Allows editing an existing user\'s profile.' },
  { id: 3, name: 'donation.view_all', description: 'Grants access to view all donation records.' },
  { id: 4, name: 'donation.export', description: 'Allows exporting donation data to a CSV file.' },
  { id: 5, name: 'settings.manage', description: 'Grants access to manage site-wide settings.' },
];

function PermissionList() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedPermission(null)
   setEditMode(false);
    setIsModalOpen(true);
  };


  const handleDelete = (permission) => {
    setSelectedPermission(permission);
    setIsConfirm(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPermission(null);
    setEditMode(false);
  };


  return (
    <>
      <Header title='Permission'/>
    <main className="flex-1 p-6 md:p-10">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Manage Permissions</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              View, create, and manage system permissions securely.
            </p>
          </div>

          <button
             onClick={handleAdd}
            className="flex items-center gap-2 bg-primary text-white font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <PlusCircle className="w-4 h-4" />
            Add Permission
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-card backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/40 border-b border-border-light dark:border-border-dark">
              <tr>
                <th className="p-4 text-sm font-semibold text-foreground/80">Permission</th>
                <th className="p-4 text-sm font-semibold text-foreground/80">Description</th>
                <th className="p-4 text-sm font-semibold text-right text-foreground/80">Actions</th>
              </tr>
            </thead>
            <tbody>
              {permissions.length === 0 ? (
                 <ItemNotFound
                icon={<UserRoundCog className="h-20 w-20 text-primary" />}
                title="No Categories Found"
                description="There are no categories in the system at the moment."
                showActions={false}
              />
              ) : (
                permissions.map((p, index) => (
                  <tr
                    key={p.id}
                    className={`border-b border-border-light dark:border-border-dark transition-colors ${
                      index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                    } hover:bg-muted/30`}
                  >
                    <td className="p-4 font-medium">
                      <code className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono">
                        {p.name}
                      </code>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{p.description}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                        onClick={() => handleEdit(p)}
                          className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition transform hover:scale-105"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button    onClick={() => handleDelete(p)}
                            className="p-2 text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition transform hover:scale-105"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>


<>     
     {/* MODAL */}
      {isModalOpen && (
            <PermissionsForm
            onClose={handleCloseModal}
            permission={selectedPermission}
            mode={editMode ? "edit" : "create"}
            />
      )}

    {isConfirm && (
        <ConfirmDialog
        onClose={() => setIsConfirm(false)}
        title="Confirm Deleting permission"
        message="Are you sure you want to delete the permission?"
        warningMessage="Deleting this permission cannot be undone and will affect all roles assigned to it."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        type= "danger" 
      />
    )}
</>
    </main>
    </>
  );
}



export default PermissionList