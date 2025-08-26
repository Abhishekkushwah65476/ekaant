import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/background2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen text-center px-4 py-6 sm:py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          WELCOME TO EKAANT—AGRO TOURISM RETREAT NEAR BOR TIGER RESERVE, MAHARASHTRA
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 italic">
          Where Silence Heals, And Nature Whispers...
        </p>
      </div>
    </div>
  );
}