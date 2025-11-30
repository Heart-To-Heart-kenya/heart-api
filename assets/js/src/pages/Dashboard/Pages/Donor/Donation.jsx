import { Calendar, Edit, Eye, List, PlusCircle, Search, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { categories } from '../../../../common/CategoryList'
import Header from '../../layouts/Header'
import { Link } from 'react-router-dom';
import ItemNotFound from '../../../../components/ItemNotFound';
import ConfirmDialog from '../../../../common/ConfirmDialog';
import Pagination from '../../../../components/Pagination';

function Donation() {
   const [isConfirm, setIsConfirm] = useState(false)
  const [selectedDonation, setSelectedDonation] = useState(null)
  const [actionType, setActionType] = useState('')



  const [donations, setDonations] = useState([
  {
    id: '83204',
    name: 'Vintage Leather Sofa',
    category: 'Furniture',
    dateListed: '2023-10-26',
    status: 'active',
  },
  {
    id: '83203',
    name: "Men's Running Shoes",
    category: 'Clothing',
    dateListed: '2023-10-25',
    status: 'inactive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIznbAOaEKDBUzAW7DuifcRkr_13DH1bd6s1HnALiTjnn9Qfftq5IlLDwm_zAcDAzMUzHzJT9Nz8WmUBTxbBXejWr2n9I1KIzEn_nNpmr0g5JE94B4o4FPbVt-UkUyQxnVMvaB5YftwBx77FmNYjg4HLwA9oLoA0AXK1DARMj6zKNk-kR_Y5cyBVOTMTHOhePeDS3AsFkrE6dXQ5vFZvxkK_4Jn5GLCYdhZnQRnulyejfYbHTrsmUUVEE1GcwoU5Xr2cE8yVofHCR'
  },
  {
    id: '83202',
    name: "Children's Books (Set of 10)",
    category: 'Books',
    dateListed: '2023-10-22',
    status: 'active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwHH-wBeq_5HEUd01xx0Mjf8Go7P2eHwIm7pBlVDETDU0EfvJiL_ZlSd2WCh3u8MTfhLIx0JvzonaxKD-Pbj17khaxyAzUAHnOmk-i3TvDpdDLEXyDX-QAKskJ2r4cQQ6rY2Fx_gmOVQ4qze0Q_Ecf7BtdLc4zqDUzUkAjkTRHcom7bf4vPdY6pbsPqT-Z4uJjd4XmYJG6AP3VXNj3hfwahArjRbFTxuqHisANTRIoPmqJ-Ci0YNA4Q_WQ94iNtidWidonCNZfoz2'
  }
])

  const handleAction = (donation, type) => {
    setSelectedDonation(donation)
    setActionType(type)
    setIsConfirm(true)
  }

  const confirmAction = () => {
    if (!selectedDonation) return

    switch (actionType) {
      case 'activate':
        setDonations(
          donations.map(d =>
            d.id === selectedDonation.id ? { ...d, status: 'active' } : d
          )
        )
        break
      case 'deactivate':
        setDonations(
          donations.map(d =>
            d.id === selectedDonation.id ? { ...d, status: 'inactive' } : d
          )
        )
        break
      case 'delete':
        setDonations(donations.filter(d => d.id !== selectedDonation.id))
        break
      default:
        break
    }

    setIsConfirm(false)
    setSelectedDonation(null)
    setActionType('')
  }

  const getActionConfig = (type, donation) => {
    const configs = {
      activate: {
        title: 'Activate Donation',
        message: `Are you sure you want to activate "${donation?.name}"?`,
        warning: 'The donation will be marked as active.',
        confirmLabel: 'Activate',
        type: 'success',
      },
      deactivate: {
        title: 'Deactivate Donation',
        message: `Are you sure you want to deactivate "${donation?.name}"?`,
        warning: 'The donation will be marked as inactive.',
        confirmLabel: 'Deactivate',
        type: 'warning',
      },
      delete: {
        title: 'Delete Donation',
        message: `Are you sure you want to delete "${donation?.name}"?`,
        warning: 'This action cannot be undone.',
        confirmLabel: 'Delete',
        type: 'danger',
      },
    }
    return configs[type]
  }

  return (
    <>
      <Header title="Donations" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Manage Donation Items
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Add, Edit, remove or donation items to the listings.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/dashboard/create-donation">
                <button className="flex items-center gap-2 bg-primary text-white font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200">
                  <PlusCircle className="w-4 h-4" />
                  Add Item
                </button>
              </Link>
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
              title="No item Found"
              description="There are no item in the system at the moment."
              showActions={false}
            />
          ) : (
            <>
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700  overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-gray-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Item Image
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Item Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Date Listed
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        view requests
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border-light dark:divide-border-dark">
                    {donations.map((donation) => (
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <img
                            class="h-12 w-12 rounded-lg object-cover"
                            data-alt="Men's Running Shoes"
                            src={donation.image}
                            alt={donation.name}
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-medium">
                            {" "}
                            {donation.name}
                          </div>
                          <div class="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            ID: #{donation.id}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                          {donation.category}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                          {donation.dateListed}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-green-800 ">
                            {donation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/dashboard/donation-request/${donation.id}`}
                          >
                            <button className="inline-flex items-center gap-2  text-blue-600  bg-blue-50 text-sm font-medium px-3 py-2 rounded-lg cursor-pointer">
                              view requests
                            </button>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {donation.status === "active" && (
                            <button
                              onClick={() =>
                                handleAction(donation, "deactivate")
                              }
                              className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
                            >
                              Deactivate
                            </button>
                          )}
                          {donation.status === "inactive" && (
                            <button
                              onClick={() => handleAction(donation, "activate")}
                              className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
                            >
                              Activate
                            </button>
                          )}
                          <Link
                            to={`/dashboard/donation-details/${donation.id}`}
                          >
                            <button className="inline-flex items-center gap-2  text-sm font-medium px-3 py-2 rounded-lg text-slate-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all duration-200 group-hover:scale-105">
                              <Eye className="w-4 h-4" />
                            </button>
                          </Link>
                          <Link to={`/dashboard/edit-donation/${donation.id}`}>
                            <button className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleAction(donation, "delete")}
                            className="p-2 text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
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

        {/* Confirm Dialog */}
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

export default Donation