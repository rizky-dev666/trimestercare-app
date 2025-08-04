import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} TrimesterCare. Made with love.</p>
          <p className="mt-1">
            Informasi di situs ini tidak menggantikan nasihat medis profesional.
          </p>
        </div>
      </div>
    </footer>
  );
}
