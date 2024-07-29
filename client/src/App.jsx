import React from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-[#474449] to-[#2D232E] text-white text-sm sm:text-base">
      <Hero />
      <Workout />
    </main>
  );
}

export default App;
