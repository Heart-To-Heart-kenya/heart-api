import React, { useState } from 'react'
import Header from '../layouts/Header'
import { 
  Calendar, 
  CheckCircle, 
  Clock,
  Package,
  User,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
} from 'lucide-react'
import ImageGallery from '../../../components/ImageGallery';


function DonationDetails() {

  const donationData = {
    id: 'DK-84756',
    date: 'October 26, 2023',
    status: 'active',
    donor: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '(555) 123-4567',
      address: '123 Main Street, Apt 4B, New York, NY 10001',
      joinDate: 'January 15, 2022',
      totalDonations: 8
    },
    item: {
      name: 'Vintage Armchair',
      category: 'Furniture',
      condition: 'Good',
      description: 'A beautiful mid-century modern armchair. Solid wood frame with original upholstery. Perfect for a reading nook.',
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDBK9q32K0eKxit7zxL0JcwDjfFvvllQwCwxnqlqENT7BY8GU_mfmhXfaGXJB7Izhs4SpHTAthaCDZckl-BkwVLRBHIo_WhswUJo4n-JoQa5_qHjPyHITYAZhQZzax6hhlAqvDfIJpSjDxW6zh3_ZLiPNlsyZj3rHJTVne8bipkoi2hcSowI0tUNdv9Y4EJBYq8wIza4YHKwO1FdqiRvGNucX8oIa-Z8G4ru_C_m9jOrOwA53gbhzWWevmLbsMtp_ePe0j6WP7nA1X4',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
      ]
    },
    pickup: {
      scheduled: 'October 28, 2023',
      time: '2:00 PM - 4:00 PM',
      notes: 'Please call 15 minutes before arrival. Elevator access available.'
    }
  }




  return (
    <>
      <Header title='Donation Management' />
        <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Donation Details
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                  View and manage donation #{donationData.id}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Donation Summary */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Donation Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Package className="w-4 h-4" />
                      <span className="text-sm font-medium">Donation ID</span>
                    </div>
                    <p className="text-slate-900 dark:text-white font-mono font-semibold">
                      {donationData.id}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">Donation Date</span>
                    </div>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {donationData.date}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">Status</span>
                    </div>
                    <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-green-800'>
                      {donationData.status}
                    </span>
                  </div>

                </div>
              </div>

              {/* Item Details */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Item Details
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Image Gallery */}
                  <ImageGallery images={donationData.item.images} alt={donationData.item.name} />

                  {/* Item Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {donationData.item.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {donationData.item.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <div className="p-2 bg-white dark:bg-slate-600 rounded-lg">
                          <Package className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Category</p>
                          <p className="font-medium text-slate-900 dark:text-white">{donationData.item.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <div className="p-2 bg-white dark:bg-slate-600 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Condition</p>
                          <p className="font-medium text-slate-900 dark:text-white">{donationData.item.condition}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Donor Information */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Donor Information
                </h2>
                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{donationData.donor.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Donor</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{donationData.donor.email}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{donationData.donor.phone}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Address</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{donationData.donor.address}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">Member Since</span>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {donationData.donor.joinDate}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Pickup Information */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Pickup Information
                </h2>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{donationData.pickup.scheduled}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Scheduled Date</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{donationData.pickup.time}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Time Window</p>
                    </div>
                  </div>

                  {donationData.pickup.notes && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">Special Instructions</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                        {donationData.pickup.notes}
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>


      </main>
    </>
  )
}

export default DonationDetails