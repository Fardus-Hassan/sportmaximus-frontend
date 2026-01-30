"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { AppointmentCard } from "./AppointmentCard";
import { ProfileCard } from "./ProfileCard";
import {
  AppointmentCardSkeleton,
  ProfileCardSkeleton,
  TrendingServicesCardSkeleton,
} from "@/components/skeletons";
import Dialog from "@/components/shared/Dialogs";
import { useState } from "react";
import PaginationFooter from "@/components/shared/PaginationFooter";
import TrendingServicesCard from "@/components/TrendingServicesCard";
import AccountMenuItemsCard from "@/components/shared/AccountMenuCard";
import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RateUsDialog from "./RateUsDialog";

interface AppointmentCardTypes {
  id: string;
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

type DialogType = "cancel" | "complete" | "uncomplete" | null;

export default function ProfileContent() {
  const isLoading = false;
  const [dialogType, setDialogType] = useState<DialogType>(null);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<
    string | null
  >(null);
  const [appointments, setAppointments] = useState<AppointmentCardTypes[]>([
    {
      id: "appt-1",
      serviceName: "Gel Manicure",
      clientName: "Nila Akter",
      clientAvatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      venueName: "Velora Beauty Lounge",
      date: "2025-11-20",
      time: "2:00 PM",
      paymentMethod: "Card payment",
      status: "In Progress",
      isPaid: true,
    },
    {
      id: "appt-2",
      serviceName: "Hair Spa Treatment",
      clientName: "Farhana Islam",
      clientAvatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      venueName: "Glow Beauty Studio",
      date: "2025-11-21",
      time: "11:30 AM",
      paymentMethod: "Cash",
      status: "Pending",
      isPaid: false,
    },
    {
      id: "appt-3",
      serviceName: "Bridal Makeup",
      clientName: "Sadia Rahman",
      clientAvatarUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
      venueName: "Elegance Salon",
      date: "2025-11-22",
      time: "5:00 PM",
      paymentMethod: "Online payment",
      status: "Completed",
      isPaid: true,
    },
    {
      id: "appt-4",
      serviceName: "Facial Cleanup",
      clientName: "Mim Chowdhury",
      clientAvatarUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      venueName: "Velora Beauty Lounge",
      date: "2025-11-23",
      time: "1:00 PM",
      paymentMethod: "Card payment",
      status: "Cancelled",
      isPaid: false,
    },
    {
      id: "appt-5",
      serviceName: "Hair Coloring",
      clientName: "Anika Hasan",
      clientAvatarUrl:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
      venueName: "Urban Chic Salon",
      date: "2025-11-24",
      time: "4:30 PM",
      paymentMethod: "Cash",
      status: "Paid",
      isPaid: true,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [openRateDialog, setOpenRateDialog] = useState(false);

  const handleCancelAppointment = (appointmentId: string) => {
    setSelectedAppointmentId(appointmentId);
    setDialogType("cancel");
  };

  const handleMarkComplete = (appointmentId: string) => {
    setSelectedAppointmentId(appointmentId);
    setDialogType("complete");
  };

  const handleUnmarkComplete = (appointmentId: string) => {
    setSelectedAppointmentId(appointmentId);
    setDialogType("uncomplete");
  };

  const handleConfirmCancel = () => {
    if (selectedAppointmentId) {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appt) =>
          appt.id === selectedAppointmentId
            ? { ...appt, status: "Cancelled" as const }
            : appt,
        ),
      );
      console.log(`Appointment ${selectedAppointmentId} cancelled`);
    }
    setDialogType(null);
    setSelectedAppointmentId(null);
  };

  const handleConfirmComplete = () => {
    if (selectedAppointmentId) {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appt) =>
          appt.id === selectedAppointmentId
            ? { ...appt, status: "Completed" as const }
            : appt,
        ),
      );
      console.log(`Appointment ${selectedAppointmentId} marked as complete`);

