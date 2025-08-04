// src/components/PanduanCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PanduanCard({
  id,
  gambar_url,
  minggu,
  judul,
  deskripsi,
}) {
  return (
    // Tambahkan h-full, flex, dan flex-col agar kartu mengisi tinggi grid
    <Link
      to={`/panduan-mingguan/${id}`}
      className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col"
    >
      <div className="relative">
        <img
          className="h-48 w-full object-cover"
          src={gambar_url}
          alt={judul}
        />
      </div>
      {/* Tambahkan flex, flex-col, dan flex-grow agar area konten ini mengisi sisa ruang */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-pink-500 uppercase">
          {minggu}
        </p>

        {/* Area teks ini akan "tumbuh" untuk mendorong link ke bawah */}
        <div className="flex-grow">
          <h3 className="mt-2 text-xl font-bold text-gray-900">{judul}</h3>
          <p className="mt-3 text-base text-gray-600 line-clamp-2">
            {deskripsi}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
          Lihat Detail &rarr;
        </div>
      </div>
    </Link>
  );
}
