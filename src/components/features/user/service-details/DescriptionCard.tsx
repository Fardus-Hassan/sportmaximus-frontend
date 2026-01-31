import React from "react";
import Image from "next/image";

export interface DescriptionCardProps {
  image: string;
  title?: string;
  description: string;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  image,
  title = "Description",
  description,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden w-full border border-[#D1D1D1]"
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05",
      }}>
      {/* Image Section */}
      <div className="relative w-full aspect-4/3">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
