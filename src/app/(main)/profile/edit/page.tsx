"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import ProfileMenuCard from "@/components/ProfileMenuCard";
import TrendingServices from "@/components/TrendingServices";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";

export default function EditProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: user ? `${user.firstName} ${user.lastName}` : "",
    phoneNumber: "",
    location: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password updated:", passwordData);
  };

  const menuItems = [
    {
      id: "transaction-history",
      label: "Transaction History",
      icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Transaction History"),
      // variant: "primary" as const,
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      icon: <BookmarkIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Bookmarks"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      onClick: () => router.push("/profile/edit"),
    },
    {
      id: "logout",
      label: "Log Out",
      icon: <LogoutIcon width={20} height={20} className="text-current" />,
      onClick: logout,
      // variant: "danger" as const,
    },
  ];

  const trendingServices = [
    { id: "1", serviceName: "Natural Makeup Service", providerName: "Velora Beauty Lounge" },
    { id: "2", serviceName: "Ombre Gel Nails", providerName: "Velora Beauty Lounge" },
    { id: "3", serviceName: "Bridal Makeup", providerName: "Velora Beauty Lounge" },
    { id: "4", serviceName: "Spa Pedicure", providerName: "Velora Beauty Lounge" },
    { id: "5", serviceName: "Acrylic Nails", providerName: "Velora Beauty Lounge" },
  ];

  return (
    <Container className="py-6 sm:py-8 mt-12">
      <PageLayout
        layout="two-column-left-large"
        stickyRight={true}
        leftColumn={
          <div className="space-y-6">
            {/* Edit Profile Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-text-primary mb-6">Edit Profile</h2>
              
              <form onSubmit={handleProfileSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleProfileChange}
                      placeholder="Write here..."
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleProfileChange}
                      placeholder="Write here..."
                      className="w-full px-4 py-3 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleProfileChange}
                    placeholder="Write here..."
                    className="w-full px-4 py-3 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => router.push("/profile")}
                    className="px-6 py-2.5 border border-black/10 text-text-primary rounded-lg font-medium hover:bg-black/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Change Password Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-text-primary mb-6">Change Password</h2>
              
              <form onSubmit={handlePasswordSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Old Password */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Old Password
                    </label>
                    <div className="relative">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        name="oldPassword"
                        value={passwordData.oldPassword}
                        onChange={handlePasswordChange}
                        placeholder="jonsnow007"
                        className="w-full px-4 py-3 pr-12 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary/40 hover:text-text-primary transition-colors"
                      >
                        {showOldPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="••••••••••"
                        className="w-full px-4 py-3 pr-12 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary/40 hover:text-text-primary transition-colors"
                      >
                        {showNewPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPasswordData({ oldPassword: "", newPassword: "" })}
                    className="px-6 py-2.5 border border-black/10 text-text-primary rounded-lg font-medium hover:bg-black/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            <ProfileMenuCard items={menuItems} />
            <TrendingServices services={trendingServices} />
          </div>
        }
      />
    </Container>
  );
}
