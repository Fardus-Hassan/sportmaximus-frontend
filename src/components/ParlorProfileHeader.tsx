"use client";

import Image from "next/image";
import { CameraIcon, StarIcon, MailIcon, LocationIcon } from "@/components/Icons";

export interface ParlorProfileHeaderProps {
  name: string;
  avatar?: string;
  coverImage?: string;
  description?: string;
  referenceId: string;
  rating: number;
  totalServices: number;
  totalArtists: number;
  joinedDate: string;
  location: string;
  email: string;
  phone: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  isOwnProfile?: boolean;
  onMessage?: () => void;
  onShare?: () => void;
  onChangeCover?: () => void;
  onChangeAvatar?: () => void;
  className?: string;
}

export default function ParlorProfileHeader({
  name,
  avatar,
  coverImage,
  description,
  referenceId,
  rating,
  totalServices,
  totalArtists,
  joinedDate,
  location,
  email,
  phone,
  facebookUrl,
  twitterUrl,
  instagramUrl,
  isOwnProfile = false,
  onMessage,
  onShare,
  onChangeCover,
  onChangeAvatar,
  className = "",
}: ParlorProfileHeaderProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Cover Image */}
      <div className="relative h-40 sm:h-48 md:h-56 w-full bg-gradient-to-r from-gray-100 to-gray-50">
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
        {/* Avatar Section */}
        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* Avatar and Social Links */}
          <div className="relative -mt-16 sm:-mt-20 shrink-0">
            <div className="relative inline-block">
              {avatar ? (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-amber-400/30 overflow-hidden bg-amber-50 shadow-lg">
                  <Image
                    src={avatar}
                    alt={name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-amber-400/30 bg-amber-50 shadow-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-500">{name.charAt(0)}</span>
                </div>
              )}
              
              {isOwnProfile && (
                <button
                  onClick={onChangeAvatar}
                  className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition-opacity shadow-sm"
                  aria-label="Change profile photo"
                >
                  <CameraIcon width={16} height={16} className="text-white" />
                </button>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-4 space-y-2.5 hidden sm:block">
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm">Facebook</span>
                </a>
              )}
              {twitterUrl && (
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm">X</span>
                </a>
              )}
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-primary/70 hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)"/>
                    <defs>
                      <linearGradient id="instagram-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FED373"/>
                        <stop offset="0.25" stopColor="#F15245"/>
                        <stop offset="0.5" stopColor="#D92E7F"/>
                        <stop offset="0.75" stopColor="#9B36B7"/>
                        <stop offset="1" stopColor="#515ECF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-sm">Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Name and Info */}
          <div className="flex-1 pt-4 sm:pt-3">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{name}</h1>
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded">
                    <StarIcon width={16} height={16} fill="#FFD700" />
                    <span className="font-semibold text-text-primary">{rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-sm text-text-primary/60">Reference ID: {referenceId}</span>
                  <button className="p-1 hover:text-primary transition-colors" aria-label="Copy reference ID">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary/40">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onMessage}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/10 text-text-primary/60 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Message"
                >
                  <MailIcon width={18} height={18} />
                </button>
                <button
                  onClick={onShare}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/10 text-text-primary/60 hover:border-primary hover:text-primary transition-colors"
                  aria-label="Share"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            {description && (
              <p className="text-sm text-text-primary/60 mt-3 leading-relaxed max-w-xl">
                {description}
              </p>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
              {/* Row 1 */}
              <div className="p-3 rounded-lg border border-black/5 bg-red-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-400">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                  <span className="text-xs text-red-400 font-medium">Total Services</span>
                </div>
                <p className="text-sm font-bold text-text-primary">{totalServices}</p>
              </div>
              
              <div className="p-3 rounded-lg border border-black/5 bg-green-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-xs text-green-500 font-medium">Joined</span>
                </div>
                <p className="text-sm font-bold text-text-primary">{joinedDate}</p>
              </div>
              
              <div className="p-3 rounded-lg border border-black/5 bg-teal-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <LocationIcon width={14} height={14} className="text-teal-400" fill="currentColor" />
                  <span className="text-xs text-teal-500 font-medium">Location</span>
                </div>
                <p className="text-sm font-bold text-text-primary">{location}</p>
              </div>

              {/* Row 2 */}
              <div className="p-3 rounded-lg border border-black/5 bg-yellow-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <MailIcon width={14} height={14} className="text-yellow-500" />
                  <span className="text-xs text-yellow-600 font-medium">Email Address</span>
                </div>
                <p className="text-sm font-semibold text-text-primary truncate">{email}</p>
              </div>
              
              <div className="p-3 rounded-lg border border-black/5 bg-cyan-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs text-cyan-500 font-medium">Mobile Number</span>
                </div>
                <p className="text-sm font-semibold text-text-primary">{phone}</p>
              </div>
              
              <div className="p-3 rounded-lg border border-black/5 bg-purple-50/50">
                <div className="flex items-center gap-1.5 mb-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs text-purple-500 font-medium">Total Artists</span>
                </div>
                <p className="text-sm font-bold text-text-primary">{totalArtists}+</p>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 mt-4 sm:hidden">
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-text-primary/60 hover:text-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {twitterUrl && (
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-text-primary/60 hover:text-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-text-primary/60 hover:text-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient-m)" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient-m)" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient-m)"/>
                    <defs>
                      <linearGradient id="instagram-gradient-m" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FED373"/>
                        <stop offset="0.25" stopColor="#F15245"/>
                        <stop offset="0.5" stopColor="#D92E7F"/>
                        <stop offset="0.75" stopColor="#9B36B7"/>
                        <stop offset="1" stopColor="#515ECF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
