import React from "react";
import Img1 from "../../assets/baski/20250415_071414.jpg";
import Img2 from "../../assets/baski/20250418_084546.jpg";
import Img3 from "../../assets/baski/20250421_192234.jpg";
import Img4 from "../../assets/baski/20250421_214138.jpg";
import Img5 from "../../assets/baski/20250415_071449_001.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Ejderha",
    rating: 5.0,
    color: "Sarı",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Çok Amacçlı Tutacak",
    rating: 4.8,
    color: "Sarı",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Dekoratif",
    rating: 4.7,
    color: "Siyah",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Lityum pil kutusu",
    rating: 4.9,
    color: "Sarı",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Pokemon",
    rating: 4.6,
    color: "Sarı",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            En Çok Tercih Edilen 3D Baskı Ürünleri
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Ürünlerimiz
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Yüksek kaliteli malzemelerle üretilmiş, özenle tasarlanmış 3D baskı ürünlerimize göz atın.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Tüm Ürünleri Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
