import React, { useState } from "react";
import {
  Users,
  HeartHandshake,
  Building2,
  Home,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

function CompleteSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("Donor");

  const handleRoleSelect = (role) => setSelectedRole(role);
  const handleContinue = () => setCurrentStep(2);
  const handleBack = () => setCurrentStep(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with role:", selectedRole);
  };

  const roles = [
    { name: "Receiver", icon: <Users className="w-6 h-6 text-primary" /> },
    { name: "Donor", icon: <HeartHandshake className="w-6 h-6 text-primary" /> },
    { name: "Organization", icon: <Building2 className="w-6 h-6 text-primary" /> },
    { name: "Homes/Shelters", icon: <Home className="w-6 h-6 text-primary" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-white to-primary/10 dark:from-background-dark dark:via-primary/10 dark:to-background-dark font-display transition-colors duration-300">
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Step Content */}
        <div className="w-full max-w-lg bg-white dark:bg-background-dark border border-border-light dark:border-border-dark shadow-xl rounded-2xl p-8 backdrop-blur-md transition-all">
          {/* Step 1: Role Selection */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">
                  Select Your Role
                </h2>
                <p className="mt-2 text-base text-foreground-light/70 dark:text-foreground-dark/70">
                  Choose how you’d like to contribute to Heart to Heart
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <label
                    key={role.name}
                    onClick={() => handleRoleSelect(role.name)}
                    className={`group flex flex-col items-center justify-center gap-3 cursor-pointer rounded-xl border-2 p-6 text-center transition-all ${
                      selectedRole === role.name
                        ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-md"
                        : "border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    {role.icon}
                    <span className="font-semibold text-foreground-light dark:text-foreground-dark">
                      {role.name}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-primary/90 transition-all"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Additional Info */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">
                  Additional Information
                </h2>
                <p className="mt-2 text-sm text-foreground-light/70 dark:text-foreground-dark/70">
                  Provide details to complete your setup.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="role"
                    className="text-sm font-medium text-foreground-light dark:text-foreground-dark block pb-2"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option>Donor</option>
                    <option>Organization</option>
                    <option>Volunteer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="donation-amount"
                    className="text-sm font-medium text-foreground-light dark:text-foreground-dark block pb-2"
                  >
                    Preferred Donation Amount
                  </label>
                  <input
                    id="donation-amount"
                    type="number"
                    placeholder="Enter amount (optional)"
                    className="w-full px-4 py-3 border rounded-lg bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 border border-border-light dark:border-border-dark text-foreground-light dark:text-foreground-dark rounded-lg hover:bg-primary/10 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                  >
                    Submit
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompleteSetup;
