// src/pages/Artikel.jsx
import React from "react";
import { dataArtikel } from "../data/data_artikel";
import ArticleCard from "../components/ArticleCard"; // <-- Import komponen baru

export default function Artikel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Artikel Terbaru
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Baca wawasan dan tips terbaru seputar dunia kehamilan dari tim kami.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {dataArtikel.map((artikel) => (
          // Gunakan komponen ArticleCard di sini
          <ArticleCard
            key={artikel.id}
            slug={artikel.slug}
            gambar_url={artikel.gambar_url}
            kategori={artikel.kategori}
            judul={artikel.judul}
            ringkasan={artikel.ringkasan}
          />
        ))}
      </div>
    </div>
  );
}
