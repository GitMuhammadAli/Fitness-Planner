import React from "react";

const CategoryButtons = ({ categories, onCategorySelect, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {categories.map((cat, index) => (
        <button
          className={`border-[#946f6f] border border-solid py-4 rounded-lg text-sm sm:text-base transition-all duration-150 ease-in-out focus:outline-none ${
            selectedCategory === cat.category
              ? "bg-[#946f6f] text-neutral-950"
              : "bg-neutral-950 text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 active:bg-[#7a5c5c] active:text-white"
          }`}
          key={index}
          onClick={() => {
            onCategorySelect(cat.category);
            setSelectedCategory(cat.category); 
          }}
        >
          <p className="capitalize">{cat.category.replaceAll("_", " ")}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
