// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// 1. Import komponen dari Framer Motion
// Tambahkan komentar ini untuk mematikan error ESLint pada baris di bawahnya
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  // 2. Dapatkan lokasi halaman saat ini untuk mendeteksi perubahan
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 3. Bungkus konten halaman dengan AnimatePresence dan motion.div */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // Kunci unik berdasarkan path halaman
            initial={{ opacity: 0, y: 20 }} // Kondisi awal: transparan dan sedikit di bawah
            animate={{ opacity: 1, y: 0 }} // Kondisi animasi masuk: muncul dan naik ke posisi
            transition={{ duration: 0.3 }} // Durasi animasi
          >
            <Outlet />{" "}
            {/* Di sinilah konten halaman (Beranda, Kalkulator, dll.) akan muncul */}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
