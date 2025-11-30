import React, { useState } from "react";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function CompleteProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [setProfilePicture] = useState(null);
  const [role, setRole] = useState("Individual");
  const [loading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <main className="flex items-center justify-center bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 px-4">
      <div className="w-full max-w-md space-y-8 py-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">Complete Your Profile</h2>
          <p className="mt-2 text-sm text-subtle-foreground-light dark:text-subtle-foreground-dark">
            Add your details to personalize your experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="text-center">
              <label className="text-sm font-medium text-foreground-light dark:text-foreground-dark block mb-3">Profile Picture</label>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-subtle-light dark:bg-subtle-dark flex items-center justify-center overflow-hidden border-2 border-dashed border-subtle-light dark:border-subtle-dark">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Profile preview" className="w-full h-full object-cover" />
                    ) : (
                      <svg
                        className="w-10 h-10 text-subtle-foreground-light dark:text-subtle-foreground-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                  {previewUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewUrl(null);
                        setProfilePicture(null);
                      }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 transition-colors"
                    >
                      <X />
                    </button>
                  )}
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <label
                    htmlFor="profilePicture"
                    className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-subtle-light dark:border-subtle-dark text-sm font-medium rounded-lg text-foreground-light dark:text-foreground-dark bg-background-light dark:bg-background-dark hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    Upload Picture
                  </label>
                  <input id="profilePicture" name="profilePicture" type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
                  <p className="text-xs text-subtle-foreground-light dark:text-subtle-foreground-dark">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="text-sm font-medium text-foreground-light dark:text-foreground-dark block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-subtle-light dark:border-subtle-dark rounded-lg text-foreground-light dark:text-foreground-dark bg-background-light dark:bg-background-dark placeholder-subtle-foreground-light dark:placeholder-subtle-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 sm:text-sm"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="text-sm font-medium text-foreground-light dark:text-foreground-dark block mb-2">
                I am a...
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-subtle-light dark:border-subtle-dark rounded-lg bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 sm:text-sm"
              >
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-primary/90  focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Setting up your profile...
                </>
              ) : (
                "Complete Profile"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full py-3 px-4 border border-subtle-light dark:border-subtle-dark text-sm font-semibold rounded-lg text-foreground-light dark:text-foreground-dark bg-transparent hover:bg-subtle-light dark:hover:bg-subtle-dark  focus:ring-offset-2 focus:ring-primary transition-all duration-200"
            >
              I'll do this later
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CompleteProfile;
