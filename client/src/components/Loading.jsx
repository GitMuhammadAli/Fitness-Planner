import React from "react";

export default function Loading() {
  return (
    <div className="border-[#4f4040] border-2 shadow rounded-md py-4 my-4 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-xl mx-auto  bg-[#4f4040]">      
    <div className="animate-pulse flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 bg-neutral-950 rounded-full"></div>
        <div className="space-y-2 sm:space-y-3 md:space-y-4 py-1">
          <div className="h-2 sm:h-3 md:h-4 bg-neutral-950 rounded w-3/4"></div>
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3">
              <div className="h-2 sm:h-3 md:h-4 bg-neutral-950 rounded col-span-2"></div>
              <div className="h-2 sm:h-3 md:h-4 bg-neutral-950 rounded col-span-1"></div>
            </div>
            <div className="h-2 sm:h-3 md:h-4 bg-neutral-950 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
