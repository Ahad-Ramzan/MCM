"use client";
import React from "react";
import Image from "next/image";

// Sample logos – replace with your actual logo paths
const brandLogos = [
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
  "/images/Brands.jpg",
];

const BrandsLogoBar = () => {
  return (
    <div className="hidden xl:block bg-white py-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap gap-4 px-4">
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[100px] h-[60px] flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsLogoBar;
