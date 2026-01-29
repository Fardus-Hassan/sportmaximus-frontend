"use client";

import Image from "next/image";
import React from "react";

interface AppointmentCardProps {
  serviceName: string;
  clientName: string;
  clientAvatarUrl?: string;
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

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  serviceName,
  clientName,
  clientAvatarUrl,
  venueName,
  date,
  time,
  paymentMethod,
  status,
  isPaid,
  onReschedule,
  onCancel,
  onViewClient,
  onSendMessage,
  onViewNotes,
  onMarkComplete,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "In Progress":
        return "bg-[#FFF4E6] text-[#F59E0B]";
      case "Paid":
        return "bg-[#F3E8FF] text-[#9333EA]";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
      }}>
      {/* White Card */}
      <div
        className="flex flex-col items-start self-stretch bg-white"
        style={{
          padding: "clamp(16px, 4vw, 24px)",
          gap: "clamp(12px, 3vw, 20px)",
          borderRadius: "12px 12px 0 0",
          boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
        }}>
        {/* Header with Title and Status Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
            {serviceName}
          </h2>

          {/* Status Badges */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${getStatusColor()}`}>
              {status}
            </span>
            {isPaid && (
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#F3E8FF] text-[#9333EA]">
                Paid
              </span>
            )}
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-linear-to-br from-[#EC4899] to-[#BE185D] flex items-center justify-center shrink-0">
            {clientAvatarUrl ? (
              <Image
                src={clientAvatarUrl || "/placeholder.svg"}
                alt={clientName}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-semibold text-xs sm:text-sm">
                {clientName.charAt(0)}
              </span>
            )}
          </div>
          <span className="text-sm sm:text-base font-normal text-gray-900 truncate">
            {clientName}
          </span>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M10 10C10.9946 10 11.9484 9.60491 12.6517 8.90165C13.3549 8.19839 13.75 7.24456 13.75 6.25C13.75 5.25544 13.3549 4.30161 12.6517 3.59835C11.9484 2.89509 10.9946 2.5 10 2.5C9.00544 2.5 8.05161 2.89509 7.34835 3.59835C6.64509 4.30161 6.25 5.25544 6.25 6.25C6.25 7.24456 6.64509 8.19839 7.34835 8.90165C8.05161 9.60491 9.00544 10 10 10ZM10 11.25C8.67392 11.25 7.40215 10.7232 6.46447 9.78553C5.52678 8.84785 5 7.57608 5 6.25C5 4.92392 5.52678 3.65215 6.46447 2.71447C7.40215 1.77678 8.67392 1.25 10 1.25C11.3261 1.25 12.5979 1.77678 13.5355 2.71447C14.4732 3.65215 15 4.92392 15 6.25C15 7.57608 14.4732 8.84785 13.5355 9.78553C12.5979 10.7232 11.3261 11.25 10 11.25Z"
              fill="#61758A"
            />
            <path
              d="M10 10C10.1658 10 10.3247 10.0658 10.4419 10.1831C10.5592 10.3003 10.625 10.4592 10.625 10.625V15.625C10.625 15.7908 10.5592 15.9497 10.4419 16.0669C10.3247 16.1842 10.1658 16.25 10 16.25C9.83424 16.25 9.67527 16.1842 9.55806 16.0669C9.44085 15.9497 9.375 15.7908 9.375 15.625V10.625C9.375 10.4592 9.44085 10.3003 9.55806 10.1831C9.67527 10.0658 9.83424 10 10 10Z"
              fill="#61758A"
            />
            <path
              d="M7.5 12.6777V13.9465C5.26875 14.304 3.75 15.0765 3.75 15.6252C3.75 16.3615 6.4825 17.5002 10 17.5002C13.5175 17.5002 16.25 16.3615 16.25 15.6252C16.25 15.0752 14.7312 14.304 12.5 13.9465V12.6777C15.4125 13.1065 17.5 14.2652 17.5 15.6252C17.5 17.3502 14.1425 18.7502 10 18.7502C5.8575 18.7502 2.5 17.3502 2.5 15.6252C2.5 14.264 4.5875 13.1065 7.5 12.6777Z"
              fill="#61758A"
            />
          </svg>
          <span className="text-xs sm:text-sm text-gray-600 truncate">
            {venueName}
          </span>
        </div>

        {/* Date, Time and Payment Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M13.3337 1.66699V5.00033M6.66699 1.66699V5.00033"
                stroke="#61758A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 3.33301H9.16667C6.02397 3.33301 4.45262 3.33301 3.47631 4.30932C2.5 5.28563 2.5 6.85697 2.5 9.99967V11.6663C2.5 14.809 2.5 16.3804 3.47631 17.3567C4.45262 18.333 6.02397 18.333 9.16667 18.333H10.8333C13.976 18.333 15.5474 18.333 16.5237 17.3567C17.5 16.3804 17.5 14.809 17.5 11.6663V9.99967C17.5 6.85697 17.5 5.28563 16.5237 4.30932C15.5474 3.33301 13.976 3.33301 10.8333 3.33301Z"
                stroke="#61758A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 8.33301H17.5"
                stroke="#61758A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99658 11.667H10.0041M9.99658 15.0003H10.0041M13.3262 11.667H13.3337M6.66699 11.667H6.67447M6.66699 15.0003H6.67447"
                stroke="#61758A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-600">{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                stroke="#61758A"
                strokeWidth="1.5"
              />
              <path
                d="M10 6.66699V10.0003L11.6667 11.667"
                stroke="#61758A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-600">{time}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M13.1253 12.0837C12.9596 12.0837 12.8006 12.1495 12.6834 12.2667C12.5662 12.3839 12.5003 12.5429 12.5003 12.7087C12.5003 12.8744 12.5662 13.0334 12.6834 13.1506C12.8006 13.2678 12.9596 13.3337 13.1253 13.3337H15.2087C15.3744 13.3337 15.5334 13.2678 15.6506 13.1506C15.7678 13.0334 15.8337 12.8744 15.8337 12.7087C15.8337 12.5429 15.7678 12.3839 15.6506 12.2667C15.5334 12.1495 15.3744 12.0837 15.2087 12.0837H13.1253ZM1.66699 6.87533C1.66699 6.15703 1.95233 5.46816 2.46024 4.96024C2.96816 4.45233 3.65703 4.16699 4.37533 4.16699H15.6253C15.981 4.16699 16.3332 4.23705 16.6618 4.37315C16.9903 4.50926 17.2889 4.70875 17.5404 4.96024C17.7919 5.21174 17.9914 5.5103 18.1275 5.83889C18.2636 6.16748 18.3337 6.51966 18.3337 6.87533V13.1253C18.3337 13.481 18.2636 13.8332 18.1275 14.1618C17.9914 14.4904 17.7919 14.7889 17.5404 15.0404C17.2889 15.2919 16.9903 15.4914 16.6618 15.6275C16.3332 15.7636 15.981 15.8337 15.6253 15.8337H4.37533C3.65703 15.8337 2.96816 15.5483 2.46024 15.0404C1.95233 14.5325 1.66699 13.8436 1.66699 13.1253V6.87533ZM17.0837 7.91699V6.87533C17.0837 6.48855 16.93 6.11762 16.6565 5.84413C16.383 5.57064 16.0121 5.41699 15.6253 5.41699H4.37533C3.98855 5.41699 3.61762 5.57064 3.34413 5.84413C3.07064 6.11762 2.91699 6.48855 2.91699 6.87533V7.91699H17.0837ZM2.91699 9.16699V13.1253C2.91699 13.9303 3.57033 14.5837 4.37533 14.5837H15.6253C16.0121 14.5837 16.383 14.43 16.6565 14.1565C16.93 13.883 17.0837 13.5121 17.0837 13.1253V9.16699H2.91699Z"
                fill="#61758A"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-600">
              {paymentMethod}
            </span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full">
          {/* Reschedule Button */}
          <button
            onClick={onReschedule}
            className="bg-primary hover:bg-[#ce2348] text-white font-medium py-2 sm:py-3 px-4 sm:px-8 rounded-lg sm:rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M15.8333 2.49967H15V0.833008H13.3333V2.49967H6.66667V0.833008H5V2.49967H4.16667C3.24167 2.49967 2.5 3.24134 2.5 4.16634V15.833C2.5 16.275 2.67559 16.699 2.98816 17.0115C3.30072 17.3241 3.72464 17.4997 4.16667 17.4997H15.8333C16.75 17.4997 17.5 16.7497 17.5 15.833V4.16634C17.5 3.72431 17.3244 3.30039 17.0118 2.98783C16.6993 2.67527 16.2754 2.49967 15.8333 2.49967ZM15.8333 15.833H4.16667V6.66634H15.8333V15.833ZM10 8.33301V9.99967H13.3333V12.4997H10V14.1663L6.66667 11.2497L10 8.33301Z"
                fill="#FEFEFE"
              />
            </svg>
            <span>Reschedule</span>
          </button>

          {/* Cancel Request Button */}
          <button
            onClick={onCancel}
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 sm:py-3 px-4 sm:px-8 rounded-lg sm:rounded-xl border border-gray-300 transition-colors duration-200 text-sm  w-full">
            Cancel Request
          </button>

          {/* Icon Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onViewClient}
              className="p-2 sm:p-3 rounded-lg sm:rounded-xl hover:border-[#FFF2F5] border border-gray-300 hover:bg-[#FFF2F5] transition-colors duration-200"
              aria-label="View client">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#E91E63]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            <button
              onClick={onSendMessage}
              className="p-2 sm:p-3 rounded-lg sm:rounded-xl hover:border-[#FFF2F5] border border-gray-300 hover:bg-[#FFF2F5] transition-colors duration-200"
              aria-label="Send message">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#E91E63]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>

            <button
              onClick={onViewNotes}
              className="p-2 sm:p-3 rounded-lg sm:rounded-xl hover:border-[#FFF2F5] border border-gray-300 hover:bg-[#FFF2F5] transition-colors duration-200"
              aria-label="View notes">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#E91E63]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M5.20898 6.41406H14.7652M5.20898 8.7H14.7652M5.20898 10.9844H14.7652M5.20898 13.2703H14.7652M5.20898 15.5562H9.29492"
                  stroke="#E32750"
                  strokeWidth="0.483125"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M17.1018 3.68594L14.4986 1.075C14.1923 0.78591 13.787 0.624914 13.3658 0.625H2.6627C2.42051 0.625 2.22363 0.821875 2.22363 1.06406V18.9359C2.22363 19.1781 2.42051 19.375 2.6627 19.375H17.3393C17.5814 19.375 17.7783 19.1781 17.7783 18.9359V4.8875C17.7768 4.43281 17.433 3.99844 17.1018 3.68594ZM17.1518 18.75H2.84863V1.25H12.9518C13.283 1.25 13.5533 1.51875 13.5533 1.85156V4.64531H16.2627C16.7533 4.64531 17.1518 4.91562 17.1518 5.53437V18.75Z"
                  fill="#E32750"
                  stroke="#E32750"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Pink Card - Mark as Completed Section */}
      <div
        className="flex flex-col sm:flex-row justify-center sm:justify-end items-center self-stretch bg-[#FFF2F5] py-4 px-4 sm:px-6 gap-3 sm:gap-0"
        style={{
          borderRadius: "0 0 12px 12px",
          boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
        }}>
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
            Mark as Completed
          </span>
          {/* Custom Checkbox */}
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={(e) => onMarkComplete?.(e.target.checked)}
            />
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-[#E91E63] peer-checked:border-[#E91E63] transition-all duration-200 flex items-center justify-center relative">
              {/* Checkmark SVG */}
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
