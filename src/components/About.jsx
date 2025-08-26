import { MoveRight } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-20 py-22 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Ekaant <span className="font-serif">(एकांत)</span>
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Meaning solitude in Sanskrit — was born from a simple yet powerful
          vision: to create a space where people could escape the chaos of
          everyday life and experience true peace in the lap of nature.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our retreat is designed around the principles of sustainable living,
          mindful travel, and authentic rural experiences. At Ekaant, you’ll
          find no loud music, no distractions — only nature’s rhythm,
          traditional hospitality, and the gentle hum of wildlife.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether you’re a solo traveller, a couple, or a family — Ekaant
          welcomes you with open arms and a calm heart.
        </p>
        <button className="mt-6 bg-green-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-900 transition">
          Explore More 
                  <MoveRight />         
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/images/maskgroup.png"
          alt="About Ekaant"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
