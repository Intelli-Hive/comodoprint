import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your images
import hareketli_ejderha from "../../assets/baski/hareketli_ejderha.jpg";
import arac_ici_gozluk_tutucu from "../../assets/baski/arac_ici_gozluk_tutucu.jpg";
import i2d_siyah_tablo_samurai from "../../assets/baski/2d_siyah_tablo_samurai.jpg";
import i18650_pil_kutusu from "../../assets/baski/18650_pil_kutusu.jpg";
import pikachu_figur from "../../assets/baski/pikachu_figur.jpg";
import batman_figur from "../../assets/baski/batman_figur.jpg";
import motosiklet_hiz_sabitleyici from "../../assets/baski/motosiklet_hiz_sabitleyici.jpg";
import pati_kitap_ayraci from "../../assets/baski/pati_kitap_ayraci.jpg";
import kurdan_silahi from "../../assets/baski/kurdan_silahi.jpg";
import hareketli_chainmail from "../../assets/baski/hareketli_chainmail.jpg";

import dekoratif_duvar_susu_kus from "../../assets/baski/dekoratif_duvar_susu_kus.jpg";
import ayarlanabilir_telefon_tutacagi from "../../assets/baski/ayarlanabilir_telefon_tutacagi.jpg";
import minik_geko_figur from "../../assets/baski/minik_geko_figur.jpg";
import delikli_mini_saksi from "../../assets/baski/delikli_mini_saksi.jpg";
import katlanabilir_kiyafet_askisi from "../../assets/baski/katlanabilir_kiyafet_askisi.jpg";
import dekoratif_masa_lambasi from "../../assets/baski/dekoratif_masa_lambasi.jpg";


