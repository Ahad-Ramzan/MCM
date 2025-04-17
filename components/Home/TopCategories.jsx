// components/TopCategories.jsx
"use client";
import React from "react";
import CategoryCard from "@/ui/TopCategoryCard";

const categories = [
  {
    title: "Madeiras",
    price: "10,99€",
    rating: 4,
    reviews: 2
  },
  {
    title: "Construção",
    price: "15,99€",
    rating: 5,
    reviews: 3
  },
  {
    title: "Ferragens",
    price: "8,99€",
    rating: 4,
    reviews: 1
  },
  {
    title: "Ferramentas",
    price: "12,99€",
    rating: 3,
    reviews: 4
  },
  {
    title: "Pavimentos",
    price: "21,99€",
    rating: 5,
    reviews: 2
  },
  {
    title: "Revestimentos",
    price: "18,99€",
    rating: 4,
    reviews: 3
  },
  {
    title: "Acrílicos",
    price: "9,99€",
    rating: 4,
    reviews: 2
  },
  {
    title: "Cimentos",
    price: "11,99€",
    rating: 5,
    reviews: 4
  }
];

const TopCategories = () => {
  return (
    <div className="Container my-10 ">
      <h2 className="text-lg font-semibold mb-4">Top Categorias</h2>
      <div className="flex gap-4 flex-wrap">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
