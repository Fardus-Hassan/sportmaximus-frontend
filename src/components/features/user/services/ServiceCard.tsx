import React from "react";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export interface ServiceCardProps {
  image: string;
  title: string;
  price: number;
  location: string;
  description: string;
  onBookNow?: () => void;
  onContact?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  price,
  location,
  description,
  onBookNow,
  onContact,
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-50 aspect-square overflow-hidden bg-linear-to-br from-gray-100 to-gray-50">
        <Image
          width={10000}
          height={10000}
          src={image}
          alt={title}
          className="w-full h-50 object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Title and Price Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap shrink-0">
            ${price}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-600">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="text-xs font-medium">{location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed flex-1">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1 mt-auto">
          <button
            onClick={onBookNow}
            className="flex-1 bg-primary hover:bg-[#ce2348] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 transform text-sm">
            Book Now
          </button>
          <button
            onClick={onContact}
            className="bg-rose-50 hover:bg-rose-100 text-primary p-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 transform shrink-0"
            aria-label="Contact">
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
