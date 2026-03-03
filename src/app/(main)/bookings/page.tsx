"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import UserInfoSideBar from "@/components/UserInfoSideBar";
import AppointmentCard from "@/components/AppointmentCard";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentIcon, BookmarkIcon, EditIcon, LogoutIcon } from "@/components/Icons";

const mockAppointments = [
  {
    id: "apt-1",
    serviceName: "Gel Manicure",
    beauticianName: "Nila Akter",
    beauticianAvatar:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
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
    beauticianAvatar:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
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
    beauticianAvatar:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
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
    beauticianAvatar:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=100",
    parlorName: "Velora Beauty Lounge",
    date: "2025-11-20",
    time: "2:00 PM",
    paymentMethod: "cash_payment" as const,
    status: "completed" as const,
  },
];

export default function BookingsPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const sidebarContent = (
    <UserInfoSideBar
      role="user"
      profile={{
        name: user ? `${user.firstName} ${user.lastName}` : "Sara Chen",
        location: "Dhaka, Bangladesh",
        distance: "4.5 km",
        coverImage:
          "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200",
        avatar:
          user?.avatar ||
          "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Where modern beauty meets neo precision, comfort, confidence, and personalized care.",
      }}
      menuItems={[
        {
          id: "transaction-history",
          label: "Transaction History",
          icon: <DocumentIcon width={20} height={20} fill="currentColor" />,
          onClick: () => console.log("Transaction History"),
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
        },
      ]}
      onViewProfile={() => router.push("/profile")}
    />
  );

  return (
    <Container className="py-6 sm:py-8 mt-12">
      {/* Mobile: sidebar on top */}
      <div className="md:hidden mb-6">{sidebarContent}</div>

      <PageLayout
        layout="two-column-right-large"
        stickyLeft={true}
        leftColumn={sidebarContent}
        rightColumn={
          <div className="space-y-6">
            {/* Summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 text-sm text-text-primary/60">
                  <span>Total Appointments</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                </div>
                <p className="text-2xl font-bold text-primary">120</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 text-sm text-text-primary/60">
                  <span>Total Cancel</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-500">
                    ✕
                  </span>
                </div>
                <p className="text-2xl font-bold text-red-500">20</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 text-sm text-text-primary/60">
                  <span>Completed Services</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600">
                    ☺
                  </span>
                </div>
                <p className="text-2xl font-bold text-green-600">105</p>
              </div>
            </div>

            {/* Appointments list */}
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
            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        }
      />
    </Container>
  );
}

