import React from "react";

const CategoryButtons = ({ categories, onCategorySelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {categories.map((cat, index) => (
        <button
          className="bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg text-sm sm:text-base text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 transition-colors duration-300 active:scale-90"
          key={index}
          onClick={() => onCategorySelect(cat.category)}
        >
          <p className="capitalize">{cat.category.replaceAll("_", " ")}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
