// src/pages/TanyaJawab.jsx
import React from "react";
import { dataFaq } from "../data/data_faq";
import AccordionItem from "../components/AccordionItem";

export default function TanyaJawab() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Tanya Jawab Umum (FAQ)
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Temukan jawaban untuk pertanyaan paling umum seputar kehamilan.
        </p>
      </div>

      <div className="space-y-10">
        {dataFaq.map((grup, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-pink-600 mb-4 pb-2 border-b-2 border-pink-200">
              {grup.kategori}
            </h2>
            <div className="space-y-2">
              {grup.items.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  pertanyaan={item.pertanyaan}
                  jawaban={item.jawaban}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
