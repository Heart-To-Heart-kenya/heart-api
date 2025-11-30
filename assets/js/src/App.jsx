import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./common/Loader";
import AuthLayouts from "./pages/Authentication/AuthLayout";
import HomeLayouts from "./pages/Home/HomeLayout";
import ScrollToTop from "./common/ScrollToTop";


import DashboardLayout from "./pages/Dashboard/layouts/DashboardLayout";
import UserManagement from "./pages/Dashboard/Pages/Admin/UserManagement";

import Dashboard from "./pages/Dashboard/Pages/Admin/Dashboard";
import Roles from "./pages/Dashboard/Pages/SuperAdmin/Roles";
import UserDetail from "./pages/Dashboard/Pages/Admin/UserDetail";
import Category from "./pages/Dashboard/Pages/Admin/Category";
import AccountType from "./pages/Dashboard/Pages/SuperAdmin/AccountTypes";
import Donations from "./pages/Dashboard/Pages/Admin/Donations";
import DonationDetails from "./pages/Dashboard/Pages/DonationDetails";
import Reports from "./pages/Dashboard/Pages/Admin/Reports";
import Profile from "./pages/Dashboard/Pages/Profile";
import Settings from "./pages/Dashboard/Pages/Admin/Settings";
import Donation from "./pages/Dashboard/Pages/Donor/Donation";
import CreateDonation from "./pages/Dashboard/Pages/Donor/CreateDonation";
import EditDonation from "./pages/Dashboard/Pages/Donor/EditDonation";
import DonationHistory from "./pages/Dashboard/Pages/Donor/DonationHistory";
import DonationRequested from "./pages/Dashboard/Pages/Received/DonationRequested";
import ReceivedHistory from "./pages/Dashboard/Pages/Received/ReceivedHistory";
import AssigningUserRole from "./pages/Dashboard/Pages/Admin/AssigningUserRole";
import DonationRequest from "./pages/Dashboard/Pages/Donor/DonationRequest";
import Permissions from "./pages/Dashboard/Pages/Admin/Permissions";
import ItemCondition from "./pages/Dashboard/Pages/Admin/ItemCondition";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="page-container">
      <ScrollToTop />
      <Routes>
        <Route path="/auth/*" element={<AuthLayouts />} />
        <Route path="/*" element={<HomeLayouts />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="roles" element={<Roles />} />
          <Route path="permissions" element={<Permissions />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="assigning-user-role/:id" element={<AssigningUserRole/>} />
          <Route path="user-details/:id" element={<UserDetail />} />
          <Route path="categories" element={<Category />} />
          <Route path="item-condition" element={<ItemCondition />} />
          <Route path="account-types" element={<AccountType />} />
          <Route path="donations" element={<Donations/>} />
          <Route path="donation-details/:id" element={<DonationDetails/>} />
          <Route path="reports" element={<Reports/>} />
          <Route path="donation" element={<Donation/>} />
          <Route path="create-donation" element={<CreateDonation/>} />
          <Route path="edit-donation/:id" element={<EditDonation/>} />
          <Route path="donation-request/:id" element={<DonationRequest/>} />
          <Route path="donation-history" element={<DonationHistory/>} />
          <Route path="donation-requests" element={<DonationRequested/>} />
          <Route path="received-history" element={<ReceivedHistory/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;