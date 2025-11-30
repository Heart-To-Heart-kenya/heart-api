import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";

function UserManagementDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data (replace with API call)
  const mockUser = {
    id: parseInt(id),
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    currentRole: "Campaign Manager",
    joinDate: "2024-01-15",
    emailVerified: true,
    personalInfo: {
      address: "123 Main St, New York, NY 10001",
      dateOfBirth: "1985-06-15",
      emergencyContact: "Michael Pena • (555) 987-6543",
    },
  };

  useEffect(() => {
    setUser(mockUser);
  }, [id]);

  if (!user) return null;

  // Reusable info item
  const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-200 dark:border-slate-600">
      <div className="h-4 w-4 text-slate-500 dark:text-slate-300">{icon}</div>
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-slate-900 dark:text-white font-medium">{value}</p>
      </div>
    </div>
  );

  return (
    <>
      <Header title="User Management" />

      <div className="mx-auto max-w-7xl p-6">

        {/* Page Title */}
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              User Details
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              View and manage user information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">

              <div className="text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-28 w-28 rounded-2xl mx-auto mb-4 border-4 border-white dark:border-slate-700 shadow-sm object-cover"
                />

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {user.name}
                </h2>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                  {user.email}
                </p>

                <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-green-800">
                  {user.currentRole}
                </span>

                {/* Sidebar Metadata */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Member since:
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {new Date(user.joinDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Email status:</span>
                    <span
                      className={`font-medium ${
                        user.emailVerified
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {user.emailVerified ? "Verified" : "Not Verified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">

              {/* Tabs */}
              <div className="border-b border-slate-200 dark:border-slate-700 px-6">
                <nav className="flex gap-8">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-4 font-medium text-sm transition-colors flex items-center gap-2 ${
                      activeTab === "overview"
                        ? "text-primary border-b-2 border-primary"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                    }`}
                  >
                    <User className="h-4 w-4" />
                    Overview
                  </button>
                </nav>
              </div>

              {/* Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                      {/* Contact Information */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <User className="h-4 w-4 text-slate-400" />
                          Contact Information
                        </h4>

                        <div className="space-y-4">
                          <InfoItem icon={<Mail />} label="Email" value={user.email} />
                          <InfoItem icon={<Phone />} label="Phone" value={user.phone} />
                          <InfoItem icon={<MapPin />} label="Location" value={user.location} />
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <User className="h-4 w-4 text-slate-400" />
                          Personal Information
                        </h4>

                        <div className="space-y-4">
                          <InfoItem
                            icon={<Calendar />}
                            label="Date of Birth"
                            value={new Date(
                              user.personalInfo.dateOfBirth
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          />

                          <InfoItem
                            icon={<MapPin />}
                            label="Address"
                            value={user.personalInfo.address}
                          />

                          <InfoItem
                            icon={<User />}
                            label="Emergency Contact"
                            value={user.personalInfo.emergencyContact}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default UserManagementDetail;
