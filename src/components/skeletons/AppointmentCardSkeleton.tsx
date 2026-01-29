"use client";

import React from "react";

export const AppointmentCardSkeleton: React.FC = () => {
  return (
    <div
      className="w-full overflow-x-hidden animate-pulse"
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
          {/* Service Name Skeleton */}
          <div className="h-7 sm:h-8 bg-gray-200 rounded w-48 sm:w-64" />

          {/* Status Badges Skeleton */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-7 sm:h-8 bg-gray-200 rounded-full w-24 sm:w-28" />
            <div className="h-7 sm:h-8 bg-gray-200 rounded-full w-16 sm:w-20" />
          </div>
        </div>

        {/* Client Info Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-200 shrink-0" />
          <div className="h-4 sm:h-5 bg-gray-200 rounded w-32 sm:w-40" />
        </div>

        {/* Venue Skeleton */}
        <div className="flex items-center gap-2 w-full">
          <div className="w-5 h-5 bg-gray-200 rounded shrink-0" />
          <div className="h-4 bg-gray-200 rounded w-40 sm:w-56" />
        </div>

        {/* Date, Time and Payment Info Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Date Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-200 rounded shrink-0" />
            <div className="h-4 bg-gray-200 rounded w-24 sm:w-32" />
          </div>

          {/* Time Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-200 rounded shrink-0" />
            <div className="h-4 bg-gray-200 rounded w-20 sm:w-24" />
          </div>

          {/* Payment Method Skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-200 rounded shrink-0" />
            <div className="h-4 bg-gray-200 rounded w-24 sm:w-28" />
          </div>
        </div>

        {/* Action Buttons Row Skeleton */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full">
          {/* Reschedule Button Skeleton */}
          <div className="bg-gray-200 h-10 sm:h-12 rounded-lg sm:rounded-xl w-full sm:w-auto sm:flex-1" />

          {/* Cancel Request Button Skeleton */}
          <div className="bg-gray-200 h-10 sm:h-12 rounded-lg sm:rounded-xl w-full sm:w-auto sm:flex-1" />

          {/* Icon Buttons Skeleton */}
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-200 rounded-lg sm:rounded-xl" />
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-200 rounded-lg sm:rounded-xl" />
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-200 rounded-lg sm:rounded-xl" />
          </div>
        </div>
      </div>

      {/* Pink Card - Mark as Completed Section Skeleton */}
      <div
        className="flex flex-col sm:flex-row justify-center sm:justify-end items-center self-stretch bg-gray-100 py-4 px-4 sm:px-6 gap-3 sm:gap-0"
        style={{
          borderRadius: "0 0 12px 12px",
          boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
        }}>
        <div className="flex items-center gap-3">
          <div className="h-4 sm:h-5 bg-gray-200 rounded w-36 sm:w-40" />
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
};
