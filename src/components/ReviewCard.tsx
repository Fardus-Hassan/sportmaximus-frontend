"use client";

import Image from "next/image";
import { StarIcon } from "@/components/Icons";

export interface ReviewCardProps {
  id: string;
  userName: string;
  userEmail: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  canDelete?: boolean;
  onDelete?: () => void;
  className?: string;
}

export default function ReviewCard({
  userName,
  userEmail,
  userAvatar,
  rating,
  comment,
  canDelete = false,
  onDelete,
  className = "",
}: ReviewCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {userAvatar ? (
            <Image
              src={userAvatar}
              alt={userName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-lg font-semibold text-text-primary/60">{userName.charAt(0)}</span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-text-primary">{userName}</h4>
            <p className="text-sm text-primary">{userEmail}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-text-primary">{rating}/5</span>
          <StarIcon width={16} height={16} fill="#FFD700" />
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-text-primary/70 mt-4 leading-relaxed">
        "{comment}"
      </p>

      {/* Delete Button */}
      {canDelete && (
        <div className="flex justify-end mt-3">
          <button
            onClick={onDelete}
            className="text-primary/60 hover:text-primary transition-colors"
            aria-label="Delete review"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
