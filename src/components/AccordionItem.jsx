// src/components/AccordionItem.jsx
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import ikon

export default function AccordionItem({ pertanyaan, jawaban }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
      >
        <span>{pertanyaan}</span>
        <span>
          {isOpen ? (
            <FaMinus className="text-pink-500" />
          ) : (
            <FaPlus className="text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-base text-gray-700 leading-relaxed">
          {jawaban}
        </div>
      )}
    </div>
  );
}
