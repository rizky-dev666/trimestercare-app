import React from "react";
import heroImage from "../assets/images/hero-background.png";
import MenuCard from "../components/MenuCard";

// Import ikon yang akan kita gunakan
import {
  FaRegListAlt,
  FaCalculator,
  FaNewspaper,
  FaQuestionCircle,
  FaQuoteLeft,
  FaLightbulb,
} from "react-icons/fa";

export default function Beranda() {
  const menuItems = [
    {
      icon: <FaRegListAlt />,
      judul: "Panduan per Minggu",
      deskripsi: "Jelajahi perkembangan janin setiap minggunya.",
      linkTo: "/panduan-mingguan",
    },
    {
      icon: <FaCalculator />,
      judul: "Kalkulator",
      deskripsi: "Hitung perkiraan lahir & usia kehamilan Anda.",
      linkTo: "/kalkulator",
    },
    {
      icon: <FaNewspaper />,
      judul: "Artikel",
      deskripsi: "Baca wawasan & tips terbaru seputar kehamilan.",
      linkTo: "/artikel",
    },
    {
      icon: <FaQuestionCircle />,
      judul: "Tanya Jawab",
      deskripsi: "Temukan jawaban untuk pertanyaan umum.",
      linkTo: "/tanya-jawab",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div
        className="relative pt-16 pb-20 flex content-center items-center justify-center"
        style={{ minHeight: "95vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-40 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Sahabat Digital Kehamilan Anda
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                  Temukan informasi terpercaya, alat bantu praktis, dan panduan
                  lengkap untuk menemani setiap langkah perjalanan kehamilan
                  Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 -mt-10 pt-28 pb-20">
        {/* Container untuk KARTU MENU dibuat terpisah agar bisa full-width */}
        <div className="px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((menu, index) => (
              <MenuCard
                key={index}
                icon={menu.icon}
                judul={menu.judul}
                deskripsi={menu.deskripsi}
                linkTo={menu.linkTo}
              />
            ))}
          </div>
        </div>

        {/* Container untuk KONTEN LAINNYA agar tetap di tengah */}
        <div className="container mx-auto px-4">
          {/* BAGIAN KUTIPAN INSPIRATIF */}
          <div className="pt-20 mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <FaQuoteLeft className="text-pink-200 text-5xl mx-auto mb-4" />
              <blockquote className="text-2xl italic text-gray-700">
                "Menjadi tempat teraman bagi makhluk kecil yang belum pernah kau
                temui adalah sebuah keajaiban. Nikmati setiap detiknya."
              </blockquote>
              <p className="mt-4 text-lg font-semibold text-pink-600">
                - TrimesterCare -
              </p>
            </div>
          </div>

          {/* BAGIAN FAKTA MENARIK */}
          <div className="mt-20 max-w-4xl mx-auto bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
            <div className="flex items-center">
              <div className="pr-4">
                <FaLightbulb className="text-yellow-400 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-800">
                  Tahukah Anda?
                </h3>
                <p className="mt-1 text-gray-700">
                  Bayi sudah bisa mendengar suara dari luar rahim sejak usia
                  kehamilan sekitar 16-18 minggu. Mengajaknya berbicara atau
                  mendengarkan musik adalah cara indah untuk mulai membangun
                  ikatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
