"use client";

import { useState } from "react";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import UserProfileHeader from "@/components/UserProfileHeader";
import ProfileMenuCard from "@/components/ProfileMenuCard";
import AppointmentCard from "@/components/AppointmentCard";
import Pagination from "@/components/Pagination";
import TrendingServices from "@/components/TrendingServices";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";

const mockAppointments = [
  {
    id: "apt-1",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "card_payment" as const,
    status: "in_progress" as const,
  },
  {
    id: "apt-2",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "walk_in_pay" as const,
    status: "booked" as const,
  },
  {
    id: "apt-3",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "cash" as const,
    status: "booked" as const,
  },
  {
    id: "apt-4",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "cash_payment" as const,
    status: "completed" as const,
  },
  {
    id: "apt-5",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "pending" as const,
    status: "cancelled" as const,
  },
];

export default function UserProfilePage() {
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
      onClick: () => console.log("Edit Profile"),
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
    <Container className="py-6 sm:py-8">
      <PageLayout
        layout="two-column-left-large"
        stickyRight={true}
        leftColumn={
          <div className="space-y-6 mt-12">
            {/* Profile Header */}
            <UserProfileHeader
              name={user ? `${user.firstName} ${user.lastName}` : "Sara Chen"}
              avatar={user?.avatar || "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400"}
              coverImage="https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200"
              description="Where modern beauty meets neoprecision, comfort, confidence, and personalized care."
              joinedDate="21 Aug,2025"
              location="Dhaka,Bangladesh"
              totalServicesTaken={225}
              isOwnProfile={true}
              onEditProfile={() => console.log("Edit Profile")}
              onChangeCover={() => console.log("Change Cover")}
              onChangeAvatar={() => console.log("Change Avatar")}
            />

            {/* Appointments Section */}
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-4">Appointments</h2>
              
              <div className="space-y-4">
                {mockAppointments.map((appointment, index) => (
                  <AppointmentCard
                    key={appointment.id}
                    {...appointment}
                    showActions={appointment.status !== "cancelled" && appointment.status !== "completed"}
                    showMarkComplete={appointment.status === "in_progress" && index === 0}
                    onReschedule={() => console.log("Reschedule", appointment.id)}
                    onCancel={() => console.log("Cancel", appointment.id)}
                    onViewBeautician={() => console.log("View Beautician")}
                    onMessage={() => console.log("Message")}
                    onViewDetails={() => console.log("View Details")}
                    onMarkComplete={(completed) => console.log("Mark Complete", completed)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        }
        rightColumn={
          <div className="space-y-4">
            {/* Menu Card */}
            <ProfileMenuCard items={menuItems} />
            
            {/* Trending Services */}
            <TrendingServices services={trendingServices} />
          </div>
        }
      />
    </Container>
  );
}
