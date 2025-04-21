import React from "react";
import BannerImg from "../../assets/women/comodoprinter.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Görsel Bölümü */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="3D Yazıcı Ürünü"
              className="max-w-[350px] h-auto w-full mx-auto drop-shadow-lg object-cover"
            />
          </div>

          {/* Metin ve Detaylar Bölümü */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
              3D Baskıda %100 Özel Üretim Deneyimi
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5 text-center sm:text-left"
            >
              Comodo Printer olarak kişisel veya endüstriyel ihtiyaçlarınıza özel 3 boyutlu baskılar sunuyoruz.
              Hayalinizdeki tasarımları gerçeğe dönüştürmek için buradayız!
            </p>
            <div className="flex flex-col gap-4">
              {/* Yüksek Kalite & Güvenilir Baskı */}
              <div data-aos="fade-up" className="flex items-center gap-4 justify-center sm:justify-start">
                <GrSecure className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Yüksek Kalite & Güvenilir Baskı</p>
              </div>
              {/* Hızlı Teslimat & Antalya İçi Elden */}
              <div data-aos="fade-up" className="flex items-center gap-4 justify-center sm:justify-start">
                <IoFastFood className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Hızlı Teslimat & Antalya İçi Elden</p>
              </div>
              {/* Kolay Sipariş Süreci */}
              <div data-aos="fade-up" className="flex items-center gap-4 justify-center sm:justify-start">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Kolay Sipariş Süreci</p>
              </div>
              {/* Toplu Siparişe Özel İndirimler */}
              <div data-aos="fade-up" className="flex items-center gap-4 justify-center sm:justify-start">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Toplu Siparişe Özel İndirimler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
