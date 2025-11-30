import React, { useState } from 'react'
import Header from '../../layouts/Header'
import { Search, Filter, Calendar, Eye, CheckCircle, XCircle, Clock, Download, MoreVertical, User, MapPin, Phone, Mail, HandHeart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../../../../common/CategoryList'
import ItemNotFound from '../../../../components/ItemNotFound'
import Pagination from '../../../../components/Pagination'

function DonationRequested() {
  const donationRequests = [
    {
      id: 'DR-84759',
      requestor: {
        name: 'Eleanor Vance',
        email: 'eleanor.vance@email.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY'
      },
      dateSubmitted: '2023-11-15',
      donationType: 'Clothing',
      items:  'Sweaters',
      quantity: '25 items',
      urgency: 'high',
      status: 'pending',
      description: 'Requesting winter clothing for homeless shelter residents during the cold season.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAft38-wg7VVF0XXlhImywFTMn4NnjinS_e1dpUgVDr6-Why-hn3XPrLplf0T6J9AQxH37zzfLx-ZfBwqSBRFlPznZpNkjdNxupOW86JXXS_O4S5ziWnG1uCMGgXN52eCHQoQnE8OAOpFIWmU4g3rDCevMz8eXgfXTbqd7HNnbRud4ryiJErH4wPv-oUReVLX2QkZBat2VgHDtmPL7ym9PtLth58QHU5iwz4d0WiYsbOZupMhyY90fKjiQTTkUfPWCm5oJtdp2PAtfn'

    },
    {
      id: 'DR-84758',
      requestor: {
        name: 'Marcus Chen',
        email: 'marcus.chen@email.com',
        phone: '+1 (555) 234-5678',
        location: 'San Francisco, CA'
      },
      dateSubmitted: '2023-11-14',
      donationType: 'Food',
      items:  'Sweaters',
      quantity: '50 boxes',
      urgency: 'medium',
      status: 'approved',
      description: 'Food supplies needed for community kitchen serving low-income families.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIznbAOaEKDBUzAW7DuifcRkr_13DH1bd6s1HnALiTjnn9Qfftq5IlLDwm_zAcDAzMUzHzJT9Nz8WmUBTxbBXejWr2n9I1KIzEn_nNpmr0g5JE94B4o4FPbVt-UkUyQxnVMvaB5YftwBx77FmNYjg4HLwA9oLoA0AXK1DARMj6zKNk-kR_Y5cyBVOTMTHOhePeDS3AsFkrE6dXQ5vFZvxkK_4Jn5GLCYdhZnQRnulyejfYbHTrsmUUVEE1GcwoU5Xr2cE8yVofHCR'

    },
    {
      id: 'DR-84757',
      requestor: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 345-6789',
        location: 'Chicago, IL'
      },
      dateSubmitted: '2023-11-14',
      donationType: 'Medical',
      items:  'Sweaters',
      quantity: '15 kits',
      urgency: 'high',
      status: 'in-review',
      description: 'Medical supplies for free clinic serving uninsured patients.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwHH-wBeq_5HEUd01xx0Mjf8Go7P2eHwIm7pBlVDETDU0EfvJiL_ZlSd2WCh3u8MTfhLIx0JvzonaxKD-Pbj17khaxyAzUAHnOmk-i3TvDpdDLEXyDX-QAKskJ2r4cQQ6rY2Fx_gmOVQ4qze0Q_Ecf7BtdLc4zqDUzUkAjkTRHcom7bf4vPdY6pbsPqT-Z4uJjd4XmYJG6AP3VXNj3hfwahArjRbFTxuqHisANTRIoPmqJ-Ci0YNA4Q_WQ94iNtidWidonCNZfoz2'

    },
    {
      id: 'DR-84756',
      requestor: {
        name: 'David Martinez',
        email: 'david.martinez@email.com',
        phone: '+1 (555) 456-7890',
        location: 'Miami, FL'
      },
      dateSubmitted: '2023-11-13',
      donationType: 'Education',
       items:  'Sweaters',
      quantity: '100 sets',
      urgency: 'low',
      status: 'rejected',
      description: 'Educational materials for underprivileged school children.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAft38-wg7VVF0XXlhImywFTMn4NnjinS_e1dpUgVDr6-Why-hn3XPrLplf0T6J9AQxH37zzfLx-ZfBwqSBRFlPznZpNkjdNxupOW86JXXS_O4S5ziWnG1uCMGgXN52eCHQoQnE8OAOpFIWmU4g3rDCevMz8eXgfXTbqd7HNnbRud4ryiJErH4wPv-oUReVLX2QkZBat2VgHDtmPL7ym9PtLth58QHU5iwz4d0WiYsbOZupMhyY90fKjiQTTkUfPWCm5oJtdp2PAtfn'

    },
    {
      id: 'DR-84755',
      requestor: {
        name: 'Lisa Wang',
        email: 'lisa.wang@email.com',
        phone: '+1 (555) 567-8901',
        location: 'Seattle, WA'
      },
      dateSubmitted: '2023-11-12',
      donationType: 'Furniture',
       items:  'Sweaters',
      quantity: '10 pieces',
      urgency: 'medium',
      status: 'completed',
      description: 'Furniture for families transitioning from homelessness.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwHH-wBeq_5HEUd01xx0Mjf8Go7P2eHwIm7pBlVDETDU0EfvJiL_ZlSd2WCh3u8MTfhLIx0JvzonaxKD-Pbj17khaxyAzUAHnOmk-i3TvDpdDLEXyDX-QAKskJ2r4cQQ6rY2Fx_gmOVQ4qze0Q_Ecf7BtdLc4zqDUzUkAjkTRHcom7bf4vPdY6pbsPqT-Z4uJjd4XmYJG6AP3VXNj3hfwahArjRbFTxuqHisANTRIoPmqJ-Ci0YNA4Q_WQ94iNtidWidonCNZfoz2'

    }
  ]




  return (
    <>
      <Header title="Donation Requests" />
      <main className="flex-1 p-6">
        <div className="mx-auto ">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Donation Requests
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Review and manage incoming donation requests from organizations
                and individuals
              </p>
            </div>
            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Pending Review
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    12
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Approved
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    8
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Rejected
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    3
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Total Requests
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    23
                  </p>
                </div>
              </div>
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

          {donationRequests.length === 0 ? (
            <ItemNotFound
              icon={<HandHeart className="h-20 w-20 text-primary" />}
              title="No donation request Found"
              description="There are no donation request in the system at the moment."
              showActions={false}
            />
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Request ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Requestor name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        item image
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        item name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        item type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Date Requested
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                       view
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {donationRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-primary dark:text-primary/90 text-sm font-medium">
                            {request.id}
                          </span>
                        </td>
                        <td className="px-6 py-4">{request.requestor.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <img
                            class="h-12 w-12 rounded-lg object-cover"
                            data-alt="Men's Running Shoes"
                            src={request.image}
                            alt={request.items}
                          />
                        </td>
                        <td className="px-6 py-4">{request.items}</td>
                        <td className="px-6 py-4">{request.donationType}</td>
                        <td className="px-6 py-4">{request.requestor.name}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-green-800">
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/dashboard/donation-details/${request.id}`}
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
      </main>
    </>
  );
}

export default DonationRequested