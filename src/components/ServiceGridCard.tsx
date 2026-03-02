"use client";

import Image from "next/image";
import { BookmarkIcon, MailIcon, UserIcon } from "@/components/Icons";

export interface ServiceGridCardProps {
  id: string;
  serviceName: string;
  serviceImage: string;
  price: string;
  providerName: string;
  description: string;
  isSaved?: boolean;
  onBookNow?: () => void;
  onMessage?: () => void;
  onSave?: () => void;
  className?: string;
}

export default function ServiceGridCard({
  serviceName,
  serviceImage,
  price,
  providerName,
  description,
  isSaved = false,
  onBookNow,
  onMessage,
  onSave,
  className = "",
}: ServiceGridCardProps) {
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
              : "bg-white/90 text-primary/50 hover:text-primary"
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save service"}
        >
          <BookmarkIcon width={16} height={16} />
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBookNow}
            className="flex-1 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
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
