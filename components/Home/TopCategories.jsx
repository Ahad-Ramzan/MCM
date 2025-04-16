// components/TopCategories.jsx
"use client";
import React from "react";
import CategoryCard from "@/ui/TopCategoryCard";

const categories = [
  "Madeiras",
  "Construção",
  "Ferragens",
  "Ferramentas",
  "Pavimentos",
  "Revestimentos",
  "Acrílicos",
  "Cimentos",
];

const TopCategories = () => {
  return (
    <div className="Container my-10 ">
      <h2 className="text-lg font-semibold mb-4">Top Categorias</h2>
      <div className="flex  gap-4 flex-wrap">
        {categories.map((title, index) => (
          <CategoryCard key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
