"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import Image from "next/image";

interface RateUsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (rating: number, comment: string) => void;
}

export default function RateUsDialog({
  open,
  onOpenChange,
  onSubmit,
}: RateUsDialogProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (rating === 0) {
      // Optionally show a toast or alert that rating is required
      return;
    }

    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(rating, comment);
    }

    // Reset form and close dialog
    handleClose();
  };

  const handleClose = () => {
    setRating(0);
    setHoveredRating(0);
    setComment("");
    onOpenChange(false);
  };

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleStarHover = (value: number) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] w-[calc(100%-2rem)] max-w-[525px] p-0 gap-0 overflow-hidden border-0 shadow-2xl rounded-2xl">
        {/* Wave Background Header */}
        <div className="relative w-full h-[120px] sm:h-[135px] overflow-hidden">
          <div>
            <Image
              alt="wave"
              src={"/images/wave.svg"}
              width={1000}
              height={135}
              className="w-full h-full"
              priority
            />
          </div>

          {/* Emoji Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border border-[#F4B400] p-1">
              <Image
                alt="Rating emoji"
                src={"/images/Bitmap.svg"}
                width={110}
                height={110}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-1.5 sm:mb-2 leading-tight">
            Rate this artist.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-600 text-center mb-5 sm:mb-6 px-2">
            We will work harder to make you more satisfied.
          </p>

          {/* Star Rating */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = star <= (hoveredRating || rating);
              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={handleStarLeave}
                  className="transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-full p-1"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}>
                  {isActive ? (
                    <Star
                      className="w-8 h-8 sm:w-10 sm:h-10 fill-[#FFB216] text-[#FFB216] drop-shadow-sm"
                      strokeWidth={0}
                    />
                  ) : (
                    <Star
                      className="w-8 h-8 sm:w-10 sm:h-10 text-[#61758A] opacity-60 hover:opacity-100 transition-opacity"
                      strokeWidth={1.5}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Comment Input */}
          <div className="mb-5 sm:mb-6">
            <label
              htmlFor="comment"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Add a comment:
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback here..."
              rows={3}
              maxLength={500}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg resize-none focus:outline-none bg-gray-50/50 placeholder:text-gray-400 transition-all"
            />
            {comment.length > 0 && (
              <p className="text-xs text-gray-500 mt-1.5 text-right">
                {comment.length}/500
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={rating === 0}
              className="flex-1 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-primary hover:bg-[#ce2348] active:bg-[#b81f3f] rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary shadow-sm hover:shadow-md">
              Submit
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
