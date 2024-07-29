import React from "react";
import Button from "./Button";

export default function Hero() {

  function handleClick() {
    window.location.href = '#generate';
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="uppercase text-[#ffffff]">Welcome to</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Workout <span className="text-[#946f6f]">Generator</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Create personalized workout plans effortlessly.
        Choose from <span className="text-[#946f6f] font-medium">cardio, strength,</span> and <span className="text-[#946f6f] font-medium">flexibility</span> exercises.
        Track your progress and optimize your routine.
      </p>
      <Button onClick={handleClick}>
      Accept &  Begin
      </Button>
    </div>
  );
}
