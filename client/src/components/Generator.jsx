import React from "react";
import SectionWrapper from "./SectionWrapper";
import useFetchCategories from "../hooks/useFetchCategories";
import Header from "./Header";

export default function Generator() {
  const { categories, error } = useFetchCategories();

  if (error) return <p>Error fetching categories: {error}</p>;

  return (
    <SectionWrapper
      header={"Produce Your WorkOut"}
      title={["It's", "Huge ", "o'clock "]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
        {categories.map((cat, index) => (
          <button
            className=" bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg  text-sm sm:text-base text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 transition-colors duration-300"
            key={index}
          >
            <p className="capitalize ">{cat.category.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>

      <Header
        index={"02"}
        title={"Lock in your routine"}
        description={"Select the Muscle group you wish to train."}
      />
      <div className="bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg flex justify-center items-center p-4">
        <div className="relative flex items-center justify-between w-full">
          <p className="flex justify-center items-center w-full">
            Select the Musle Group
          </p>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>
      </div>
    </SectionWrapper>
  );
}
