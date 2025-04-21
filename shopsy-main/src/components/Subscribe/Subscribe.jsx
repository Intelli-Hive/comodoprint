import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          {/* Başlık ve açıklama metni */}
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Yeni 3D Baskı Ürünlerinden Haberdar Ol
          </h1>
          <p className="text-sm text-white/80">
            Kampanyaları, yeni tasarımları ve özel fırsatları kaçırmamak için e-posta listemize katıl.
          </p>

          {/* E-posta girişi alanı */}
          <input
            data-aos="fade-up"
            type="email"
            placeholder="E-posta adresinizi girin"
            className="w-full p-3 rounded-md text-black"
          />

          {/* E-posta girişi sonrasında abone ol butonu */}
          <div className="mt-4">
            <button
              data-aos="fade-up"
              className="w-full py-3 bg-primary text-white rounded-md"
            >
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
