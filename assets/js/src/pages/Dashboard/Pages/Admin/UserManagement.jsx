import React, { useState } from 'react'
import { 
  Eye, 
  Search,
  Filter,
  Phone,
  UserX,
  UserCheck,
  Mail,
  Edit
} from 'lucide-react'
import { Link } from "react-router-dom";
import ConfirmDialog from '../../../../common/ConfirmDialog';
import Header from '../../layouts/Header';
import Pagination from '../../../../components/Pagination';
import { roles } from "../../../../common/RolesList";
import ItemNotFound from '../../../../components/ItemNotFound';

function UserManagement() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionType, setActionType] = useState('');  
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, USA",
      role: "Admin",
      dateJoined: "2023-01-15",
      status: "active",
      lastActive: "2 hours ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6hCZrq5IU8fHt6X5CjkeXdMmS9hGJ-iT8xQ31BofSrB5xDZ7xTujj2X5iGZbSc3TJhzj68PwPxNn8oheAkDRgiucryhFo2O6z5dRXJC2LSBVReKVqcuqNrY93THsse_JbdtZ89HqQS8pWLE8QI8nMhwqAvrckOLzdLonXrWDnsrrCPpfJdRlHlgM7e5cG1AkhOsE38447OL6oLVZLBakpB_TN-mKVR9wBB6hxBpwubzqM79SITHQQ_7yBiUyUC3PD-1s0Tv1fJMrr",
      donations: 15,
      totalDonated: 2500
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      phone: "+1 (555) 234-5678",
      location: "Los Angeles, USA",
      role: "Donor",
      dateJoined: "2023-02-20",
      status: "active",
      lastActive: "1 day ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8_H4Xp03H_O4buGta79_5pi_HvCzbKRiHIP1DdT7NHZt1Ri-II0KSt0jdPJU0eaK36N-bpqFFuihP-ghEUyx8arqngQfBnKazXrLd3uZsLaPCXm7zptez7bGiRj24nbwcq4JxLctrYVRbyX1RM3Z9HI-EApedFiagx4Thh6vswHIf0sQa8LtNldHoWOo4Ru8tacg9vJh-97-wAoJ4EZLCIXBHogU8JqNbOJZQcUrr44V2DW7Om9jYeNm0MlaoYZO6ZRAS307T1ryE",
      donations: 8,
      totalDonated: 1200
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "sam.w@example.com",
      phone: "+1 (555) 345-6789",
      location: "Chicago, USA",
      role: "Volunteer",
      dateJoined: "2023-03-10",
      status: "suspended",
      lastActive: "1 week ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr93wW2gH1-BTO9r7FmKXoix-bbMZtZ8IPQwvboEu3DPJYjkcRwISkyxlHMR_9JS-rRQMwYW-XYIAb3F0M_RRhQNCsivy_r7Eqq6hKEWttYlmoLst0yQwnnL8SUwU4mtm6Iz2rc6rk0q5xDBNbV81psNk4syFr439m6VcCqSSrJHP8KPaQjEMMio6kd49yNAQiNEMCIvLYGvj-45ZgTVwO0DuPhj9a_htTqFkLb0i0IJ31RuZWjviJO71KCqgmI8xGDyfIwrF5BQqF",
      volunteerHours: 45,
      events: 6
    },
    {
      id: 4,
      name: "Jessica Brown",
      email: "jess.b@example.com",
      phone: "+1 (555) 456-7890",
      location: "Miami, USA",
      role: "Donor",
      dateJoined: "2023-04-05",
      status: "suspended",
      lastActive: "2 weeks ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRspRsiJOPsG0CtdSmWsXKvEAiSdcih2MCwa9hhZuOn7cI3JX96egU2GEA52rm0Ha4lu4rZjJcZJ79uMrxCduY1N94niagBfjLuMO2L1SxwP5lHW0Ur4u4EUaY9zjaJsknWZaiIi6z3lagc1iLsGCg9593kmfn2aYtiVQ6JtZ4vWLR6ME8uChOza2J_vzjyLsZ_pssbKBG1YIvPlQdSOgNb_xmBh3l50I3IyZGmmfvYicpA_cHsVn-dyidCMRZXjttC7lhSEslnc_w",
      donations: 3,
      totalDonated: 450
    },
    {
      id: 5,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "+1 (555) 567-8901",
      location: "San Francisco, USA",
      role: "Moderator",
      dateJoined: "2023-05-12",
      status: "active",
      lastActive: "30 minutes ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      moderatedItems: 127,
      reportsHandled: 45
    }
  ]);



  const toggleUserStatus = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };



  const handleAction = (user, type) => {
    setSelectedUser(user);
    setActionType(type);
    setIsConfirm(true);
  };

  const confirmAction = () => {
    if (!selectedUser) return;
    
    switch (actionType) {
      case 'suspend':
        toggleUserStatus(selectedUser.id, 'suspended');
        break;
      default:
        break;
    }
    
    setIsConfirm(false);
    setSelectedUser(null);
    setActionType('');
  };




  const getActionConfig = (actionType, user) => {
    const configs = {
      suspend: {
        title: "Suspend User Account",
        message: `Are you sure you want to suspend ${user?.name}'s account?`,
        warning: "The user will not be able to access their account until it's reactivated by an administrator.",
        confirmLabel: "Suspend Account",
        type: "warning"
      },
      activate: {
        title: "Activate User Account",
        message: `Are you sure you want to activate ${user?.name}'s account?`,
        warning: "The user will regain full access to their account and all associated features.",
        confirmLabel: "Activate Account",
        type: "success"
      }
    };
    return configs[actionType] || configs.delete;
  };



  return (
    <>
      <Header title="User Management" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                User Management
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Manage all users within the Heart to Heart platform
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>
              </div>

              <select className="px-4 py-2.5 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="All">All Roles</option>
                {roles.map((role) => (
                  <option>{role.name}</option>
                ))}
              </select>

              <select className="px-4 py-2.5 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="All">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700  overflow-hidden">
            {/* Table Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-900/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  User Directory
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Filter className="h-4 w-4" />
                  Sorted by: Newest
                </div>
              </div>
            </div>

            {users.length === 0 ? (
              <ItemNotFound
                icon={<UserX className="h-20 w-20 text-primary" />}
                title="No Users Found"
                description="There are no users in the system at the moment."
                showActions={false}
              />
            ) : (
              <>
                {/* Table Content */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 dark:bg-gray-900/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          User
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Email
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                         Contact
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Role
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                      {users.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-slate-50 dark:hover:bg-gray-700/30 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700"
                              />
                              <div>
                                <p className="font-semibold text-slate-900 dark:text-white">
                                  {user.name}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400"></p>
                                <div className="flex items-center gap-2 mt-1"></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <Mail className="h-3 w-3 text-slate-400 mr-1" />
                              {user.email}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                              <Phone className="h-3 w-3 text-slate-400 mr-1" />
                              {user.phone}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-green-800 ">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-green-800'>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1">
                              <Link to={`/dashboard/user-details/${user.id}`}>
                                <button className="p-2 text-slate-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors">
                                  <Eye className="h-4 w-4" />
                                </button>
                              </Link>

                              <Link
                                to={`/dashboard/assigning-user-role/${user.id}`}
                              >
                                <button className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                                  <Edit className="h-4 w-4" />
                                </button>
                              </Link>

                              {user.status === "active" ? (
                                <button
                                  onClick={() => handleAction(user, "suspend")}
                                  className="p-2 text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 rounded-lg transition-colors"
                                >
                                  <UserX className="h-4 w-4" />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleAction(user, "activate")}
                                  className="p-2 text-slate-400 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 rounded-lg transition-colors"
                                >
                                  <UserCheck className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                 <div className="mt-10 flex items-center justify-start pb-5">
                  <Pagination />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Confirmation Dialog */}
        {isConfirm && selectedUser && (
          <ConfirmDialog
            onClose={() => {
              setIsConfirm(false);
              setSelectedUser(null);
              setActionType("");
            }}
            onConfirm={confirmAction}
            title={getActionConfig(actionType, selectedUser).title}
            message={getActionConfig(actionType, selectedUser).message}
            warningMessage={getActionConfig(actionType, selectedUser).warning}
            confirmLabel={
              getActionConfig(actionType, selectedUser).confirmLabel
            }
            cancelLabel="Cancel"
            type={getActionConfig(actionType, selectedUser).type}
          />
        )}
      </main>
    </>
  );
}

export default UserManagement