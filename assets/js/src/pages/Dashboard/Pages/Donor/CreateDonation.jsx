import React from 'react'
import Header from '../../layouts/Header'
import DonationForm from '../../../../components/Forms/DonationForm'

function CreateDonation() {
  return (
      <>
      <Header title="User Management" />
      <main className="flex-1 p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Manage Donation Items
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Create a new donation item
              </p>
            </div>
          </div>

          <DonationForm/>
          </div>
      </main>
    </>
  )
}

export default CreateDonation