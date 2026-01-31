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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md w-full">
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
