import React, { useState, useEffect } from 'react';
import { ShieldUser } from 'lucide-react';
import Input from '../ui/Input';
import TextInput from '../ui/TextInput';

function RoleForm({ onClose, role, mode }) {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (mode === 'edit' && role) {
      setRoleName(role.name);
      setDescription(role.description);
    } else {
      setRoleName('');
      setDescription('');
    }
  }, [mode, role]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'edit') {
      console.log('Updating role:', { ...role, });
    } else {
      console.log('Creating role:',);
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
                {mode === 'edit' ? 'Edit Role' : 'Create New Role'}
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

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Role Name */}
            <div className="flex flex-col">
            <Input
                label="Role Name"
                id="roleName"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="e.g. manage-donations"
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
           <TextInput
              label="Description (Optional)"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the permissions and responsibilities for this role"
              rows={4}
            />

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4 mt-2 border-t border-border-light dark:border-border-dark">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-light dark:text-text-dark  border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                {mode === 'edit' ? 'Save Changes' : 'Create Role'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoleForm;
