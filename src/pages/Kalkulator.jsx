// src/pages/Kalkulator.jsx
import React, { useState } from "react";

export default function Kalkulator() {
  // State untuk menyimpan input dari pengguna
  const [hpht, setHpht] = useState(""); // HPHT: Hari Pertama Haid Terakhir
  const [siklus, setSiklus] = useState("28"); // Rata-rata siklus haid

  // State untuk menyimpan hasil perhitungan
  const [hasil, setHasil] = useState(null);

  const hitungHPL = (e) => {
    e.preventDefault(); // Mencegah form dari refresh halaman
    if (!hpht) {
      alert("Silakan masukkan tanggal Hari Pertama Haid Terakhir.");
      return;
    }

    const tanggalHPHT = new Date(hpht);
    const siklusHaid = parseInt(siklus, 10);

    // Perhitungan HPL: Tambah 280 hari (40 minggu) ke HPHT
    // Disesuaikan dengan siklus haid pengguna
    const perkiraanLahir = new Date(tanggalHPHT);
    perkiraanLahir.setDate(perkiraanLahir.getDate() + 280 + (siklusHaid - 28));

    // Perhitungan Usia Kehamilan
    const hariIni = new Date();
    const selisihMilidetik = hariIni.getTime() - tanggalHPHT.getTime();
    const selisihHari = Math.floor(selisihMilidetik / (1000 * 60 * 60 * 24));
    const mingguKehamilan = Math.floor(selisihHari / 7);
    const sisaHari = selisihHari % 7;

    setHasil({
      hpl: perkiraanLahir.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      usia: `${mingguKehamilan} minggu, ${sisaHari} hari`,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Kalkulator Kehamilan
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Hitung Hari Perkiraan Lahir (HPL) dan usia kehamilan Anda.
        </p>
      </div>

      <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={hitungHPL}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="hpht"
                className="block text-sm font-medium text-gray-700"
              >
                Hari Pertama Haid Terakhir (HPHT)
              </label>
              <input
                type="date"
                id="hpht"
                value={hpht}
                onChange={(e) => setHpht(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="siklus"
                className="block text-sm font-medium text-gray-700"
              >
                Rata-rata Siklus Haid Anda (hari)
              </label>
              <input
                type="number"
                id="siklus"
                value={siklus}
                onChange={(e) => setSiklus(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                min="20"
                max="45"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
              >
                Hitung Sekarang
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Area untuk menampilkan hasil */}
      {hasil && (
        <div className="mt-10 max-w-lg mx-auto bg-pink-100 p-8 rounded-xl shadow-lg text-center border-2 border-pink-200">
          <h2 className="text-2xl font-bold text-pink-800">
            Hasil Perhitungan
          </h2>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-sm text-pink-700">
                Perkiraan Hari Lahir (HPL):
              </p>
              <p className="text-xl font-bold text-pink-900">{hasil.hpl}</p>
            </div>
            <div>
              <p className="text-sm text-pink-700">
                Perkiraan Usia Kehamilan Saat Ini:
              </p>
              <p className="text-xl font-bold text-pink-900">{hasil.usia}</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-600">
            Perhitungan ini adalah perkiraan. Selalu konsultasikan dengan dokter
            atau bidan Anda untuk tanggal yang lebih akurat.
          </p>
        </div>
      )}
    </div>
  );
}
