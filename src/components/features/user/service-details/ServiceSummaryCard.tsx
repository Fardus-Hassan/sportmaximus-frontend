import React from "react";
import { Star, Zap, Share2, Bookmark } from "lucide-react";

interface AboutService {
  title: string;
  description: string;
}
export interface ServiceSummaryCardProps {
  serviceName: string;
  rating: number;
  duration: string;
  reviewsCount: number;
  bookedCount: number;
  bookedDays: number;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
  about_sections: AboutService[];
  onBookSlot?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
}

export const ServiceSummaryCard: React.FC<ServiceSummaryCardProps> = ({
  serviceName,
  rating,
  duration,
  reviewsCount,
  bookedCount,
  bookedDays,
  currentPrice,
  originalPrice,
  discountPercentage,
  about_sections,
  onBookSlot,
  onShare,
  onBookmark,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{serviceName}</h1>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="text-base font-bold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Duration */}
      <p className="text-sm text-gray-600 mb-4">Duration: {duration}</p>

      {/* Reviews and Booking Stats */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            {reviewsCount} Reviews
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-900">
            {bookedCount} Booked in last {bookedDays} days
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ${currentPrice}
          </span>
          <span className="text-lg text-gray-400 line-through">
            ${originalPrice}
          </span>
          <span className="text-base font-semibold text-rose-500">
            {discountPercentage}% Off
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onShare}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Share">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={onBookmark}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Bookmark">
            <Bookmark className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Book a Slot Button */}
      <button
        onClick={onBookSlot}
        className="w-full bg-primary hover:bg-[#ce2348] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 active:scale-95 transform mb-6 text-base">
        Book a Slot
      </button>

      {/* Section */}
      <div className="space-y-6">
        {about_sections.map((abt, i) => (
          <div key={i} className="bg-[#FFF2F5] py-2 px-4 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {abt.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {abt.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
