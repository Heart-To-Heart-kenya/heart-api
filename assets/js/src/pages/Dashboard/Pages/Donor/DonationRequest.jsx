import React, { useState } from "react";
import { Calendar, Clock, Eye, HandHeart, Package } from "lucide-react";
import Header from "../../layouts/Header";
import ImageGallery from "../../../../components/ImageGallery";
import Pagination from "../../../../components/Pagination";
import { Link } from "react-router-dom";
import ItemNotFound from "../../../../components/ItemNotFound";
import ConfirmDialog from "../../../../common/ConfirmDialog";

function DonationRequest() {
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const donationData = {
    id: "DK-84756",
    date: "October 26, 2023",
    status: "active",
    item: {
      name: "Vintage Armchair",
      category: "Furniture",
      condition: "Good",
      description:
        "A beautiful mid-century modern armchair. Solid wood frame with original upholstery. Perfect for a reading nook.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBK9q32K0eKxit7zxL0JcwDjfFvvllQwCwxnqlqENT7BY8GU_mfmhXfaGXJB7Izhs4SpHTAthaCDZckl-BkwVLRBHIo_WhswUJo4n-JoQa5_qHjPyHITYAZhQZzax6hhlAqvDfIJpSjDxW6zh3_ZLiPNlsyZj3rHJTVne8bipkoi2hcSowI0tUNdv9Y4EJBYq8wIza4YHKwO1FdqiRvGNucX8oIa-Z8G4ru_C_m9jOrOwA53gbhzWWevmLbsMtp_ePe0j6WP7nA1X4",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
      ],
    },
  };

  const [donationRequests, setDonationRequests] = useState([
    {
      id: "DR-84759",
      requestor: {
        name: "Eleanor Vance",
        email: "eleanor.vance@email.com",
        phone: "+1 (555) 123-4567",
        location: "New York, NY",
      },
      dateSubmitted: "2023-11-15",
      status: "pending",
    },
    {
      id: "DR-84758",
      requestor: {
        name: "Marcus Chen",
        email: "marcus.chen@email.com",
        phone: "+1 (555) 234-5678",
        location: "San Francisco, CA",
      },
      dateSubmitted: "2023-11-14",
      status: "pending",
    },
    {
      id: "DR-84757",
      requestor: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 345-6789",
        location: "Chicago, IL",
      },
      dateSubmitted: "2023-11-14",
      status: "pending",
    },
    {
      id: "DR-84756",
      requestor: {
        name: "David Martinez",
        email: "david.martinez@email.com",
        phone: "+1 (555) 456-7890",
        location: "Miami, FL",
      },
      dateSubmitted: "2023-11-13",
      status: "pending",
    },
    {
      id: "DR-84755",
      requestor: {
        name: "Lisa Wang",
        email: "lisa.wang@email.com",
        phone: "+1 (555) 567-8901",
        location: "Seattle, WA",
      },
      dateSubmitted: "2023-11-12",
      status: "pending",
    },
  ]);

  const handleAccept = (request) => {
    setSelectedRequest(request);
    setIsConfirm(true);
  };

  const confirmAccept = () => {
    if (!selectedRequest) return;
    setDonationRequests((prev) =>
      prev.map((r) =>
        r.id === selectedRequest.id ? { ...r, status: "accepted" } : r
      )
    );
    setIsConfirm(false);
    setSelectedRequest(null);
  };

  return (
    <>
      <Header title="Donation Management" />
      <main className="flex-1 p-3 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="mx-auto space-y-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 pt-3">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Donation Details
              </h1>
            </div>

            {/* Donation Details Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image Gallery */}
                  <div className="lg:w-2/5">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <ImageGallery
                        images={donationData.item.images}
                        alt={donationData.item.name}
                        className="rounded-lg"
                        aspectRatio="aspect-[4/3]"
                      />
                    </div>
                  </div>

                  {/* Donation Information */}
                  <div className="lg:w-3/5">
                    <div className="space-y-6">
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        donation #{donationData.id}
                      </p>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {donationData.item.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {donationData.item.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <Package className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Donation ID
                              </p>
                              <p className="font-mono font-semibold text-gray-900 dark:text-white">
                                {donationData.id}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Donation Date
                              </p>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {donationData.date}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Category
                              </p>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {donationData.item.category}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Condition
                              </p>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {donationData.item.condition}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        Date Requested
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Action
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
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {request.dateSubmitted}
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-green-800 ">
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {request.status === "pending" && (
                            <button
                              onClick={() => handleAccept(request)}
                              className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
                            >
                              Accept Request
                            </button>
                          )}
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

        {/* Confirm Dialog */}
        {isConfirm && selectedRequest && (
          <ConfirmDialog
            onClose={() => {
              setIsConfirm(false);
              setSelectedRequest(null);
            }}
            onConfirm={confirmAccept}
            title="Accept Donation Request"
            message={`Are you sure you want to accept request "${selectedRequest.id}" from ${selectedRequest.requestor.name}?`}
            warningMessage="This will mark the request as accepted."
            confirmLabel="Accept"
            cancelLabel="Cancel"
            type="success"
          />
        )}
      </main>
    </>
  );
}

export default DonationRequest;
