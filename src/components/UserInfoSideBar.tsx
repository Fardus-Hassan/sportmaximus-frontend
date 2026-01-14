"use client";

import React from "react";
import Image from "next/image";
import { Logo, StarIcon, LocationIcon, CrownIcon, BookmarkIcon, EditIcon, DocumentIcon, UserIcon } from "@/components/Icons";

export type UserRole = "user" | "beautician" | "manager";

export interface ProfileData {
  name: string;
  location?: string;
  avatar?: string;
  coverImage?: string;
  role?: string; // e.g., "Nail Technician • Bridal & Acrylic"
  rating?: {
    value: number;
    count: number;
  };
  distance?: string; // e.g., "4.5 km"
  description?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface UserInfoSideBarProps {
  role: UserRole;
  profile: ProfileData;
  menuItems: MenuItem[];
  onViewProfile?: () => void;
  showPremiumTrial?: boolean;
  onPremiumTrialClick?: () => void;
  className?: string;
}

export default function UserInfoSideBar({
  role,
  profile,
  menuItems,
  onViewProfile,
  showPremiumTrial = false,
  onPremiumTrialClick,
  className = "",
}: UserInfoSideBarProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Profile Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        {/* Cover Image */}
        {profile.coverImage && (
          <div className="relative h-30 w-full">
            <Image
              src={profile.coverImage}
              alt="Cover"
              fill={false}
              width={800}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-4">
          {/* Avatar */}
          <div className="">
            {profile.avatar ? (
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover border-2 border-white -mt-20 relative z-10"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-white -mt-10 relative z-10 flex items-center justify-center">
                <UserIcon width={40} height={40} fill="#E32750" />
              </div>
            )}

            <div className="flex-1 pt-2">
              <h3 className="text-lg font-bold text-text-primary">{profile.name}</h3>
              
              {profile.role && (
                <p className="text-sm text-text-primary/70 mt-1">{profile.role}</p>
              )}

              {/* Rating (for beauticians) */}
              {profile.rating && (
                <div className="flex items-center gap-1 mt-2">
                  <StarIcon width={16} height={16} fill="#FFD700" />
                  <span className="text-sm text-text-primary">
                    {profile.rating.value} ({profile.rating.count} reviews)
                  </span>
                </div>
              )}

              {/* Location */}
              {profile.location && (
                <div className="flex items-center gap-1 mt-2">
                  <LocationIcon width={16} height={16} fill="#E32750" />
                  <span className="text-sm text-text-primary">
                    {profile.location}
                    {profile.distance && ` • ${profile.distance}`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {profile.description && (
            <div className="mt-4 p-3 bg-black/3 rounded-lg">
              <p className="text-sm text-text-primary/70 leading-relaxed">
                {profile.description}
              </p>
            </div>
          )}

          {/* View Profile Button */}
          {onViewProfile && (
            <button
              onClick={onViewProfile}
              className="w-full mt-4 py-2.5 px-4 rounded-lg border border-primary text-text-primary font-medium hover:bg-primary/5 transition-colors"
            >
              View Profile
            </button>
          )}
        </div>
      </div>

      {/* Premium Trial Section (for beauticians/managers) */}
      {showPremiumTrial && (
        <div className="bg-primary rounded-lg p-6 py-3 text-center">
          <CrownIcon width={32} height={32} fill="#FFFFFF" className="mx-auto mb-3" />
          <button
            onClick={onPremiumTrialClick}
            className="w-full bg-white text-text-primary font-semibold py-2.5 px-4 rounded-lg mb-3 hover:opacity-90 transition-opacity"
          >
            3 Days of Free Trial
          </button>
          <p className="text-white text-sm">
            Go Premium to unlock full creative control of your space.
          </p>
        </div>
      )}

      {/* Menu Items */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-black/3 transition-colors"
            >
              <div className="text-text-primary/50">{item.icon}</div>
              <span className="text-sm font-medium text-text-primary">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
