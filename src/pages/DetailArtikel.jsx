// src/pages/DetailArtikel.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataArtikel } from "../data/data_artikel";

export default function DetailArtikel() {
  const { slug } = useParams(); // Mengambil 'slug' dari URL
  const artikel = dataArtikel.find((item) => item.slug === slug);

  if (!artikel) {
    // Tampilan jika artikel tidak ditemukan
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Oops! Artikel tidak ditemukan.</h1>
        <Link
          to="/artikel"
          className="mt-6 inline-block bg-pink-500 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-600"
        >
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  // Memecah konten menjadi paragraf
  const paragrafKonten = artikel.konten.split("\n\n");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          className="h-auto w-full max-h-96 object-cover"
          src={artikel.gambar_url}
          alt={artikel.judul}
        />
        <div className="p-8 md:p-10">
          <p className="text-base font-semibold text-pink-500 uppercase">
            {artikel.kategori}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            {artikel.judul}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Oleh {artikel.penulis} &bull; {artikel.tanggal}
          </p>

          <div className="mt-8 prose prose-lg max-w-none prose-pink">
            {paragrafKonten.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t text-center">
            <Link
              to="/artikel"
              className="text-pink-600 hover:text-pink-800 font-semibold"
            >
              &larr; Kembali ke Semua Artikel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
