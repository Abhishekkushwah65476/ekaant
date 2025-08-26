import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <p className="text-lg font-semibold mb-3">
            WE’D LOVE TO HELP YOU PLAN YOUR PEACEFUL ESCAPE.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">CALL/WHATSAPP:</span> +91 9988776655
          </p>
          <p>
            <span className="font-semibold">EMAIL:</span> ekaant@neave.tech
          </p>
          <p>
            <span className="font-semibold">INSTAGRAM:</span> EKAANT
          </p>
          <p>
            <span className="font-semibold">LOCATION:</span> Near Bor Tiger
            Reserve, Wardha, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
