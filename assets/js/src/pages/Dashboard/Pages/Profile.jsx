import React, { useState } from "react";
import Header from "../layouts/Header";

function Profile() {
  const [activeSection, setActiveSection] = useState("profile");





  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Add account deletion logic here
      console.log("Account deletion initiated");
    }
  };

  // Profile Details Section
  const renderProfileDetails = () => (
    <div className="p-4 sm:p-6">
      {/* Section Header */}
      <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-tight mb-4">
        Personal Details
      </h3>

      <div className="divide-y divide-border-light dark:divide-border-dark">
        {/* Profile Picture */}
        <div className="flex items-center justify-between flex-wrap gap-4 px-4 py-6">
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 ring-2 ring-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvpYejHrenveVV57D2Pit7sWOTAuWkoj-RmPZ39CrLtZunCW0MiLVTlfHIK0-0nO8IkIDJQo95JC35QHIrOMUQzOU3O-1O885k5ey2xNjQnEaXjzeM4d9z8zh3GfubzpNWiB6MI_6go_qWC5i8Siy0RBTNrHPRAZNsk4-r5kkGcXL7Xdmqq_9zojcOrxuEDSFHb592vE6EpY6w4CugBVsjbWechJFDzKBLnSzM-r_Q3k6MYGtZzH2klw1W6J5AxFuEjyc_17eRq7qG")',
              }}
            ></div>
            <div>
              <p className="text-text-primary-light dark:text-text-primary-dark font-medium">
                Profile Picture
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                Click to upload or drag and drop <br />
                <span className="italic">SVG, PNG, JPG, GIF (max. 800x400px)</span>
              </p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-bold border rounded-lg border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 text-text-primary-light dark:text-text-primary-dark transition-colors">
            Upload
          </button>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 px-4 py-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              defaultValue="Eleanor Pena"
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
            />
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1"
            >
              Role / Title
            </label>
            <input
              id="role"
              type="text"
              value="Super Admin"
              disabled
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-gray-100 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark px-4 py-3 cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              defaultValue="eleanor.pena@example.com"
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 p-4 sm:p-6 border-t border-border-light dark:border-border-dark">
        <button className="px-4 py-2 rounded-lg text-sm font-bold text-text-primary-light dark:text-text-primary-dark bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );





  // Delete Account Section
  const renderDeleteAccount = () => (
    <div className="p-4 sm:p-6">
      <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-tight mb-4">
        Delete Account
      </h3>
      
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <div className="text-red-600 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-red-800 dark:text-red-200 font-semibold mb-2">
              Permanent Account Deletion
            </h4>
            <p className="text-red-700 dark:text-red-300 text-sm mb-4">
              Once you delete your account, there is no going back. This action cannot be undone. 
              All your data, including profile information, settings, and history will be permanently removed.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );




  return (
    <>
      <Header title='Profile'/>

    <div className="mt-8 bg-card-light dark:bg-card-dark transition-colors duration-300">
      {/* Navigation Tabs */}
      <div className="border-b border-border-light dark:border-border-dark">
        <nav className="flex space-x-8 px-4 sm:px-6">
          {[
            { id: "profile", label: "Profile Details" },
            { id: "delete", label: "Delete Account" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeSection === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Dynamic Content */}
      {activeSection === "profile" && renderProfileDetails()}
      {activeSection === "delete" && renderDeleteAccount()}
    </div>
     </>
  );
}

export default Profile;