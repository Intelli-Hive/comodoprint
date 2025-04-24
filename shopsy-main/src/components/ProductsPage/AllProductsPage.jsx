// components/ProductsPage/AllProductsPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState('Tüm Ürünler');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  
  const categories = [
    'Tüm Ürünler',
    '3D Ürünler',
    'Öne Çıkanlar',
    'Kişiye Özel Baskı',
    'Malzeme Türleri'
  ];
  
  // Ürün verileri - bunları manuel olarak ekleyebilirsiniz
  const allProducts = [
    {
      id: 1,
      name: '3D Baskı Sarı Robot',
      price: 249.99,
      discountPrice: 74.99,
      category: '3D Ürünler',
      image: '/path/to/product1.jpg'
    },
    {
      id: 2,
      name: 'Özel Tasarım Gri Model',
      price: 329.99,
      discountPrice: 98.99,
      category: 'Kişiye Özel Baskı',
      image: '/path/to/product2.jpg'
    },
    {
      id: 3,
      name: '3D Mekanik Parça',
      price: 199.99,
      discountPrice: 59.99,
      category: '3D Ürünler',
      image: '/path/to/product3.jpg'
    },
    {
      id: 4,
      name: 'Mavi Prototip Modeli',
      price: 279.99,
      discountPrice: 83.99,
      category: 'Öne Çıkanlar',
      image: '/path/to/product4.jpg'
    },
    {
      id: 5,
      name: 'Sarı Figür Model',
      price: 189.99,
      discountPrice: 56.99,
      category: '3D Ürünler',
      image: '/path/to/product5.jpg'
    },
    {
      id: 6,
      name: '3D Yazıcı Test Modeli',
      price: 149.99,
      discountPrice: 44.99,
      category: 'Malzeme Türleri',
      image: '/path/to/product6.jpg'
    },
    {
      id: 7,
      name: 'Kişiselleştirilmiş Rozet Seti',
      price: 99.99,
      discountPrice: 29.99,
      category: 'Kişiye Özel Baskı',
      image: '/path/to/product7.jpg'
    },
    {
      id: 8,
      name: 'Mini Drone Parçaları',
      price: 349.99,
      discountPrice: 104.99,
      category: '3D Ürünler',
      image: '/path/to/product8.jpg'
    },
    {
      id: 9,
      name: 'Özel Logo Basklı Kalem',
      price: 59.99,
      discountPrice: 17.99,
      category: 'Kişiye Özel Baskı',
      image: '/path/to/product9.jpg'
    },
    {
      id: 10,
      name: 'Mimari Maket Seti',
      price: 599.99,
      discountPrice: 179.99,
      category: 'Öne Çıkanlar',
      image: '/path/to/product10.jpg'
    },
    {
      id: 11,
      name: 'Dekoratif Masa Süsü',
      price: 129.99,
      discountPrice: 38.99,
      category: 'Malzeme Türleri',
      image: '/path/to/product11.jpg'
    },
    {
      id: 12,
      name: 'Teknolojik Telefon Standı',
      price: 89.99,
      discountPrice: 26.99,
      category: '3D Ürünler',
      image: '/path/to/product12.jpg'
    },
    {
      id: 13,
      name: 'Kişiye Özel Anahtarlık',
      price: 49.99,
      discountPrice: 14.99,
      category: 'Kişiye Özel Baskı',
      image: '/path/to/product13.jpg'
    },
    {
      id: 14,
      name: 'Akıllı Ev Sensör Kutusu',
      price: 179.99,
      discountPrice: 53.99,
      category: '3D Ürünler',
      image: '/path/to/product14.jpg'
    },
    {
      id: 15,
      name: 'RGB Gaming Klavye Tuşları',
      price: 149.99,
      discountPrice: 44.99,
      category: 'Öne Çıkanlar',
      image: '/path/to/product15.jpg'
    },
    {
      id: 16,
      name: 'Metal Efektli Figür',
      price: 229.99,
      discountPrice: 68.99,
      category: 'Malzeme Türleri',
      image: '/path/to/product16.jpg'
    },
    {
      id: 17,
      name: 'Şeffaf Reçine Bileklik',
      price: 79.99,
      discountPrice: 23.99,
      category: 'Malzeme Türleri',
      image: '/path/to/product17.jpg'
    },
    {
      id: 18,
      name: 'Şirket Logolu Kupa',
      price: 69.99,
      discountPrice: 20.99,
      category: 'Kişiye Özel Baskı',
      image: '/path/to/product18.jpg'
    },
    {
      id: 19,
      name: 'Özel Tasarım Mücevher Kutusu',
      price: 199.99,
      discountPrice: 59.99,
      category: 'Öne Çıkanlar',
      image: '/path/to/product19.jpg'
    },
    {
      id: 20,
      name: 'Karbon Fiber Görünümlü Kalemlik',
      price: 119.99,
      discountPrice: 35.99,
      category: 'Malzeme Türleri',
      image: '/path/to/product20.jpg'
    },
  ];
  
  // Kategoriye göre ürünleri filtrele
  const filteredProducts = currentCategory === 'Tüm Ürünler' 
    ? allProducts 
    : allProducts.filter(product => product.category === currentCategory);
  
  // Sayfalama için ürünleri böl
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 py-6 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="flex items-center justify-between" data-aos="fade-up">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-2 dark:text-gray-100">Tüm Ürünlerimiz</h2>
              <p className="mb-4 dark:text-gray-300">Garanti bizden, seçim sizden! En popüler ürünlerde şimdi eşsiz fiyatlar ve sorunsuz destek.</p>
              <button className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Sipariş Ver
              </button>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="100">
              <div className="bg-purple-700 text-white p-2 rounded-lg dark:bg-purple-800">
                <div className="text-xl font-bold">SÜPER FIRSAT</div>
                <div className="text-3xl font-bold">BÜYÜK İNDİRİM</div>
                <div className="bg-amber-400 text-black p-1 mt-1 text-center rounded dark:bg-amber-500">SADECE BU HAFTA</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-400 dark:bg-amber-500 rounded-full h-16 w-16 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold">70%</div>
                  <div className="text-xs font-bold -mt-1">İNDİRİM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category selector */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="flex justify-center" data-aos="fade-up">
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-x-4 md:space-y-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    currentCategory === category
                      ? 'bg-amber-400 text-white dark:bg-amber-500'
                      : 'bg-white hover:bg-amber-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => {
                    setCurrentCategory(category);
                    setCurrentPage(1); // Kategori değiştirdiğimizde sayfa 1'e dön
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <main className="flex-grow py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center dark:text-gray-100" data-aos="fade-up">Ürünlerimiz</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">Yüksek kaliteli malzemelerde üretilmiş, üzerinde iyileştirmeler ve 3D baskı ürünlerimize göz atın.</p>
          
          {/* Ürün Filtreleme Sonucu Göstergesi */}
          {currentCategory !== 'Tüm Ürünler' && (
            <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="150">
              <span className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                {currentCategory} kategorisinde {filteredProducts.length} ürün bulundu
              </span>
            </div>
          )}
          
          {/* Ürün Listesi Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div 
                key={product.id} 
                data-aos="fade-up"
                data-aos-delay={50 * (index % 4)} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:text-gray-100"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="bg-amber-100 text-amber-800 dark:bg-amber-700 dark:text-amber-100 text-xs px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-gray-100">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="line-through text-gray-500 dark:text-gray-400 mr-2">{product.price} TL</span>
                    <span className="text-purple-700 dark:text-purple-400 font-bold text-lg">{product.discountPrice} TL</span>
                  </div>
                  <button className="w-full bg-amber-400 hover:bg-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 text-white py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sonuç Yoksa */}
          {currentProducts.length === 0 && (
            <div className="text-center py-8" data-aos="fade-up">
              <p className="text-gray-500 dark:text-gray-400">Bu kategoride ürün bulunamadı.</p>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8" data-aos="fade-up">
              <div className="flex space-x-2">
                <button 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentPage === 1 
                      ? 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed' 
                      : 'bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-amber-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      currentPage === index + 1
                        ? 'bg-amber-400 text-white dark:bg-amber-600'
                        : 'bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-amber-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentPage === totalPages 
                      ? 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed' 
                      : 'bg-white border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 hover:bg-amber-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProductsPage;