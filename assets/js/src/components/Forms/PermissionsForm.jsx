import React, { useEffect, useState } from "react";

import Input from "../ui/Input";
import { ShieldUser } from "lucide-react";
import TextInput from "../ui/TextInput";

function PermissionsForm({ onClose, mode, permission }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (mode === 'edit' && permission) {
      setName(permission.name);
      setDescription(permission.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [mode, permission]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'edit') {
      console.log('Updating permission:', { ...permission, });
    } else {
      console.log('Creating permission:',);
    }

    onClose();
  };


  return (
 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        
           <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <ShieldUser className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {mode === 'edit' ? 'Edit Permission' : 'Create Permission'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
          <form className="flex flex-col gap-6">
            {/* Permission Name */}
            <div className="flex flex-col">
                <Input
                label="Permission Name"
                id="Permission Name"
                placeholder="e.g. manage-donations"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
             <TextInput
                label="Description"
                id="description"
                placeholder="Allows user to view, edit, and delete donation records"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4 mt-2 border-t border-border-light dark:border-border-dark">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                 {mode === 'edit' ? 'Save Changes' : 'Create Permission'} 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PermissionsForm;
