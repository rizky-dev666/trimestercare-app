// src/data/data_artikel.js

// 1. Import gambar-gambar lokal Anda
import imgAsamFolat from '../assets/images/artikel-asam-folat.png';
import imgTandaBahaya from '../assets/images/artikel-tanda-bahaya.png';
import imgPersiapanMental from '../assets/images/artikel-persiapan-mental.png';

export const dataArtikel = [
  {
    id: 1,
    slug: "pentingnya-asam-folat-sebelum-dan-selama-kehamilan",
    judul: "Pentingnya Asam Folat Sebelum dan Selama Kehamilan",
    kategori: "Nutrisi",
    penulis: "Tim TrimesterCare",
    tanggal: "1 Agustus 2025",
    gambar_url: imgAsamFolat,
    ringkasan: "Asam folat adalah pahlawan tanpa tanda jasa dalam kehamilan. Mengapa nutrisi ini sangat krusial bahkan sebelum Anda hamil? Mari kita bahas.",
    konten: "Asam folat, atau vitamin B9, memainkan peran vital dalam pembentukan tabung saraf bayi, yang nantinya akan berkembang menjadi otak dan sumsum tulang belakang..."
  },
  {
    id: 2,
    slug: "mengenali-tanda-bahaya-pada-trimester-ketiga",
    judul: "Mengenali Tanda Bahaya pada Trimester Ketiga",
    kategori: "Kesehatan",
    penulis: "Tim TrimesterCare",
    tanggal: "3 Agustus 2025",
    gambar_url: imgTandaBahaya,
    ringkasan: "Trimester ketiga adalah masa penantian, tetapi juga penting untuk tetap waspada. Kenali tanda-tanda yang memerlukan perhatian medis segera.",
    konten: "Meskipun beberapa ketidaknyamanan adalah normal, ada beberapa gejala di trimester ketiga yang tidak boleh diabaikan..."
  },
  {
    id: 3,
    slug: "persiapan-mental-menjelang-persalinan",
    judul: "5 Tips Persiapan Mental Menjelang Persalinan",
    kategori: "Persiapan",
    penulis: "Tim TrimesterCare",
    tanggal: "4 Agustus 2025",
    gambar_url: imgPersiapanMental,
    ringkasan: "Selain persiapan fisik, kekuatan mental adalah kunci untuk menghadapi persalinan dengan lebih tenang dan percaya diri. Berikut adalah beberapa tipsnya.",
    konten: "Persalinan adalah maraton, bukan sprint. Mempersiapkan mental sama pentingnya dengan mempersiapkan tas rumah sakit..."
  }
];