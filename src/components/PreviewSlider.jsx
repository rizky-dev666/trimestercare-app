// src/components/PreviewSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Komponen Kartu yang kita gunakan sebelumnya
function PreviewCard({ linkTo, imageUrl, title, description, category }) {
  return (
    <Link
      to={linkTo}
      className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
    >
      <div className="relative">
        <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="p-5 flex flex-col">
        {category && (
          <p className="text-sm font-semibold text-pink-500 uppercase">
            {category}
          </p>
        )}
        <h3 className="mt-2 text-lg font-bold text-gray-900 flex-grow">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 text-sm font-medium text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
          Lihat Selengkapnya &rarr;
        </div>
      </div>
    </Link>
  );
}

export default function PreviewSlider({
  items,
  getLink,
  getCategory,
  getDescription,
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, // Tayang setiap 3 detik
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        // Tampilkan 2 slide untuk tablet
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Tampilkan 3 slide untuk laptop/desktop
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="pb-10">
          <PreviewCard
            linkTo={getLink(item)}
            imageUrl={item.gambar_url}
            title={item.judul}
            description={getDescription(item)}
            category={getCategory(item)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
