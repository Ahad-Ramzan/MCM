"use client";
import React from "react";
import Image from "next/image";
import StarRating from "@/ui/StarRating";

const ProductCardStar = ({
  image = "/globe.svg",
  brand = "Marca Produto",
  title = "Placas de Gesso",
  price = "10.99€", // Use dot (.) for parsing
  rating = 4,
  sold = 10,
  discount, // e.g., 20 means 20% off
}) => {
  const numericPrice = parseFloat(price.replace("€", "").replace(",", "."));
  const discountedPrice = discount
    ? (numericPrice * (1 - discount / 100)).toFixed(2).replace(".", ",") + "€"
    : price;

  const originalPriceFormatted =
    numericPrice.toFixed(2).replace(".", ",") + "€";

  const MovePage = () => {
    window.location.href = "/product"; // Redirect to the product page
  };

  return (
    <div
      className="border-[var(--lightGray4)] w-[160px] sm:w-[180px] flex flex-col gap-2 relative cursor-pointer"
      onClick={MovePage}
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full bg-gray-100 rounded mb-2 overflow-hidden">
        {/* Image */}
        {/* <Image src={image} alt={title} fill className="object-cover rounded" /> */}

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-1 right-1 bg-[var(--secondary)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </div>
        )}
      </div>

      {/* Brand */}
      <p className="text-[10px] text-[var(--darkGray4)] uppercase border-b border-[var(--lightGray4)] pb-1 mb-1">
        {/* {brand} */}Marca Produto
      </p>

      {/* Title */}
      <h3 className="text-[13px] font-semibold text-[var(--primary)] leading-snug">
        {/* {title} */}Placas de Gesso
      </h3>

      {/* Rating and count */}
      <div className="flex items-center gap-1 mt-[2px]">
        <StarRating rating={rating} />
        <span className="text-[10px] text-gray-400">{sold}</span>
      </div>

      {/* Price */}
      <div className="mt-[2px] font-semibold text-[13px] text-gray-900 flex gap-1 items-center">
        {discount ? (
          <>
            <span className="text-red-600">{discountedPrice}</span>
            <span className="line-through text-gray-400 text-[12px]">
              {originalPriceFormatted}
            </span>
          </>
        ) : (
          <>{price}</>
        )}
      </div>
    </div>
  );
};

export default ProductCardStar;
