import React, { useState } from "react";
import {
  Trash2,
  Edit,
  PlusCircle,
  Tag,
} from "lucide-react";
import { conditionList } from "../../../../common/ItemConditionList";
import ConfirmDialog from "../../../../common/ConfirmDialog";
import Header from "../../layouts/Header";
import ItemNotFound from "../../../../components/ItemNotFound";
import ItemConditionForm from "../../../../components/Forms/ItemConditionForm";

function ItemCondition() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (cat) => {
    setSelectedCondition(cat);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedCondition(null);
    setEditMode(false);
    setIsModalOpen(true);
  };

  const handleDelete = (cat) => {
    setSelectedCondition(cat);
    setIsConfirm(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCondition(null);
    setEditMode(false);
  };

  return (
    <>
      <Header title="Condition Management" />

    <main className="flex-1 p-6">
        <div className="mx-auto space-y-6">

          {/* Page Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Condition Management
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Create, edit, and manage system Condition
              </p>
            </div>

            <button
              onClick={handleAdd}
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-lg shadow hover:shadow-md hover:bg-primary/90 transition-all duration-200"
            >
              <PlusCircle className="w-5 h-5" />
              Add Condition
            </button>
          </div>

          {/* Table Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">

            {/* Card Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Condition List
              </h3>
            </div>

          {conditionList.length === 0 ? (
           <ItemNotFound
            icon={<Tag className="h-20 w-20 text-primary" />}
            title="No Condition Found"
            description="There are no condition in the system at the moment."
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
                          condition
                      </th>

                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {conditionList.map((condition) => (
                    <tr
                      key={condition.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition"
                    >
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">
                         <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400">
                          #{condition.id}
                        </span>
                      </td>

                    <td className="px-6 py-4 text-center text-slate-800 dark:text-slate-200">
                      {condition.name}
                    </td>

                    <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">

                          <button
                            onClick={() => handleEdit(condition)}
                            className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition transform hover:scale-105"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDelete(condition)}
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
          <ItemConditionForm
            onClose={handleCloseModal}
            condition={selectedCondition}
            mode={editMode ? "edit" : "create"}
          />
        )}

        {/* Confirmation Dialog */}
        {isConfirm && (
          <ConfirmDialog
            onClose={() => setIsConfirm(false)}
            onConfirm={() => {
              setIsConfirm(false);
              setSelectedCondition(null);
            }}
            title="Delete Condition"
            message={`Are you sure you want to delete "${selectedCondition?.name}"?`}
            warningMessage="This action cannot be undone."
            confirmLabel="Delete Condition"
            cancelLabel="Cancel"
            type="danger"
          />
        )}
      </main>
    </>
  );
}



export default ItemCondition