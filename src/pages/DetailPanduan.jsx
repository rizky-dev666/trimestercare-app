// src/pages/DetailPanduan.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataMingguan } from "../data/data_kehamilan";

export default function DetailPanduan() {
  const { id } = useParams(); // Mengambil 'id' dari URL, contoh: '/panduan-mingguan/8' -> id = '8'
  const data = dataMingguan.find((item) => item.id === parseInt(id));

  // Jika data dengan ID tersebut tidak ditemukan
  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Oops! Halaman tidak ditemukan.</h1>
        <p className="mt-4">Data untuk minggu ke-{id} tidak tersedia.</p>
        <Link
          to="/panduan-mingguan"
          className="mt-6 inline-block bg-pink-500 text-white font-bold px-6 py-3 rounded-full hover:bg-pink-600"
        >
          Kembali ke Daftar Panduan
        </Link>
      </div>
    );
  }

  // Jika data ditemukan, tampilkan detailnya
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          className="h-64 w-full object-cover"
          src={data.gambar_url}
          alt={data.judul}
        />
        <div className="p-8">
          <p className="text-sm font-semibold text-pink-500 uppercase">
            {data.minggu}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {data.judul}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ukuran janin saat ini diperkirakan seukuran **{data.ukuran_janin}**.
          </p>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800">
              👶 Perkembangan Janin
            </h2>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              {data.detail.perkembangan_janin}
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800">
              🤰 Perubahan pada Ibu
            </h2>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              {data.detail.perubahan_ibu}
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800">
              💡 Tips Minggu Ini
            </h2>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              {data.detail.tips}
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/panduan-mingguan"
              className="text-pink-600 hover:text-pink-800 font-semibold"
            >
              &larr; Kembali ke Daftar Panduan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
