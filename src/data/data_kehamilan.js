// src/data/data_kehamilan.js

import imgMinggu8 from "../assets/images/minggu-8.png";
import imgMinggu12 from "../assets/images/minggu-12.png";
import imgMinggu16 from "../assets/images/minggu-16.png";
import imgMinggu20 from "../assets/images/minggu-20.png";
import imgMinggu24 from "../assets/images/minggu-24.png";
import imgMinggu28 from "../assets/images/minggu-28.png";

export const dataMingguan = [
  {
    id: 8,
    minggu: "Minggu ke-8",
    judul: "Jari-jari Mungil Terbentuk",
    deskripsi:
      "Lengan dan kaki bayi mulai memanjang, dan jari-jari kecilnya mulai terbentuk.",
    ukuran_janin: "Seukuran buah raspberry",
    gambar_url: imgMinggu8,
    detail: {
      perkembangan_janin:
        "Pada minggu ini, lengan dan kaki bayi mulai memanjang. Jari-jari tangan dan kaki yang mungil mulai terbentuk, meskipun masih berselaput. Kelopak mata juga mulai menutupi mata. Ekor embrio yang sebelumnya ada kini telah menghilang.",
      perubahan_ibu:
        "Anda mungkin merasa lebih lelah dari biasanya dan mual di pagi hari (morning sickness) masih terasa intens. Payudara Anda juga mungkin terasa lebih penuh dan sensitif. Indra penciuman Anda bisa menjadi sangat tajam.",
      tips: "Makan dalam porsi kecil tapi sering dapat membantu mengurangi mual. Pastikan untuk tetap terhidrasi dengan baik dan istirahat yang cukup. Hindari bau-bauan yang memicu mual.",
    },
  },
  {
    id: 12,
    minggu: "Minggu ke-12",
    judul: "Akhir Trimester Pertama",
    deskripsi:
      "Risiko keguguran menurun drastis. Kuku-kuku mungil mulai terbentuk, dan organ-organ vital bayi telah berkembang.",
    ukuran_janin: "Seukuran buah jeruk nipis",
    gambar_url: imgMinggu12,
    detail: {
      perkembangan_janin:
        "Kabar baik! Risiko keguguran menurun drastis pada akhir minggu ini. Kuku-kuku mungil mulai terbentuk dan wajah bayi semakin terlihat seperti manusia. Janin sudah bisa melakukan gerakan refleks, seperti mengernyit atau membuka mulut.",
      perubahan_ibu:
        "Perut Anda mungkin mulai sedikit terlihat. Bagi banyak wanita, mual mulai berkurang dan energi kembali pulih. Anda mungkin juga mengalami sakit kepala sesekali karena perubahan hormon.",
      tips: "Ini adalah waktu yang baik untuk mulai memikirkan senam hamil ringan. Jangan lupa ceritakan kabar gembira ini kepada keluarga dan teman dekat jika Anda sudah siap!",
    },
  },
  // --- Item Baru Ditambahkan ---
  {
    id: 16,
    minggu: "Minggu ke-16",
    judul: "Mulai Mendengar Suara",
    deskripsi:
      "Sistem saraf sudah cukup berkembang sehingga bayi bisa mendengar suara dari luar.",
    ukuran_janin: "Seukuran buah alpukat",
    gambar_url: imgMinggu16,
    detail: {
      perkembangan_janin:
        "Tulang-tulang di telinga dan ujung saraf dari otak telah cukup berkembang sehingga bayi dapat mendengar suara Anda, musik, dan suara lainnya dari luar rahim. Otot-otot wajahnya juga sudah bisa membuat berbagai ekspresi.",
      perubahan_ibu:
        "Anda mungkin merasakan peningkatan energi yang signifikan. Kulit Anda mungkin terlihat lebih cerah (pregnancy glow). Beberapa ibu mulai merasakan gerakan janin pertama yang sangat halus (flutters).",
      tips: "Ajak bayi berbicara atau putarkan musik yang menenangkan. Ini adalah cara yang bagus untuk mulai membangun ikatan. Pastikan untuk menjaga asupan kalsium untuk mendukung perkembangan tulang bayi.",
    },
  },
  {
    id: 20,
    minggu: "Minggu ke-20",
    judul: "Setengah Perjalanan!",
    deskripsi:
      "Anda mungkin bisa merasakan gerakan pertamanya! Ini disebut 'quickening'.",
    ukuran_janin: "Seukuran buah pisang",
    gambar_url: imgMinggu20,
    detail: {
      perkembangan_janin:
        "Ini adalah titik tengah kehamilan Anda. Bayi sudah bisa menelan dan sistem pencernaannya mulai memproduksi mekonium (kotoran pertama bayi). Gerakannya menjadi lebih terkoordinasi dan Anda mungkin bisa merasakannya dengan jelas.",
      perubahan_ibu:
        "Perut Anda sudah jelas terlihat. Anda mungkin mengalami beberapa keluhan baru seperti sakit punggung atau kram kaki. Nafsu makan Anda kemungkinan besar meningkat. Pusar Anda mungkin mulai mendatar atau menonjol keluar.",
      tips: "USG pertengahan kehamilan (anomali scan) biasanya dilakukan sekitar minggu ini. Anda mungkin bisa mengetahui jenis kelamin bayi jika Anda mau! Mulailah mencari informasi tentang kelas persalinan.",
    },
  },
  {
    id: 24,
    minggu: "Minggu ke-24",
    judul: "Wajahnya Sudah Lengkap",
    deskripsi:
      "Alis, bulu mata, dan rambut di kepalanya sudah mulai tumbuh dan memiliki warna.",
    ukuran_janin: "Seukuran jagung",
    gambar_url: imgMinggu24,
    detail: {
      perkembangan_janin:
        "Wajah bayi Anda telah terbentuk sepenuhnya, lengkap dengan alis dan bulu mata. Paru-parunya sedang mengembangkan surfaktan, zat yang akan membantunya bernapas setelah lahir. Kulitnya masih tipis dan transparan.",
      perubahan_ibu:
        "Rahim Anda sekarang berada di atas pusar. Anda mungkin mulai mengalami kontraksi palsu atau Braxton Hicks. Keseimbangan tubuh bisa sedikit terganggu karena perut yang membesar.",
      tips: "Perhatikan postur tubuh Anda untuk mengurangi sakit punggung. Minum banyak air untuk mencegah dehidrasi yang bisa memicu kontraksi Braxton Hicks. Tes skrining diabetes gestasional biasanya dilakukan antara minggu ke-24 dan ke-28.",
    },
  },
  {
    id: 28,
    minggu: "Minggu ke-28",
    judul: "Membuka Mata & Bermimpi",
    deskripsi:
      "Bayi sudah bisa membuka dan menutup matanya, dan bahkan mungkin sedang bermimpi.",
    ukuran_janin: "Seukuran terong besar",
    gambar_url: imgMinggu28,
    detail: {
      perkembangan_janin:
        "Selamat datang di trimester ketiga! Bayi Anda sekarang dapat membuka dan menutup matanya, merasakan perubahan cahaya, dan otaknya menunjukkan gelombang aktivitas yang mirip dengan saat bermimpi. Lapisan lemak mulai menumpuk di bawah kulitnya.",
      perubahan_ibu:
        "Anda mungkin merasa lebih sering lelah lagi dan sulit tidur. Gejala seperti sesak napas atau heartburn bisa muncul karena rahim menekan organ lain. Kaki Anda mungkin membengkak.",
      tips: "Cobalah tidur miring ke kiri untuk sirkulasi terbaik. Mulailah menghitung gerakan janin setiap hari. Ini juga saat yang tepat untuk mulai mempersiapkan tas rumah sakit dan finalisasi rencana persalinan Anda.",
    },
  },
];