      // Show rate dialog after marking as complete
      setOpenRateDialog(true);
    }
    setDialogType(null);
    setSelectedAppointmentId(null);
  };

  const handleConfirmUncomplete = () => {
    if (selectedAppointmentId) {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appt) =>
          appt.id === selectedAppointmentId
            ? { ...appt, status: "In Progress" as const }
            : appt,
        ),
      );
      console.log(`Appointment ${selectedAppointmentId} unmarked as complete`);
    }
    setDialogType(null);
    setSelectedAppointmentId(null);
  };

  const handleCloseDialog = () => {
    setDialogType(null);
    setSelectedAppointmentId(null);
  };

  const handleRateSubmit = (rating: number, comment: string) => {
    // Handle rating submission - send to API, update state, etc.
    console.log("Rating submitted:", { rating, comment });

    // You can add API call here
    // await submitRating({ appointmentId: selectedAppointmentId, rating, comment });

    // Show success message (toast/notification)
    // toast.success("Thank you for your feedback!");
  };

  const getDialogConfig = () => {
    switch (dialogType) {
      case "cancel":
        return {
          title: "Ask to cancel this appointment?",
          cancelText: "Cancel",
          confirmText: "Send Request",
          onConfirm: handleConfirmCancel,
        };
      case "complete":
        return {
          title: "Mark as complete",
          cancelText: "Cancel",
          confirmText: "Confirm",
          onConfirm: handleConfirmComplete,
        };
      case "uncomplete":
        return {
          title: "Unmark this appointment as completed?",
          cancelText: "No, Keep it",
          confirmText: "Yes, Unmark",
          onConfirm: handleConfirmUncomplete,
        };
      default:
        return {
          title: "",
          cancelText: "Cancel",
          confirmText: "Confirm",
          onConfirm: () => {},
        };
    }
  };

  const dialogConfig = getDialogConfig();

  return (
    <PageLayout
      layout="two-column-left-large"
      stickyRight={true}
      leftColumn={
        <div className="space-y-8">
          {/* Profile Card */}
          {isLoading ? (
            <ProfileCardSkeleton />
          ) : (
            <ProfileCard
              name="Sara Chen"
              tagline="Where modern beauty meets neoprecision, comfort, confidence, and personalized care."
              avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              backgroundUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
              joinedDate="21 Aug, 2025"
              location="Dhaka, Bangladesh"
              totalServices={225}
              onEditProfile={() => console.log("Edit profile clicked")}
              onChangeAvatar={() => console.log("Change avatar clicked")}
              onChangeBackground={() =>
                console.log("Change background clicked")
              }
            />
          )}

          {/* Appointment Card Example */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Appointments
            </h2>
            <div className="space-y-8">
              {isLoading ? (
                <AppointmentCardSkeleton />
              ) : (
                <div className="space-y-8">
                  {appointments.map((item) => (
                    <AppointmentCard
                      key={item.id}
                      {...item}
                      onReschedule={() => console.log("Reschedule clicked")}
                      onCancel={() => handleCancelAppointment(item.id)}
                      onViewClient={() => console.log("View client clicked")}
                      onSendMessage={() => console.log("Send message clicked")}
                      onViewNotes={() => setOpenDialog(true)}
                      onMarkComplete={(completed) => {
                        if (completed) {
                          handleMarkComplete(item.id);
                        } else {
                          handleUnmarkComplete(item.id);
                        }
                      }}
                    />
                  ))}

                  <PaginationFooter
                    currentPage={1}
                    totalPages={16}
                    totalItems={1450}
                    itemsPerPageOptions={["10", "11", "25", "50"]}
                    defaultItemsPerPage="11"
                    onPageChange={(page) =>
                      console.log("Page changed to:", page)
                    }
                    onItemsPerPageChange={(items) =>
                      console.log("Items per page changed to:", items)
                    }
                  />

                  {/* Booking Receipt Dialog */}
                  <ShadcnDialog
                    open={openDialog}
                    onOpenChange={(e) => setOpenDialog(e)}>
                    <DialogContent className="sm:max-w-[425px] p-0 gap-0">
                      <div className="p-6 pb-8">
                        <DialogHeader className="mb-6">
                          <DialogTitle className="text-2xl font-semibold text-gray-800">
                            Booking Receipt
                          </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-4">
                          {/* Client Name */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">
                              Client name
                            </span>
                            <span className="text-sm font-semibold text-gray-800">
                              Sara Chen
                            </span>
                          </div>

                          {/* Parlor Name */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">
                              Parlor Name
                            </span>
                            <span className="text-sm font-semibold text-gray-800">
                              Velora Beauty Parlor
                            </span>
                          </div>

                          {/* Date */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">Date</span>
                            <span className="text-sm font-semibold text-gray-800">
                              Mon, 12 Jan 2026
                            </span>
                          </div>

                          {/* Time */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">Time</span>
                            <span className="text-sm font-semibold text-gray-800">
                              12:28 PM
                            </span>
                          </div>

                          {/* Service */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">
                              Service
                            </span>
                            <span className="text-sm font-semibold text-gray-800 text-right">
                              Nail Art , Bridal & Acrylic
                            </span>
                          </div>

                          {/* Price */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">Price</span>
                            <span className="text-sm font-semibold text-gray-800">
                              $1000
                            </span>
                          </div>

                          {/* Tax */}
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-gray-600">
                              Tax(15%)
                            </span>
                            <span className="text-sm font-semibold text-gray-800">
                              $150
                            </span>
                          </div>

                          {/* Total Price */}
                          <div className="flex justify-between items-start py-2">
                            <span className="text-sm font-semibold text-gray-800">
                              Total Price
                            </span>
                            <span className="text-sm font-semibold text-gray-800">
                              $1150
                            </span>
                          </div>

                          {/* Button */}
                          <button
                            onClick={() => setOpenDialog(false)}
                            className="w-full bg-primary hover:bg-[#ce2348] text-white font-medium py-2.5 rounded-lg transition-colors">
                            Go To Home
                          </button>
                        </div>
                      </div>
                    </DialogContent>
                  </ShadcnDialog>

                  {/* Rate Us Dialog */}
                  <RateUsDialog
                    open={openRateDialog}
                    onOpenChange={setOpenRateDialog}
                    onSubmit={handleRateSubmit}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      }
      rightColumn={
        <div className="space-y-6">
          {/* Menu Items */}
          <AccountMenuItemsCard />

          <Dialog
            isOpen={dialogType !== null}
            onClose={handleCloseDialog}
            onConfirm={dialogConfig.onConfirm}
            cancelText={dialogConfig.cancelText}
            confirmText={dialogConfig.confirmText}
            showIcon={true}
            title={dialogConfig.title}
          />

          {isLoading ? (
            <TrendingServicesCardSkeleton />
          ) : (
            <TrendingServicesCard
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
          )}
        </div>
      }
    />
  );
}
