// src/pages/TentangKami.jsx
import React from "react";

// 1. Import logo universitas Anda
import logoUmtas from "../assets/images/logo-umtas.png"; // Pastikan nama file logo benar

export default function TentangKami() {
  // 2. Data anggota kelompok dalam sebuah array
  const teamMembers = [
    {
      name: "Rahma Azkia Nuralifah",
      role: "Anggota",
    },
    {
      name: "Nazwa Azzahra Putri H",
      role: "Anggota",
    },
    {
      name: "Silva Sri Mulyani",
      role: "Anggota",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={logoUmtas}
            alt="Logo Universitas Muhammadiyah Tasikmalaya"
            className="h-32 w-32 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tim Kami
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Aplikasi ini dikembangkan dengan penuh dedikasi oleh Kelompok 3 dari
            Program Studi S1 Kebidanan, Universitas Muhammadiyah Tasikmalaya.
          </p>
        </div>

        {/* 3. Grid untuk menampilkan kartu anggota */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person) => (
            <div
              key={person.name}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </div>
              <div className="text-base leading-6 text-pink-600">
                {person.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
