import React from 'react'
import Header from '../../layouts/Header'
import { 
  TrendingUp, 
  Users, 
  Package, 
  Clock,
  DollarSign,
  Calendar,
  Download
} from 'lucide-react'

function Dashboard() {
  // Mock data - replace with actual data from your API
  const stats = [
    {
      title: "Total Donations",
      value: "$84,329.50",
      change: "+12.5%",
      changeType: "positive",
      description: "this month",
      icon: <DollarSign size={24} />,
    },
    {
      title: "Active Users",
      value: "1,204",
      change: "+52",
      changeType: "positive",
      description: "new users",
      icon: <Users size={24} />,
    },
    {
      title: "Available Items",
      value: "316",
      change: null,
      changeType: "neutral",
      description: "ready for donation",
      icon: <Package size={24} />,
    },
    {
      title: "Pending Requests",
      value: "28",
      change: "-5",
      changeType: "negative",
      description: "awaiting approval",
      icon: <Clock size={24} />,
    }
  ];

  const topDonors = [
    { name: "Sarah Johnson", amount: "$2,500", donations: 12 },
    { name: "Michael Brown", amount: "$1,800", donations: 8 },
    { name: "Emily Davis", amount: "$1,200", donations: 6 },
    { name: "John Wilson", amount: "$950", donations: 5 }
  ];

  return (
    <div className="transition-colors duration-300">
      <Header title="Dashboard Overview" />
      
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1">
                  </div>
                </div>
                <div className='p-3 rounded-xl bg-opacity-20'>
                  <div className='text-green-500'>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Donations Overview
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Last 30 days performance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-gray-700 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors">
                  <Calendar size={16} />
                  This Month
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>
            
            {/* Simplified Chart */}
            <div className="h-80 flex items-end justify-between gap-2 pt-8">
              {[65, 80, 60, 75, 90, 85, 70, 95, 80, 75, 85, 90, 65, 80, 60, 75, 90, 85, 70, 95, 80, 75, 85, 90, 65, 80, 60, 75, 90, 85].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-green-400 rounded-t hover:from-primary/90 hover:to-green-400/90 transition-all duration-300 cursor-pointer"
                    style={{ height: `${height}%` }}
                    title={`Day ${index + 1}: $${(height * 100).toLocaleString()}`}
                  />
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1  gap-8 mt-8">
          {/* Top Donors */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
              Top Donors
            </h2>
            
            <div className="space-y-4">
              {topDonors.map((donor, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {donor.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {donor.donations} donations
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-500">
                      {donor.amount}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Total given
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard