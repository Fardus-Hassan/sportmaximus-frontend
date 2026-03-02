"use client";

import Image from "next/image";
import { CalendarIcon, ClockIcon, CreditCardIcon, UserIcon, MailIcon, DocumentIcon, LocationIcon } from "@/components/Icons";

export type AppointmentStatus = "in_progress" | "booked" | "completed" | "cancelled";
export type PaymentStatus = "paid" | "walk_in_pay" | "cash" | "cash_payment" | "card_payment" | "pending";

export interface AppointmentCardProps {
  id: string;
  serviceName: string;
  beauticianName: string;
  beauticianAvatar?: string;
  parlorName: string;
  date: string;
  time: string;
  paymentMethod: PaymentStatus;
  status: AppointmentStatus;
  showActions?: boolean;
  showMarkComplete?: boolean;
  onReschedule?: () => void;
  onCancel?: () => void;
  onViewBeautician?: () => void;
  onMessage?: () => void;
  onViewDetails?: () => void;
  onMarkComplete?: (completed: boolean) => void;
  className?: string;
}

const statusConfig: Record<AppointmentStatus, { label: string; bgColor: string; textColor: string }> = {
  in_progress: { label: "In Progress", bgColor: "bg-orange-50", textColor: "text-orange-500" },
  booked: { label: "Booked", bgColor: "bg-primary/10", textColor: "text-primary" },
  completed: { label: "Completed", bgColor: "bg-green-50", textColor: "text-green-600" },
  cancelled: { label: "Cancelled", bgColor: "bg-red-50", textColor: "text-red-500" },
};

const paymentConfig: Record<PaymentStatus, { label: string; bgColor: string; textColor: string }> = {
  paid: { label: "Paid", bgColor: "bg-green-50", textColor: "text-green-600" },
  walk_in_pay: { label: "Walk In Pay", bgColor: "bg-primary/10", textColor: "text-primary" },
  cash: { label: "Cash", bgColor: "bg-gray-100", textColor: "text-gray-600" },
  cash_payment: { label: "Cash payment", bgColor: "bg-gray-100", textColor: "text-gray-600" },
  card_payment: { label: "Card payment", bgColor: "bg-blue-50", textColor: "text-blue-600" },
  pending: { label: "-", bgColor: "bg-gray-100", textColor: "text-gray-400" },
};

export default function AppointmentCard({
  serviceName,
  beauticianName,
  beauticianAvatar,
  parlorName,
  date,
  time,
  paymentMethod,
  status,
  showActions = true,
  showMarkComplete = false,
  onReschedule,
  onCancel,
  onViewBeautician,
  onMessage,
  onViewDetails,
  onMarkComplete,
  className = "",
}: AppointmentCardProps) {
  const statusStyle = statusConfig[status];
  const paymentStyle = paymentConfig[paymentMethod];
  const isCancelled = status === "cancelled";

  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      <div className="p-5 sm:p-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          {/* Service Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-primary">{serviceName}</h3>
            
            {/* Beautician */}
            <div className="flex items-center gap-2 mt-2">
              {beauticianAvatar ? (
                <Image
                  src={beauticianAvatar}
                  alt={beauticianName}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs font-semibold">{beauticianName.charAt(0)}</span>
                </div>
              )}
              <span className="text-sm text-text-primary">{beauticianName}</span>
            </div>

            {/* Parlor */}
            <div className="flex items-center gap-2 mt-1.5">
              <LocationIcon width={16} height={16} className="text-text-primary/40" />
              <span className="text-sm text-text-primary/60">{parlorName}</span>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle.bgColor} ${statusStyle.textColor}`}>
              {statusStyle.label}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${paymentStyle.bgColor} ${paymentStyle.textColor}`}>
              {paymentStyle.label}
            </span>
          </div>
        </div>

        {/* Date, Time, Payment Row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-black/5">
          <div className="flex items-center gap-2">
            <CalendarIcon width={16} height={16} className="text-text-primary/40" />
            <span className="text-sm text-text-primary">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon width={16} height={16} className="text-text-primary/40" />
            <span className="text-sm text-text-primary">{time}</span>
          </div>
          {!isCancelled && paymentMethod !== "pending" && (
            <div className="flex items-center gap-2 ml-auto">
              <CreditCardIcon width={16} height={16} className="text-text-primary/40" />
              <span className="text-sm text-text-primary">{paymentStyle.label}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        {showActions && !isCancelled && (
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-black/5">
            <button
              onClick={onReschedule}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <CalendarIcon width={16} height={16} fill="white" />
              <span>Reschedule</span>
            </button>
            <button
              onClick={onCancel}
              className="flex-1 sm:flex-none px-5 py-2.5 border border-black/10 text-text-primary rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
            >
              Cancel Request
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={onViewBeautician}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="View Beautician"
              >
                <UserIcon width={18} height={18} fill="currentColor" />
              </button>
              <button
                onClick={onMessage}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Message"
              >
                <MailIcon width={18} height={18} className="text-primary" />
              </button>
              {onViewDetails && (
                <button
                  onClick={onViewDetails}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="View Details"
                >
                  <DocumentIcon width={18} height={18} fill="currentColor" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mark as Completed */}
      {showMarkComplete && !isCancelled && (
        <div className="px-5 sm:px-6 py-3 bg-primary/5 flex items-center justify-end gap-3">
          <span className="text-sm text-text-primary">Mark as Completed</span>
          <input
            type="checkbox"
            onChange={(e) => onMarkComplete?.(e.target.checked)}
            className="w-5 h-5 rounded border-black/20 text-primary focus:ring-primary cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
