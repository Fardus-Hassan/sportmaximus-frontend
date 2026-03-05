"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@/components/Icons";

export interface ReviewFormProps {
  userName: string;
  userEmail: string;
  userAvatar?: string;
  onSubmit: (rating: number, comment: string) => void;
  className?: string;
}

export default function ReviewForm({
  userName,
  userEmail,
  userAvatar,
  onSubmit,
  className = "",
}: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating > 0 && comment.trim()) {
      onSubmit(rating, comment);
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
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

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-0.5 transition-transform hover:scale-110"
            >
              <StarIcon
                width={24}
                height={24}
                fill={(hoverRating || rating) >= star ? "#FFD700" : "#E5E7EB"}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Comment Input */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a review...."
        rows={3}
        className="w-full px-4 py-3 border border-black/10 rounded-lg text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
      />

      {/* Submit Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={handleSubmit}
          disabled={rating === 0 || !comment.trim()}
          className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
}
