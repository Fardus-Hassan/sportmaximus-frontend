import React from "react";
import { Star, Mail } from "lucide-react";
import Image from "next/image";

export interface ArtistProfileCardProps {
  coverImage: string;
  logo: string;
  name: string;
  location: string;
  rating: number;
  description: string;
  onViewProfile?: () => void;
  onContact?: () => void;
}

export const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({
  coverImage,
  logo,
  name,
  location,
  rating,
  description,
  onViewProfile,
  onContact,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden w-full"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05",
      }}>
      {/* Cover Image with Logo Overlay */}
      <div className="relative h-40">
        <Image
          width={1000}
          height={1000}
          src={coverImage}
          alt={`${name} cover`}
          className="w-full h-full object-cover"
        />

        {/* Logo Badge */}
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
            <Image
              width={200}
              height={200}
              src={logo}
              alt={`${name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-12 px-6 pb-6">
        {/* Name and Location */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{name}</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{location}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">
                {rating}/5
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onViewProfile}
            className="flex-1 bg-white border border-primary text-primary font-semibold py-2.5 px-6 rounded-lg hover:bg-rose-50 transition-all duration-300 active:scale-95 transform">
            View Profile
          </button>
          <button
            onClick={onContact}
            className="bg-primary hover:bg-[#E91E63] text-white p-3 rounded-lg transition-all duration-300 active:scale-95 transform shrink-0"
            aria-label="Contact">
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