const Products = () => {
  const productsRef = useRef(null);
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState('Tüm Ürünler');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const categories = [
    'Tüm Ürünler',
    'Öne Çıkanlar',
    'Kişiye Özel Baskı',
    'Malzeme Türleri',
    '3D Modellemeler'
  ];

  // Product data with additional information
  const allProducts = [
    { id: 1, img: hareketli_ejderha, title: "Hareketli Ejderha", rating: 5.0, color: "Sarı", aosDelay: "0", category: "Öne Çıkanlar", price: 319.99, discountPrice: 229.99 },
    { id: 2, img: batman_figur, title: "Batman Figürü", rating: 4.9, color: "Siyah", aosDelay: "0", category: "Kişiye Özel Baskı", price: 419.99, discountPrice: 289.99 },
    { id: 3, img: dekoratif_masa_lambasi, title: "Dekoratif Masa Lambası", rating: 5.0, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 329.99, discountPrice: 249.99 },
    { id: 4, img: pikachu_figur, title: "Pikachu Figürü", rating: 4.6, color: "Sarı", aosDelay: "400", category: "Öne Çıkanlar", price: 179.99, discountPrice: 99.99 },
    { id: 5, img: i2d_siyah_tablo_samurai, title: "Dekoratif Duvar Süsü Samurai", rating: 4.7, color: "Siyah", aosDelay: "200", category: "3D Modellemeler", price: 169.99, discountPrice: 79.99 },
    { id: 6, img: minik_geko_figur, title: "Minik Geko Figürü", rating: 4.8, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 129.99, discountPrice: 79.99 },
    { id: 7, img: dekoratif_duvar_susu_kus, title: "Dekoratif Duvar Süsü Kuş", rating: 4.8, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 229.99, discountPrice: 179.99 },
    { id: 8, img: katlanabilir_kiyafet_askisi, title: "Katlanabilir Kıyafet Askısı", rating: 4.8, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 129.99, discountPrice: 79.99 },
    { id: 9, img: motosiklet_hiz_sabitleyici, title: "Motosiklet Hız Sabitleyici", rating: 4.5, color: "Siyah", aosDelay: "200", category: "Malzeme Türleri", price: 199.99, discountPrice: 119.99 },
    { id: 10, img: ayarlanabilir_telefon_tutacagi, title: "Ayarlanabilir Telefon Tutacağı", rating: 4.8, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 129.99, discountPrice: 149.99 },
    { id: 11, img: i18650_pil_kutusu, title: "18650 Pil Kutusu", rating: 4.9, color: "Sarı", aosDelay: "300", category: "Öne Çıkanlar", price: 199.99, discountPrice: 159.99 },
    { id: 12, img: arac_ici_gozluk_tutucu, title: "Araç İçi Gözlük Tutucu", rating: 4.8, color: "Beyaz", aosDelay: "100", category: "Kişiye Özel Baskı", price: 99.99, discountPrice: 59.99 },
    { id: 13, img: pati_kitap_ayraci, title: "Patili Kitap Ayracı", rating: 4.3, color: "Pembe", aosDelay: "400", category: "3D Modellemeler", price: 79.99, discountPrice: 39.99 },
    { id: 14, img: kurdan_silahi, title: "Kürdan Tabancası", rating: 4.2, color: "Mavi", aosDelay: "600", category: "Kişiye Özel Baskı", price: 59.99, discountPrice: 17.99 },
    { id: 15, img: hareketli_chainmail, title: "Hareketli Örgü Zincir", rating: 4.8, color: "Gri", aosDelay: "800", category: "Öne Çıkanlar", price: 129.99, discountPrice: 79.99 },
    { id: 16, img: delikli_mini_saksi, title: "Delikli Mini Saksı", rating: 4.8, color: "Siyah", aosDelay: "800", category: "Öne Çıkanlar", price: 19.99, discountPrice: 9.99 },
  ];

  // Filter products by category
  const filteredProducts = currentCategory === 'Tüm Ürünler'
    ? allProducts
    : allProducts.filter(product => product.category === currentCategory);

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-14 mb-12" ref={productsRef}>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary dark:text-primary">
            En Çok Tercih Edilen 3D Baskı Ürünleri
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Ürünlerimiz
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
            Yüksek kaliteli malzemelerle üretilmiş, özenle tasarlanmış 3D baskı ürünlerimize göz atın.
          </p>
        </div>

        {/* Category selector */}
        <div className="mb-8" data-aos="fade-up">
          <div className="flex justify-center flex-wrap space-x-2 space-y-2 md:space-x-4 md:space-y-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${currentCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white'
                  }`}
                onClick={() => {
                  setCurrentCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter indicator */}
        {currentCategory !== 'Tüm Ürünler' && (
          <div className="text-center mb-6" data-aos="fade-up">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-white">
              {currentCategory} kategorisinde {filteredProducts.length} ürün bulundu
            </span>
          </div>
        )}

        {/* Ürün Listesi Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={50 * (index % 4)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:text-gray-100 flex flex-col"
            >
              {/* 🔥 BURASI GÖRSELİN OLDUĞU KISIM */}
              <div className="h-[380px] w-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <div className="mb-2">
                    <span className="bg-amber-100 text-amber-800 dark:bg-amber-700 dark:text-amber-100 text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-gray-100">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="line-through text-gray-500 dark:text-gray-400 mr-2">
                      {product.price} TL
                    </span>
                    <span className="text-purple-700 dark:text-purple-400 font-bold text-lg">
                      {product.discountPrice} TL
                    </span>
                  </div>
                </div>

                <button className="w-full bg-amber-400 hover:bg-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 text-white py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                  Satın Al
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {currentProducts.length === 0 && (
          <div className="text-center py-8" data-aos="fade-up">
            <p className="text-gray-500 dark:text-gray-300">Bu kategoride ürün bulunamadı.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8" data-aos="fade-up">
            <div className="flex space-x-2">
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700'
                  : 'bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white'
                  }`}
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white'
                    }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700'
                  : 'bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white'
                  }`}
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        )}

        {/* View all button */}
        <div className="flex justify-center">
          <button
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
            onClick={() => navigate("/products")}
          >
            Tüm Ürünleri Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;