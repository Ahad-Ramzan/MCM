'use client'
import React from "react";
import StarRating from "@/ui/StarRating";

const CategoryCard = ({ title, image, price = "10,99€", rating = 4, reviews = 2 }) => {
  const hasValidImage = typeof image === "string" && image.trim() !== "";

  return (
    <div className="w-[160px] h-52 border border-[var(--lightGray4)] overflow-hidden flex flex-col justify-between hover:shadow-md transition">
      {hasValidImage ? (
        <img src={image} alt={title} className="h-full w-full object-cover" />
      ) : (
        <div className="flex-1" />
      )}
      <div className="p-2 text-center bg-white">
        <div className="text-sm font-medium text-[var(--primary)]">{title}</div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <StarRating rating={rating} />
          <span className="text-[10px] text-gray-400">({reviews})</span>
        </div>
        <div className="text-[var(--secondary)] font-bold mt-1">{price}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
