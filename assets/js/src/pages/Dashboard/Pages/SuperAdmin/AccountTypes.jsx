import React, { useState } from "react";
import {
  Trash2,
  Edit,
  PlusCircle,
  UserLock,
} from "lucide-react";
import ConfirmDialog from "../../../../common/ConfirmDialog";
import Header from "../../layouts/Header";
import AccountTypeForm from "../../../../components/Forms/AccountTypeorm";
import { accountTypes } from "../../../../common/AccountType";
import ItemNotFound from "../../../../components/ItemNotFound";

function AccountType() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (cat) => {
    setSelectedAccountType(cat);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedAccountType(null);
    setEditMode(false);
    setIsModalOpen(true);
  };

  const handleDelete = (cat) => {
    setSelectedAccountType(cat);
    setIsConfirm(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccountType(null);
    setEditMode(false);
  };

  return (
    <>
      <Header title="Account type Management" />

   <main className="flex-1 p-6">
        <div className="mx-auto space-y-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Account Type Management
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Create, edit, and manage system account type
              </p>
            </div>

            <button
              onClick={handleAdd}
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-lg shadow hover:shadow-md hover:bg-primary/90 transition-all duration-200"
            >
              <PlusCircle className="w-5 h-5" />
              Add Account Type
            </button>
          </div>

          {/* Table Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl  border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Card Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Account Type List
              </h3>
            </div>

            {accountTypes.length === 0 ? (
              <ItemNotFound
                icon={<UserLock className="h-20 w-20 text-primary" />}
                title="No account type Found"
                description="There are no account type in the system at the moment."
                showActions={false}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        ID
                      </th>

                      <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Account Type
                      </th>

                      <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {accountTypes.map((accountType) => (
                      <tr
                        key={accountType.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition"
                      >
                        <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400">
                            #{accountType.id}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-center text-slate-800 dark:text-slate-200">
                          {accountType.name}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEdit(accountType)}
                              className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition transform hover:scale-105"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleDelete(accountType)}
                              className="p-2 text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition transform hover:scale-105"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <AccountTypeForm
            onClose={handleCloseModal}
            accountType={selectedAccountType}
            mode={editMode ? "edit" : "create"}
          />
        )}

        {/* Confirmation Dialog */}
        {isConfirm && (
          <ConfirmDialog
            onClose={() => setIsConfirm(false)}
            onConfirm={() => {
              setIsConfirm(false);
              setSelectedAccountType(null);
            }}
            title="Delete AccountType"
            message={`Are you sure you want to delete "${selectedAccountType?.name}"?`}
            warningMessage="This action cannot be undone."
            confirmLabel="Delete AccountType"
            cancelLabel="Cancel"
            type="danger"
          />
        )}
      </main>
    </>
  );
}




export default AccountType