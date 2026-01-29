"use client";

import React from "react";

export const ProfileCardSkeleton: React.FC = () => {
  return (
    <article
      className="w-full bg-white rounded-2xl overflow-hidden animate-pulse"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
      }}>
      {/* Background Image Skeleton */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200">
        {/* Camera Icon Skeleton */}
        <div className="absolute bottom-4 right-4 bg-gray-300 p-2 rounded-lg w-[53px] h-[46px]" />
      </div>

      {/* Avatar and Content Section */}
      <div className="relative px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          {/* Avatar Skeleton */}
          <div className="relative -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 shrink-0 mx-auto sm:mx-0">
            <div className="relative">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 sm:border-5 md:border-6 border-white bg-gray-200" />
              {/* Camera Icon Skeleton for Avatar */}
              <div className="absolute bottom-1.5 right-1.5 sm:bottom-5 sm:right-5 bg-gray-300 p-2 rounded-md w-[46px] h-[46px]" />
            </div>
          </div>

          {/* Profile Header Info Skeleton */}
          <div className="flex-1 pt-6 sm:pt-0 w-full">
            {/* Name and Icons Row */}
            <header className="flex items-center justify-between gap-3 mb-3 sm:mb-4 flex-wrap">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Name Skeleton */}
                <div className="h-8 sm:h-9 md:h-10 bg-gray-200 rounded-md w-48 sm:w-56" />
                {/* Copy Icon Skeleton */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded shrink-0" />
              </div>
              {/* Edit Icon Skeleton */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded shrink-0 mt-2 sm:mt-0" />
            </header>

            {/* Tagline Skeleton */}
            <div className="space-y-2 mb-2">
              <div className="h-4 sm:h-5 bg-gray-200 rounded w-full max-w-2xl" />
              <div className="h-4 sm:h-5 bg-gray-200 rounded w-3/4 max-w-xl" />
            </div>

            {/* Stats Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 pb-6 sm:pb-8">
              {/* Joined Skeleton */}
              <div>
                <div className="h-4 sm:h-5 bg-gray-200 rounded w-16 mb-2" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                  <div className="h-4 sm:h-5 bg-gray-200 rounded w-32" />
                </div>
              </div>

              {/* Location Skeleton */}
              <div>
                <div className="h-4 sm:h-5 bg-gray-200 rounded w-20 mb-2" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                  <div className="h-4 sm:h-5 bg-gray-200 rounded w-36" />
                </div>
              </div>

              {/* Total Services Skeleton */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="h-4 sm:h-5 bg-gray-200 rounded w-44 mb-2" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded shrink-0" />
                  <div className="h-4 sm:h-5 bg-gray-200 rounded w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
