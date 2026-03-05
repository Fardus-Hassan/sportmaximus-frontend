"use client";

import Image from "next/image";
import { StarIcon, BookmarkIcon, LocationIcon } from "@/components/Icons";

export interface ArtistCardProps {
  id: string;
  name: string;
  avatar?: string;
  specialization: string;
  parlorName: string;
  rating: number;
  isSaved?: boolean;
  onBookNow?: () => void;
  onSave?: () => void;
  className?: string;
}

export default function ArtistCard({
  name,
  avatar,
  specialization,
  parlorName,
  rating,
  isSaved = false,
  onBookNow,
  onSave,
  className = "",
}: ArtistCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Image */}
      <div className="relative aspect-[4/5] w-full bg-black/5">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <span className="text-4xl font-bold text-primary">{name.charAt(0)}</span>
          </div>
        )}
        
        {/* Save Button */}
        <button
          onClick={onSave}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
            isSaved 
              ? "bg-primary text-white" 
              : "bg-white/90 text-text-primary/50 hover:text-primary"
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save artist"}
        >
          <BookmarkIcon width={16} height={16} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-bold text-text-primary line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <StarIcon width={14} height={14} fill="#FFD700" />
            <span className="text-sm font-medium text-text-primary">{rating}</span>
          </div>
        </div>

        {/* Specialization */}
        <p className="text-sm text-text-primary/60 mb-1">{specialization}</p>

        {/* Parlor */}
        <div className="flex items-center gap-1.5 mb-4">
          <LocationIcon width={14} height={14} fill="#9CA3AF" />
          <span className="text-sm text-text-primary/60 line-clamp-1">{parlorName}</span>
        </div>

        {/* Book Now Button */}
        <button
          onClick={onBookNow}
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
