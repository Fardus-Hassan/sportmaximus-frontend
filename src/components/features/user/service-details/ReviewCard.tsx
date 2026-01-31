import React from "react";
import { Star, Trash2 } from "lucide-react";
import Image from "next/image";

export interface ReviewCardProps {
  userAvatar: string;
  userName: string;
  userEmail: string;
  rating: number;
  reviewText: string;
  onDelete?: () => void;
  showDeleteButton?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  userAvatar,
  userName,
  userEmail,
  rating,
  reviewText,
  onDelete,
  showDeleteButton = true,
}) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 w-full"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05",
      }}>
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
            <Image
              width={100}
              height={100}
              src={userAvatar}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600">{userEmail}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-gray-900">{rating}/5</span>
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        </div>
      </div>

      {/* Review Text and Delete Button */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-base text-gray-900 leading-relaxed flex-1">
          &quot;{reviewText}&quot;
        </p>

        {showDeleteButton && (
          <button
            onClick={onDelete}
            className="text-primary hover:bg-rose-50 p-2 rounded-lg transition-colors duration-200 shrink-0"
            aria-label="Delete review">
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
