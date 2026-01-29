"use client";

import React from "react";

export interface TrendingServicesSkeletonProps {
  itemCount?: number;
  className?: string;
}

export const TrendingServicesCardSkeleton: React.FC<
  TrendingServicesSkeletonProps
> = ({ itemCount = 3, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-5 animate-pulse ${className}`}>
      {/* Header Skeleton */}
      <div className="bg-gray-100 rounded-full px-4 py-2 mb-5 flex items-center justify-center gap-2 w-full">
        <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-32" />
      </div>

      {/* Services List Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div key={index} className="space-y-1">
            {/* Trending Badge Skeleton */}
            <div className="flex items-center gap-1.5">
              <div className="w-[14px] h-[14px] bg-gray-200 rounded" />
              <div className="h-3 bg-gray-200 rounded w-16" />
            </div>
            {/* Service Name Skeleton */}
            <div className="h-4 bg-gray-200 rounded w-full max-w-[200px]" />
            {/* Provider Name Skeleton */}
            <div className="h-3 bg-gray-200 rounded w-3/4 max-w-[150px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
