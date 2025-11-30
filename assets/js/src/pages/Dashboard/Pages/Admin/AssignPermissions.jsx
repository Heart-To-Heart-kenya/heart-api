import React, { useState } from "react";
import { UserRoundCog } from "lucide-react";
import Header from "../../layouts/Header";

function AssignPermissions() {

  return (
    <>
      <Header title='Assign Permission'/>
    <div className="mt-5 bg-container-light dark:bg-container-dark rounded-xl border border-gray-300 dark:border-gray-600 mx-5">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
              <UserRoundCog />
            </div>
            <div>
              <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight">
                Manage Permissions
              </h2>
              <p className="text-secondary-text-light dark:text-secondary-text-dark mt-1 text-sm">
                Define what users with this role can do within the system.
              </p>
            </div>
          </div>
        </div>

        {/* Permissions List */}
        <div className="space-y-6 mt-6">
          {/* Admin Permissions Section */}
          <div className="rounded-lg border border-gray-300 dark:border-gray-600">
            <div className="p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-t-lg border-b border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
                Admin
              </h3>
              <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
                Manage all aspects of admin.
              </p>
            </div>
            <div className="divide-y divide-gray-300 dark:divide-gray-600">
              {["read", "write", "delete"].map((perm, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 hover:bg-background-light/50 dark:hover:bg-background-dark/50"
                >
                  <div>
                    <h4 className="font-medium text-text-light dark:text-text-dark">
                      {perm}
                    </h4>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
                      Allows user to {perm} admin data.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={perm === "read"}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

            <div className="rounded-lg border border-gray-300 dark:border-gray-600">
            <div className="p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-t-lg border-b border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
                Receiver
              </h3>
              <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
                Manage all aspects of Receiver.
              </p>
            </div>
            <div className="divide-y divide-gray-300 dark:divide-gray-600">
              {["read", "write", "delete"].map((perm, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 hover:bg-background-light/50 dark:hover:bg-background-dark/50"
                >
                  <div>
                    <h4 className="font-medium text-text-light dark:text-text-dark">
                      {perm}
                    </h4>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">
                      Allows user to {perm} admin data.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={perm === "read"}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-300 dark:border-gray-600 mt-6">
          <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>


    </div>
    </>
  );
}

export default AssignPermissions;
