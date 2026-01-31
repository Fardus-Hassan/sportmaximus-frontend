import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export interface SenderReviewCardProps {
  userAvatar: string;
  userName: string;
  userEmail: string;
  onSubmit?: (rating: number, review: string) => void;
}

export const SenderReviewCard: React.FC<SenderReviewCardProps> = ({
  userAvatar,
  userName,
  userEmail,
  onSubmit,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const handleSubmit = () => {
    if (onSubmit && rating > 0) {
      onSubmit(rating, review);
      // Reset form
      setRating(0);
      setReview("");
    }
  };

  return (
    <div
      className="bg-white rounded-2xl p-4 sm:p-6 w-full"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05",
      }}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-6">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-100 shrink-0">
            <Image
              width={100}
              height={100}
              src={userAvatar}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {userName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 truncate">
              {userEmail}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 justify-center sm:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label={`Rate ${star} stars`}>
              <Star
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                  star <= (hoveredRating || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Review Text Area */}
      <div className="mb-4">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review...."
          className="w-full bg-gray-50 border-0 rounded-xl p-3 sm:p-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          rows={4}
        />
      </div>

      {/* Send Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="bg-primary hover:bg-[#ce2348] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 active:scale-95 transform text-sm sm:text-base w-full sm:w-auto">
          Send
        </button>
      </div>
    </div>
  );
};
