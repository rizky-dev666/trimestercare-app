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
import ScrollToTop from "./components/ScrollToTop"; // <-- Komponen ini kita pertahankan

// Komponen AppLogic yang bermasalah sudah dihapus

function App() {
  return (
    <BrowserRouter>
      {/* Fitur ini berfungsi dengan baik dan tidak mengganggu navigasi */}
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
