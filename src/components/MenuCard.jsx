// src/components/MenuCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MenuCard({ icon, judul, deskripsi, linkTo }) {
  return (
    <Link to={linkTo} className="group block" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-500 group-hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="transition-transform duration-500 group-hover:-translate-y-2"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center justify-center h-16 w-16 mx-auto bg-pink-100 rounded-full mb-4 text-pink-500 text-4xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{judul}</h3>
          <p className="mt-2 text-sm text-gray-600">{deskripsi}</p>
        </div>
      </div>
    </Link>
  );
}
