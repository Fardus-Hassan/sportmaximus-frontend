"use client";

import Image from "next/image";
import { StarIcon, MailIcon } from "@/components/Icons";

export interface ProviderCardProps {
  name: string;
  avatar?: string;
  coverImage?: string;
  location: string;
  rating: number;
  description: string;
  onViewProfile?: () => void;
  onMessage?: () => void;
  className?: string;
}

export default function ProviderCard({
  name,
  avatar,
  coverImage,
  location,
  rating,
  description,
  onViewProfile,
  onMessage,
  className = "",
}: ProviderCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Cover Image */}
      <div className="relative h-20 w-full bg-gradient-to-r from-gray-100 to-gray-50">
        {coverImage && (
          <Image
            src={coverImage}
            alt="Cover"
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      {/* Content */}
      <div className="relative px-4 pb-4">
        {/* Avatar */}
        <div className="relative -mt-10 mb-3 flex justify-center">
          <div className="relative">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Name and Location */}
        <div className="text-center mb-3">
          <h3 className="text-base font-bold text-text-primary">{name}</h3>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-sm text-text-primary/60">{location}</span>
            <div className="flex items-center gap-1">
              <StarIcon width={14} height={14} fill="#FFD700" />
              <span className="text-sm font-medium text-text-primary">{rating}/5</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-primary/60 text-center leading-relaxed mb-4">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onViewProfile}
            className="flex-1 py-2.5 border border-black/10 text-text-primary rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
          >
            View Profile
          </button>
          <button
            onClick={onMessage}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
            aria-label="Message"
          >
            <MailIcon width={18} height={18} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
