"use client";

import Image from "next/image";
import { CameraIcon, CalendarIcon, LocationIcon, StarIcon, EditIcon, UserIcon } from "@/components/Icons";

export interface BeauticianProfileHeaderProps {
  name: string;
  avatar?: string;
  coverImage?: string;
  specialization?: string;
  description?: string;
  joinedDate: string;
  location: string;
  rating: number;
  reviewCount: number;
  totalServices: number;
  totalClients: number;
  parlorName?: string;
  isOwnProfile?: boolean;
  isVerified?: boolean;
  onEditProfile?: () => void;
  onChangeCover?: () => void;
  onChangeAvatar?: () => void;
  onBookNow?: () => void;
  onMessage?: () => void;
  className?: string;
}

export default function BeauticianProfileHeader({
  name,
  avatar,
  coverImage,
  specialization,
  description,
  joinedDate,
  location,
  rating,
  reviewCount,
  totalServices,
  totalClients,
  parlorName,
  isOwnProfile = false,
  isVerified = false,
  onEditProfile,
  onChangeCover,
  onChangeAvatar,
  onBookNow,
  onMessage,
  className = "",
}: BeauticianProfileHeaderProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Cover Image */}
      <div className="relative h-40 sm:h-48 md:h-56 w-full bg-gradient-to-r from-green-100 to-green-50">
        {coverImage && (
          <Image
            src={coverImage}
            alt="Cover"
            fill
            className="object-cover"
            unoptimized
          />
        )}
        
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
        <div className="relative -mt-16 sm:-mt-20 mb-4">
          <div className="relative inline-block">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={120}
                height={120}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-100 border-4 border-white shadow-lg flex items-center justify-center">
                <UserIcon width={48} height={48} fill="#22c55e" />
              </div>
            )}
            
            {isOwnProfile && (
              <button
                onClick={onChangeAvatar}
                className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Change profile photo"
              >
                <CameraIcon width={16} height={16} className="text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Name and Edit */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{name}</h1>
              {isVerified && (
                <span className="text-green-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
              )}
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                Beautician
              </span>
            </div>
            
            {specialization && (
              <p className="text-sm text-green-600 font-medium mt-1">{specialization}</p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <StarIcon width={16} height={16} fill="#FFD700" />
                <span className="font-semibold text-text-primary">{rating}</span>
              </div>
              <span className="text-sm text-text-primary/60">({reviewCount} reviews)</span>
            </div>

            {parlorName && (
              <p className="text-sm text-text-primary/60 mt-1">Works at {parlorName}</p>
            )}
            
            {description && (
              <p className="text-sm text-text-primary/60 mt-3 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {isOwnProfile ? (
              <button
                onClick={onEditProfile}
                className="p-2 text-text-primary/40 hover:text-primary transition-colors"
                aria-label="Edit profile"
              >
                <EditIcon width={20} height={20} fill="currentColor" />
              </button>
            ) : (
              <>
                <button
                  onClick={onBookNow}
                  className="px-5 py-2.5 bg-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Book Now
                </button>
                <button
                  onClick={onMessage}
                  className="px-5 py-2.5 border border-green-500 text-green-500 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Message
                </button>
              </>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-black/5">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-text-primary">{totalServices}</p>
            <p className="text-xs text-text-primary/60 mt-1">Services Offered</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-text-primary">{totalClients}</p>
            <p className="text-xs text-text-primary/60 mt-1">Happy Clients</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-text-primary/40">
              <CalendarIcon width={14} height={14} fill="currentColor" />
              <span className="text-xs">Joined</span>
            </div>
            <p className="text-sm font-medium text-text-primary mt-1">{joinedDate}</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-text-primary/40">
              <LocationIcon width={14} height={14} fill="currentColor" />
              <span className="text-xs">Location</span>
            </div>
            <p className="text-sm font-medium text-text-primary mt-1">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
