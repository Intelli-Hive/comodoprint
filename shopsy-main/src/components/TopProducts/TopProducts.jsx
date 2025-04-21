import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "3D Yazıcı",
    description:
      "Yüksek hassasiyetli 3D yazıcı, detaylı prototipler ve modeller üretmek için mükemmeldir. Hem profesyonellere hem de hobi amaçlı kullanıcılara uygundur.",
  },
  {
    id: 2,
    img: Img2,
    title: "3D Baskı Filamenti",
    description:
      "PLA, ABS ve PETG dahil olmak üzere yüksek kaliteli 3D baskı sonuçları için farklı filament seçenekleri.",
  },
  {
    id: 3,
    img: Img3,
    title: "3D Yazıcı Aksesuarları",
    description:
      "3D baskı deneyiminizi geliştirecek, baskı tablası, ekstrüder ve daha fazlasını içeren temel aksesuarlar.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            En Popüler Ürünler
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            En İyi 3D Yazıcı Ürünleri
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            3D yazıcılar, filamentler ve aksesuarlar ile ilgili en kaliteli ve popüler ürünleri keşfedin.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-full sm:max-w-[300px]"
            >
              {/* Image Section */}
              <div className="h-[120px] sm:h-[160px] flex justify-center items-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Şimdi Sipariş Et
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
