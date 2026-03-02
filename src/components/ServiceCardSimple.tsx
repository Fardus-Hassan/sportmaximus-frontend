"use client";

import Image from "next/image";
import { BookmarkIcon, UserIcon } from "@/components/Icons";

export interface ServiceCardSimpleProps {
  id: string;
  serviceName: string;
  serviceImage: string;
  price: string;
  providerName: string;
  description: string;
  isSaved?: boolean;
  onBookNow?: () => void;
  onSave?: () => void;
  className?: string;
}

export default function ServiceCardSimple({
  serviceName,
  serviceImage,
  price,
  providerName,
  description,
  isSaved = false,
  onBookNow,
  onSave,
  className = "",
}: ServiceCardSimpleProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Image */}
      <div className="relative aspect-[4/3] w-full bg-black/5">
        <Image
          src={serviceImage}
          alt={serviceName}
          fill
          className="object-cover"
          unoptimized
        />
        
        {/* Save Button */}
        <button
          onClick={onSave}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
            isSaved 
              ? "bg-primary text-white" 
              : "bg-white/90 text-text-primary/50 hover:text-primary"
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save service"}
        >
          <BookmarkIcon width={16} height={16} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-text-primary line-clamp-1">{serviceName}</h3>
          <span className="text-primary font-bold text-base whitespace-nowrap">{price}</span>
        </div>

        {/* Provider */}
        <div className="flex items-center gap-1.5 mb-2">
          <UserIcon width={14} height={14} fill="#9CA3AF" />
          <span className="text-sm text-text-primary/60 line-clamp-1">{providerName}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-primary/60 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

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
