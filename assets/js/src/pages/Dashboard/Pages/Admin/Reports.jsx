import React, { useState } from "react";
import Header from "../../layouts/Header";
import { Download, Filter, Calendar, Tag, TrendingUp, Users, DollarSign, PieChart, BarChart3, MoreVertical } from "lucide-react";

function Reports() {
  const [dateRange, setDateRange] = useState("last-30-days");
  const [category, setCategory] = useState("all");
  const [campaign, setCampaign] = useState("all");

  const statsData = [
    {
      title: "Total Donations",
      value: "$125,670",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Unique Donors",
      value: "1,482",
      change: "+8.2%",
      trend: "up",
      icon: Users
    },
    {
      title: "Average Donation",
      value: "$84.80",
      change: "-1.5%",
      trend: "down",
      icon: TrendingUp
    },
    {
      title: "Campaigns",
      value: "24",
      change: "+3.2%",
      trend: "up",
      icon: PieChart
    }
  ];

  const categoryData = [
    { name: "Medical Aid", value: 40, color: "#1A237E", amount: "$50,268" },
    { name: "Education", value: 25, color: "#FF577F", amount: "$31,417" },
    { name: "Food Aid", value: 20, color: "#8BC34A", amount: "$25,134" },
    { name: "Shelter", value: 15, color: "#FFC107", amount: "$18,850" }
  ];


  const renderPieChart = () => {
    let accumulated = 0;
    return categoryData.map((item, index) => {
      const segment = (
        <circle
          key={index}
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke={item.color}
          strokeWidth="3"
          strokeDasharray={`${item.value} ${100 - item.value}`}
          strokeDashoffset={-accumulated}
          transform="rotate(-90 18 18)"
        />
      );
      accumulated += item.value;
      return segment;
    });
  };

  return (
    <>
      <Header title="Reports & Analytics" />
      <main className="flex-1 p-6">
        <div className="mx-auto ">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Reports & Analytics
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                View and export key donation metrics and insights
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-green-50  transition-colors">                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filters</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="last-7-days">Last 7 Days</option>
                  <option value="last-30-days">Last 30 Days</option>
                  <option value="last-90-days">Last 90 Days</option>
                  <option value="this-year">This Year</option>
                  <option value="custom">Custom Range</option>
                </select>

                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="all">All Categories</option>
                  <option value="medical">Medical Aid</option>
                  <option value="education">Education</option>
                  <option value="food">Food Aid</option>
                  <option value="shelter">Shelter</option>
                </select>

                <select 
                  value={campaign}
                  onChange={(e) => setCampaign(e.target.value)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="all">All Campaigns</option>
                  <option value="winter-drive">Winter Drive 2023</option>
                  <option value="school-supplies">School Supplies</option>
                  <option value="medical-relief">Medical Relief</option>
                </select>

                <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-5 h-5 ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <MoreVertical className="w-4 h-4 text-slate-400 cursor-pointer" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <p className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from previous period
                  </p>
                </div>
              );
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            {/* Line Chart */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Donations Over Time</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Last 30 days performance</p>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              <div className="h-64">
                <div className="w-full h-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg flex items-end justify-center p-4">
                  {/* Simplified chart visualization */}
                  <div className="flex items-end justify-between w-full h-48 gap-1">
                    {[65, 45, 75, 60, 80, 55, 90, 70, 85, 65, 95, 75, 85, 70, 60].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Donation Categories</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Distribution by category</p>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    {renderPieChart()}
                  </svg>
                </div>
                <div className="flex-1 space-y-4">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.amount}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {item.value}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default Reports;