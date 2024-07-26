import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="uppercase">It's time to get</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Well-<span className="text-[#946f6f]">build</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Achieving your fitness goals requires consistent effort in both diet and
        exercise. Make informed choices about nutrition and vary your workouts
        with <span className="text-[#946f6f] font-medium">cardio, strength training, and flexibility</span>
        exercises. Monitor your <span className="text-[#946f6f] font-medium">progress, prioritize rest and hydration</span>, and consider professional guidance to optimize your routine. Start today
        to enhance your fitness journey!
      </p>

      <Button>
        Accept & Begin
      </Button>
    </div>
  );
}
