import React, { useState } from 'react'
import Header from '../../layouts/Header'
import { Search, Filter, Calendar, Eye, Download, Package, DollarSign, Users, TrendingUp, History } from 'lucide-react'
import { Link } from 'react-router-dom'
import ItemNotFound from '../../../../components/ItemNotFound'
import Pagination from '../../../../components/Pagination'
import { categories } from '../../../../common/CategoryList'

function ReceivedHistory() {

  const donations = [
    {
      id: 'DK-84759',
      itemName: 'Winter Clothing Set',
      category: 'Clothing',
      dateDonated: '2023-11-15',
      status: 'completed',
      value: '$250',
      items: '5 items',
      campaign: 'Winter Drive 2023',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAft38-wg7VVF0XXlhImywFTMn4NnjinS_e1dpUgVDr6-Why-hn3XPrLplf0T6J9AQxH37zzfLx-ZfBwqSBRFlPznZpNkjdNxupOW86JXXS_O4S5ziWnG1uCMGgXN52eCHQoQnE8OAOpFIWmU4g3rDCevMz8eXgfXTbqd7HNnbRud4ryiJErH4wPv-oUReVLX2QkZBat2VgHDtmPL7ym9PtLth58QHU5iwz4d0WiYsbOZupMhyY90fKjiQTTkUfPWCm5oJtdp2PAtfn'

    },
    {
      id: 'DK-84758',
      itemName: 'Children\'s Books',
      category: 'Books',
      dateDonated: '2023-11-14',
      status: 'completed',
      value: '$120',
      items: '12 books',
      campaign: 'Education Fund',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIznbAOaEKDBUzAW7DuifcRkr_13DH1bd6s1HnALiTjnn9Qfftq5IlLDwm_zAcDAzMUzHzJT9Nz8WmUBTxbBXejWr2n9I1KIzEn_nNpmr0g5JE94B4o4FPbVt-UkUyQxnVMvaB5YftwBx77FmNYjg4HLwA9oLoA0AXK1DARMj6zKNk-kR_Y5cyBVOTMTHOhePeDS3AsFkrE6dXQ5vFZvxkK_4Jn5GLCYdhZnQRnulyejfYbHTrsmUUVEE1GcwoU5Xr2cE8yVofHCR'

    },
    {
      id: 'DK-84757',
      itemName: 'Canned Food',
      category: 'Food',
      dateDonated: '2023-11-14',
      status: 'distributed',
      value: '$85',
      items: '3 boxes',
      campaign: 'Food Relief',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuwHH-wBeq_5HEUd01xx0Mjf8Go7P2eHwIm7pBlVDETDU0EfvJiL_ZlSd2WCh3u8MTfhLIx0JvzonaxKD-Pbj17khaxyAzUAHnOmk-i3TvDpdDLEXyDX-QAKskJ2r4cQQ6rY2Fx_gmOVQ4qze0Q_Ecf7BtdLc4zqDUzUkAjkTRHcom7bf4vPdY6pbsPqT-Z4uJjd4XmYJG6AP3VXNj3hfwahArjRbFTxuqHisANTRIoPmqJ-Ci0YNA4Q_WQ94iNtidWidonCNZfoz2'

    },
    {
      id: 'DK-84756',
      itemName: 'Medical Supplies',
      category: 'Medical',
      dateDonated: '2023-11-13',
      status: 'in-transit',
      value: '$350',
      items: '2 kits',
      campaign: 'Medical Aid',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAft38-wg7VVF0XXlhImywFTMn4NnjinS_e1dpUgVDr6-Why-hn3XPrLplf0T6J9AQxH37zzfLx-ZfBwqSBRFlPznZpNkjdNxupOW86JXXS_O4S5ziWnG1uCMGgXN52eCHQoQnE8OAOpFIWmU4g3rDCevMz8eXgfXTbqd7HNnbRud4ryiJErH4wPv-oUReVLX2QkZBat2VgHDtmPL7ym9PtLth58QHU5iwz4d0WiYsbOZupMhyY90fKjiQTTkUfPWCm5oJtdp2PAtfn'

    },
    {
      id: 'DK-84755',
      itemName: 'School Supplies',
      category: 'Education',
      dateDonated: '2023-11-12',
      status: 'pending',
      value: '$180',
      items: '8 packs',
      campaign: 'Back to School',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIznbAOaEKDBUzAW7DuifcRkr_13DH1bd6s1HnALiTjnn9Qfftq5IlLDwm_zAcDAzMUzHzJT9Nz8WmUBTxbBXejWr2n9I1KIzEn_nNpmr0g5JE94B4o4FPbVt-UkUyQxnVMvaB5YftwBx77FmNYjg4HLwA9oLoA0AXK1DARMj6zKNk-kR_Y5cyBVOTMTHOhePeDS3AsFkrE6dXQ5vFZvxkK_4Jn5GLCYdhZnQRnulyejfYbHTrsmUUVEE1GcwoU5Xr2cE8yVofHCR'

    }
  ]




  return (
    <>
      <Header title="received History" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Received History
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Track and manage your history and impact
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
       
            
                <div  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className='p-2 rounded-lg bg-blue-500 bg-opacity-10'>
                      <Package className='w-6 h-6 text-white' />
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
                  Total Items Received
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                 500
                  </p>
                </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">


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
              icon={<History className="h-20 w-20 text-primary" />}
              title="No received history Found"
              description="There are no received history in the system at the moment."
              showActions={false}
            />
          ) : (
            <>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Donation ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                         Item Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Item Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                       Item Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Date Donated
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
                    {donations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group">
                        <td className="px-6 py-4">
                          <span className="font-mono text-primary dark:text-primary/90 text-sm font-medium">
                            {donation.id}
                          </span>
                        </td>
                         <td class="px-6 py-4 whitespace-nowrap">
                        <img
                          class="h-12 w-12 rounded-lg object-cover"
                          data-alt="Men's Running Shoes"
                          src={donation.image}
                          alt={donation.name}
                        />
                      </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-slate-900 dark:text-white">
                              {donation.itemName}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-md">
                            {donation.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {donation.dateDonated}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-green-800">
                            {donation.status}
                          </span>
                          
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
            </div>

            <div className="mt-10 flex items-center justify-start pb-5">
                  <Pagination />
                </div>
            </>
              )}
        </div>
      </main>
    </>
  )
}


export default ReceivedHistory