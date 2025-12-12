import React from "react";

export type PropertyCardProps = {
  title: string;
  price: number;
  image: string;
  size?: "small" | "large";
};

const sizeClasses: Record<"small" | "large", string> = {
  small: "w-48",
  large: "w-80",
};

// Unified image height for all cards
const imageHeightClasses: Record<"small" | "large", string> = {
  small: "h-32",
  large: "h-48",
};

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  image,
  size = "small",
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg p-4 border bg-black ${sizeClasses[size]}`}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full ${imageHeightClasses[size]} object-cover object-center`}
        />
      </div>

      {/* Improved text visibility */}
      <h3 className="font-bold text-lg !text-black mt-3">{title}</h3>

      <p className="text-gray-300 text-sm mb-3">${price}</p>

      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View More
      </button>
    </div>
  );
};

export default PropertyCard;
