"use client";

import Image from "next/image";
import { CameraIcon, CalendarIcon, LocationIcon, GlobeIcon, EditIcon, UserIcon } from "@/components/Icons";

export interface UserProfileHeaderProps {
  name: string;
  avatar?: string;
  coverImage?: string;
  description?: string;
  joinedDate: string;
  location: string;
  totalServicesTaken: number;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onChangeCover?: () => void;
  onChangeAvatar?: () => void;
  className?: string;
}

export default function UserProfileHeader({
  name,
  avatar,
  coverImage,
  description,
  joinedDate,
  location,
  totalServicesTaken,
  isOwnProfile = false,
  onEditProfile,
  onChangeCover,
  onChangeAvatar,
  className = "",
}: UserProfileHeaderProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Cover Image */}
      <div className="relative h-40 sm:h-48 md:h-56 w-full bg-gradient-to-r from-primary/20 to-primary/10">
        {coverImage && (
          <Image
            src={coverImage}
            alt="Cover"
            fill
            className="object-cover"
            unoptimized
          />
        )}
        
        {/* Change Cover Button */}
        {isOwnProfile && (
          <button
            onClick={onChangeCover}
            className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 text-primary hover:bg-white transition-colors shadow-sm"
            aria-label="Change cover photo"
          >
            <CameraIcon width={20} height={20} className="text-primary" />
          </button>
        )}
      </div>

      {/* Profile Content */}
      <div className="relative px-5 sm:px-6 pb-6">
        {/* Avatar */}
        <div className="relative -mt-16 sm:-mt-[100px] mb-4">
          <div className="relative inline-block">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={120}
                height={120}
                className="w-34 h-34 sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 border-4 border-white shadow-lg flex items-center justify-center">
                <UserIcon width={48} height={48} fill="#E32750" />
              </div>
            )}
            
            {/* Change Avatar Button */}
            {isOwnProfile && (
              <button
                onClick={onChangeAvatar}
                className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Change profile photo"
              >
                <CameraIcon width={16} height={16} className="text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Name and Edit */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{name}</h1>
              <span className="text-text-primary/40">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            {/* Description */}
            {description && (
              <p className="text-sm text-text-primary/60 mt-2 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Edit Profile Button */}
          {isOwnProfile && (
            <button
              onClick={onEditProfile}
              className="p-2 text-text-primary/40 hover:text-primary transition-colors"
              aria-label="Edit profile"
            >
              <EditIcon width={20} height={20} fill="currentColor" />
            </button>
          )}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-6 pt-6 border-t border-black/5">
          {/* Joined */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-text-primary/40">
              <CalendarIcon width={16} height={16} fill="currentColor" />
              <span className="text-xs font-medium">Joined</span>
            </div>
            <span className="text-sm font-medium text-text-primary">{joinedDate}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-text-primary/40">
              <LocationIcon width={16} height={16} fill="currentColor" />
              <span className="text-xs font-medium">Location</span>
            </div>
            <span className="text-sm font-medium text-text-primary">{location}</span>
          </div>

          {/* Total Services Taken */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-text-primary/40">
              <GlobeIcon width={16} height={16} className="text-current" />
              <span className="text-xs font-medium">Total Services Taken</span>
            </div>
            <span className="text-sm font-medium text-text-primary">{totalServicesTaken}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
