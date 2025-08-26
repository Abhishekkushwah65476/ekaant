import { MoveRight } from "lucide-react";
import React from "react";

const offerings = [
  {
    title: "Boutique Farm Stay",
    img: "/images/image1.png",
  },
  {
    title: "Agro-Tourism Activities",
    img: "/images/image2.png",
  },
  {
    title: "Forest & Wildlife Encounters",
    img: "/images/image3.png",
  },
  {
    title: "Stargazing Nights",
    img: "/images/image4.png",
  },
  {
    title: "Bonfire Evenings",
    img: "/images/image5.png",
  },
  {
    title: "Digital Detox & Wellness",
    img: "/images/image6.png",
  },
];

export default function Offerings() {
  return (
    <section className="max-w-7xl mx-auto px-20 py-22 text-center">
      {/* Section Heading */}
      <h2 className="text-lg font-semibold text-green-800 relative inline-flex items-center justify-center py-5">
  <span className="px-8  py-2 border-2 border-green-800 rounded-full flex items-center justify-center">
    WHAT WE OFFER
  </span>
  <span className="absolute left-[-55px] w-1/4 h-px bg-green-800 transform -translate-x-full"></span>
  <span className="absolute right-[-55px] w-1/4 h-px bg-green-800 transform translate-x-full"></span>
</h2>

      {/* Grid */}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl shadow-md w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <p className="font-medium text-gray-800 text-sm sm:text-base">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 bg-green-800 text-white px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-900 transition mx-auto text-sm sm:text-base">
        Book Now
        <MoveRight />
      </button>
    </section>
  );
}
