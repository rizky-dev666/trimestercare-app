// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Tambahkan link "Tentang Kami" ke dalam array navLinks
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Panduan per Minggu", href: "/panduan-mingguan" },
    { name: "Kalkulator", href: "/kalkulator" },
    { name: "Artikel", href: "/artikel" },
    { name: "Tanya Jawab", href: "/tanya-jawab" },
    { name: "Tentang Kami", href: "/tentang-kami" }, // <-- Tambahkan ini
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* ... sisa kode tidak perlu diubah ... */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto mr-2"
                src={logo}
                alt="TrimesterCare Logo"
              />
              <span className="text-2xl font-bold text-pink-500">
                TrimesterCare
              </span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-600 hover:bg-pink-500 hover:text-white px-3 py-2 rounded-md text-md font-bold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-pink-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-500 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Buka menu utama</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
