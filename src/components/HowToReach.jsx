import React from "react";

export default function HowToReach() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-[#D9D9D9]">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">
        HOW TO REACH EKAANT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image/Icon */}
        <div className="flex justify-center">
          <img
            src="/images/Traced Image.png"
            alt="Map Location"
            className="w-full h-auto"
          />
        </div>

        {/* Right Info */}
        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="font-semibold text-lg">By Road</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>80 Km From Nagpur</li>
              <li>40 Km From Wardha</li>
              <li>Well Connected Via NH-361 And Local Village Roads</li>
              <li>Ample Parking Available At The Property</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">By Train</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Nearest Railway Station: Seloo (10 Km), Wardha Junction (40 Km)</li>
              <li>Taxis And Local Autos Available From Stations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">By Air</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Nearest Airport: Nagpur Dr. Babasaheb Ambedkar International Airport (Approx. 90 Km)</li>
              <li>Car Rentals Or Private Taxis Available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
