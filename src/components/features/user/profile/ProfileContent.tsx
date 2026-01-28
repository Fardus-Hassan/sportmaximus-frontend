"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { AppointmentCard } from "./AppointmentCard";
import { ProfileCard } from "./ProfileCard";
import TrendingServices from "@/components/TrendingServices";
import TodoCheckListIcon from "@/components/Icons/TodoCheckListIcon";
import BookmarkOutlineIcon from "@/components/Icons/BookmarkOutlineIcon";
import { EditIcon } from "@/components/Icons";
import LogoutIcon from "@/components/Icons/LogoutIcon";

interface AppointmentCardTypes {
  serviceName: string;
  clientName: string;
  clientAvatarUrl: string;
  venueName: string;
  date: string;
  time: string;
  paymentMethod: string;
  status: "In Progress" | "Paid" | "Pending" | "Cancelled" | "Completed";
  isPaid: boolean;
  onReschedule?: () => void;
  onCancel?: () => void;
  onViewClient?: () => void;
  onSendMessage?: () => void;
  onViewNotes?: () => void;
  onMarkComplete?: (completed: boolean) => void;
}
export default function ProfileContent() {
  const appointments: AppointmentCardTypes[] = [
    {
      serviceName: "Gel Manicure",
      clientName: "Nila Akter",
      clientAvatarUrl: "",
      venueName: "Velora Beauty Lounge",
      date: "2025-11-20",
      time: "2:00 PM",
      paymentMethod: "Card payment",
      status: "In Progress",
      isPaid: true,
    },
    {
      serviceName: "Hair Spa Treatment",
      clientName: "Farhana Islam",
      clientAvatarUrl: "",
      venueName: "Glow Beauty Studio",
      date: "2025-11-21",
      time: "11:30 AM",
      paymentMethod: "Cash",
      status: "Pending",
      isPaid: false,
    },
    {
      serviceName: "Bridal Makeup",
      clientName: "Sadia Rahman",
      clientAvatarUrl: "",
      venueName: "Elegance Salon",
      date: "2025-11-22",
      time: "5:00 PM",
      paymentMethod: "Online payment",
      status: "Completed",
      isPaid: true,
    },
    {
      serviceName: "Facial Cleanup",
      clientName: "Mim Chowdhury",
      clientAvatarUrl: "",
      venueName: "Velora Beauty Lounge",
      date: "2025-11-23",
      time: "1:00 PM",
      paymentMethod: "Card payment",
      status: "Cancelled",
      isPaid: false,
    },
    {
      serviceName: "Hair Coloring",
      clientName: "Anika Hasan",
      clientAvatarUrl: "",
      venueName: "Urban Chic Salon",
      date: "2025-11-24",
      time: "4:30 PM",
      paymentMethod: "Cash",
      status: "Paid",
      isPaid: true,
    },
  ];

  const accountMenuItems = [
    {
      id: "profile",
      label: "Transaction History",
      icon: <TodoCheckListIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      icon: <BookmarkOutlineIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: <EditIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Notifications clicked"),
    },
    {
      id: "logout",
      label: "Logout",
      icon: <LogoutIcon width={20} height={20} fill="currentColor" />,
      onClick: () => console.log("Logout clicked"),
    },
  ];

  return (
    <PageLayout
      layout="two-column-left-large"
      stickyRight={true}
      leftColumn={
        <div className="space-y-8">
          {/* Profile Card */}
          <ProfileCard
            name="Sara Chen"
            tagline="Where modern beauty meets neoprecision, comfort, confidence, and personalized care."
            avatarUrl="https://via.placeholder.com/200"
            backgroundUrl="https://via.placeholder.com/1200x400"
            joinedDate="21 Aug, 2025"
            location="Dhaka, Bangladesh"
            totalServices={225}
            onEditProfile={() => console.log("Edit profile clicked")}
            onChangeAvatar={() => console.log("Change avatar clicked")}
            onChangeBackground={() => console.log("Change background clicked")}
          />

          {/* Appointment Card Example */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Appointments
            </h2>
            <div className="space-y-8">
              {appointments.map((item, index) => (
                <AppointmentCard
                  key={index}
                  {...item}
                  onReschedule={() => console.log("Reschedule clicked")}
                  onCancel={() => console.log("Cancel clicked")}
                  onViewClient={() => console.log("View client clicked")}
                  onSendMessage={() => console.log("Send message clicked")}
                  onViewNotes={() => console.log("View notes clicked")}
                  onMarkComplete={(completed) =>
                    console.log("Mark complete:", completed)
                  }
                />
              ))}
            </div>
          </section>
        </div>
      }
      rightColumn={
        <div className="space-y-6">
          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="">
              {accountMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-black/3 transition-colors">
                  <div className="text-text-primary/50">{item.icon}</div>
                  <span className="text-sm font-medium text-text-primary">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <TrendingServices
            services={[
              {
                id: "trending-1",
                serviceName: "Natural Makeup Service",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-2",
                serviceName: "Ombre Gel Nails",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-3",
                serviceName: "Bridal Makeup",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-4",
                serviceName: "Spa Pedicure",
                providerName: "Velora Beauty Lounge",
              },
              {
                id: "trending-5",
                serviceName: "Acrylic Nails",
                providerName: "Velora Beauty Lounge",
              },
            ]}
          />
        </div>
      }
    />
  );
}
