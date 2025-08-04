// src/pages/PanduanMingguan.jsx
import React from "react";
import { dataMingguan } from "../data/data_kehamilan";
import PanduanCard from "../components/PanduanCard"; // <-- Import komponen baru

export default function PanduanMingguan() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Panduan Kehamilan per Minggu
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Pilih minggu kehamilan untuk melihat perkembangan janin dan perubahan
          pada tubuh Anda.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {dataMingguan.map((item) => (
          // Gunakan komponen PanduanCard di sini
          <PanduanCard
            key={item.id}
            id={item.id}
            gambar_url={item.gambar_url}
            minggu={item.minggu}
            judul={item.judul}
            deskripsi={item.deskripsi}
          />
        ))}
      </div>
    </div>
  );
}
