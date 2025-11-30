import React, { useState } from 'react'
import Header from '../../layouts/Header'
import { Search, Filter, Eye, Calendar, List, XCircle, CheckCircle } from 'lucide-react'
import { categories } from '../../../../common/CategoryList'
import { Link } from 'react-router-dom'
import ItemNotFound from '../../../../components/ItemNotFound'
import Pagination from '../../../../components/Pagination'
import ConfirmDialog from '../../../../common/ConfirmDialog'

function Donations() {
const [isConfirm, setIsConfirm] = useState(false);
const [selectedDonation, setSelectedDonation] = useState(null);
const [actionType, setActionType] = useState('');



const [donations, setDonations] = useState([

    {
      id: 'DK-84756',
      date: '2023-10-26',
      donorName: 'Jane Doe',
      itemType: 'Monetary',
      amount: '$150.00',
      status: 'active',
      email: 'jane.doe@email.com',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 'DK-84755',
      date: '2023-10-25',
      donorName: 'John Smith',
      itemType: 'Clothing',
      amount: '2 boxes',
      status: 'active',
      email: 'john.smith@email.com',
      phone: '+1 (555) 234-5678'
    },
    {
      id: 'DK-84754',
      date: '2023-10-25',
      donorName: 'Emily White',
      itemType: 'Food',
      amount: '1 crate',
      status: 'inactive',
      email: 'emily.white@email.com',
      phone: '+1 (555) 345-6789'
    },
    {
      id: 'DK-84753',
      date: '2023-10-24',
      donorName: 'Michael Brown',
      itemType: 'Monetary',
      amount: '$50.00',
      status: 'inactive',
      email: 'michael.brown@email.com',
      phone: '+1 (555) 456-7890'
    },
    {
      id: 'DK-84752',
      date: '2023-10-23',
      donorName: 'Sarah Green',
      itemType: 'Electronics',
      amount: '1 laptop',
      status: 'active',
      email: 'sarah.green@email.com',
      phone: '+1 (555) 567-8901'
    }
  ])

const toggleDonationStatus = (donationId, newStatus) => {
  setDonations(donations.map(d =>
    d.id === donationId ? { ...d, status: newStatus } : d
  ));
};

const handleAction = (donation, type) => {
  setSelectedDonation(donation);
  setActionType(type);
  setIsConfirm(true);
};

const confirmAction = () => {
  if (!selectedDonation) return;

  switch (actionType) {
    case "approve":
      toggleDonationStatus(selectedDonation.id, "active");
      break;

    case "reject":
      toggleDonationStatus(selectedDonation.id, "rejected");
      break;

    default:
      break;
  }

  setIsConfirm(false);
  setSelectedDonation(null);
  setActionType('');
};

const getActionConfig = (actionType, donation) => {
  const configs = {
    approve: {
      title: "Approve Donation",
      message: `Are you sure you want to approve the donation from ${donation?.donorName}?`,
      warning: "This donation will be marked as active and visible in the system.",
      confirmLabel: "Approve Donation",
      type: "success",
    },
    reject: {
      title: "Reject Donation",
      message: `Are you sure you want to reject the donation from ${donation?.donorName}?`,
      warning: "This action cannot be undone.",
      confirmLabel: "Reject Donation",
      type: "danger",
    }
  };

  return configs[actionType];
};


  return (
    <>
      <Header title="Donation Management" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Donations
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                View and manage all donation records
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Donations
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                1,482
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Estimated Value
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                $82,350
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Unique Donors
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                612
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Avg. Donation
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                $55.57
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
                <option value="All">Categories</option>
                {categories.map((category) => (
                  <option>{category.name}</option>
                ))}
              </select>

              <select className="px-4 py-2.5 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="All">All Status</option>
                <option value="active">Active</option>
              </select>
            </div>
          </div>

          {donations.length === 0 ? (
            <ItemNotFound
              icon={<List className="h-20 w-20 text-primary" />}
              title="No account type Found"
              description="There are no account type in the system at the moment."
              showActions={false}
            />
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Donation ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        item image
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Donor
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        item name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Item Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Date Listed
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Actions
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        view
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {donations.map((donation) => (
                      <tr
                        key={donation.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-primary dark:text-primary/90 text-sm font-medium">
                            {donation.id}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <img
                            class="h-12 w-12 rounded-lg object-cover"
                            data-alt="Children's story books"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwHH-wBeq_5HEUd01xx0Mjf8Go7P2eHwIm7pBlVDETDU0EfvJiL_ZlSd2WCh3u8MTfhLIx0JvzonaxKD-Pbj17khaxyAzUAHnOmk-i3TvDpdDLEXyDX-QAKskJ2r4cQQ6rY2Fx_gmOVQ4qze0Q_Ecf7BtdLc4zqDUzUkAjkTRHcom7bf4vPdY6pbsPqT-Z4uJjd4XmYJG6AP3VXNj3hfwahArjRbFTxuqHisANTRIoPmqJ-Ci0YNA4Q_WQ94iNtidWidonCNZfoz2"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          {donation.donorName}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          TV
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-slate-900 text-sm dark:text-white">
                              {donation.itemType}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {donation.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-green-800">
                            {donation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center gap-3 justify-center">
                            {donation.status === "active" ? (
                              <button
                                onClick={() => handleAction(donation, "reject")}
                                className="flex items-center text-sm gap-2 px-3 py-1 bg-red-500 text-white rounded-lg font-medium transition-all 
                                     duration-200 hover:bg-red-600 active:scale-95"
                              >
                                Reject
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleAction(donation, "approve")
                                }
                                className="flex items-center text-sm gap-2 px-3 py-1 bg-green-600 text-white rounded-lg font-medium transition-all 
                                    duration-200 hover:bg-green-700 active:scale-95"
                              >
                                Approve
                              </button>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/dashboard/donation-details/${donation.id}`}
                          >
                            <button className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-sm font-medium px-3 py-2 rounded-lg  transition-all duration-200 group-hover:scale-105">
                              <Eye className="w-4 h-4" />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10 flex items-center justify-start pb-5">
                <Pagination />
              </div>
            </div>
          )}
        </div>

        {isConfirm && selectedDonation && (
          <ConfirmDialog
            onClose={() => {
              setIsConfirm(false);
              setSelectedDonation(null);
              setActionType("");
            }}
            onConfirm={confirmAction}
            title={getActionConfig(actionType, selectedDonation).title}
            message={getActionConfig(actionType, selectedDonation).message}
            warningMessage={
              getActionConfig(actionType, selectedDonation).warning
            }
            confirmLabel={
              getActionConfig(actionType, selectedDonation).confirmLabel
            }
            cancelLabel="Cancel"
            type={getActionConfig(actionType, selectedDonation).type}
          />
        )}
      </main>
    </>
  );
}

export default Donations