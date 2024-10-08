import React, { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);
  const maxSets =  5;

  const handleSetIncrement = () => {
    setSetsCompleted((prevSets) => Math.min(prevSets + 1, maxSets));
  };

  const handleSetDecrement = () => {
    setSetsCompleted((prevSets) => Math.max(prevSets - 1, 0));
  };

  const backgroundColor =
    setsCompleted === maxSets ? " bg-[#03C03C]" : "bg-neutral-950";

  return (
    <div
      className={`p-4 rounded-md flex flex-col gap-4 bg-neutral-950 sm:flex-wrap lg:-mx-10`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-[#8d7e7c]">
          {i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-[#946f6f]">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#946f6f] text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-neutral-950 rounded gap-2">
        {exercise.description }
      </div>

      {exercise.variants && (
        <div className="flex flex-col p-2 rounded border-[1.5px] border-solid border-[#232222] w-full">
          <h3 className="capitalize text-[#946f6f] text-sm">Variants</h3>
          {Object.entries(exercise.variants).map(([key, value]) => (
            <div key={key} className="text-sm capitalize">
              <strong className="text-[#8d7c7c]">
                {key.replace("_", " ")}:
              </strong>{" "}
              {value}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {exercise.ratio && (
          <div className="flex flex-col p-2 rounded border-[1.5px] border-solid border-[#232222] w-full">
            <h3 className="capitalize text-[#946f6f] text-sm">Ratio</h3>
            <p className="font-medium">{exercise.ratio.join(" : ")}</p>
          </div>
        )}
        {exercise.repRanges && (
          <div className="flex flex-col p-2 rounded border-[1.5px] border-solid border-[#232222] w-full">
            <h3 className="capitalize text-[#946f6f] text-sm">Rep Ranges</h3>
            <p className="font-medium">{exercise.repRanges.join(" - ")}</p>
          </div>
        )}
        {exercise.rest && exercise.rest.length > 0 && (



          <div className="flex flex-col p-2 rounded border-[1.5px] border-solid border-[#232222] w-full">
            <h3 className="capitalize text-[#946f6f] text-sm">Rest</h3>
            <p className="font-medium">{exercise.rest.join(" to ")} sec</p>
          </div>
        )}

        <div className={`flex items-center py-2 px-1 rounded border-[1.5px] border-solid border-[#232222] w-full flex-row ${backgroundColor}`}>
          <button
            onClick={handleSetDecrement}
            className="flex items-center justify-center p-2 rounded border-[1.5px] duration-200 border-solid border-[#dfb6b6] hover:border-[#946f6f] text-lg"
          >
            <span className="text-[#946f6f] font-medium">-</span>
          </button>

          <div className="flex flex-col items-center justify-center flex-1 mx-4  ">
            <h3 className="text-[#946f6f] text-sm capitalize">
              Sets completed
            </h3>
            <p className="font-medium">
              {setsCompleted} / {maxSets}
            </p>
          </div>

          <button
            onClick={handleSetIncrement}
            className="flex items-center justify-center p-2 rounded border-[1.5px] duration-200 border-solid border-[#dfb6b6] hover:border-[#946f6f] text-lg"
          >
            <span className="text-[#946f6f] font-medium">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
