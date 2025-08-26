import React, { useState } from "react";

const faqs = [
  "Is The Ekaant Child-Friendly?",
  "Is There Mobile Network Or Internet?",
  "Can We Spot Tigers Or Wildlife Here?",
  "Is Food Included In The Stay?",
  "Do You Allow Pets?",
  "What Is The Best Time To Visit?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-lg md:text-xl font-bold text-green-900 mb-8">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((q, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800"
            >
              {q}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-sm text-gray-600">
                Answer will go here...
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
