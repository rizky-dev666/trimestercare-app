// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import PanduanMingguan from "./pages/PanduanMingguan";
import DetailPanduan from "./pages/DetailPanduan";
import Kalkulator from "./pages/Kalkulator";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import TanyaJawab from "./pages/TanyaJawab";
import ScrollToTop from "./components/ScrollToTop";

// 1. Import halaman baru Anda di sini
import TentangKami from "./pages/TentangKami";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="panduan-mingguan" element={<PanduanMingguan />} />
          <Route path="panduan-mingguan/:id" element={<DetailPanduan />} />
          <Route path="kalkulator" element={<Kalkulator />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/:slug" element={<DetailArtikel />} />
          <Route path="tanya-jawab" element={<TanyaJawab />} />

          {/* 2. Tambahkan rute baru di sini */}
          <Route path="tentang-kami" element={<TentangKami />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
