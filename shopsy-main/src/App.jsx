import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AllProductsPage from "./components/ProductsPage/AllProductsPage";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar handleOrderPopup={handleOrderPopup} />
              <Hero handleOrderPopup={handleOrderPopup} />
              <Products />
              <TopProducts handleOrderPopup={handleOrderPopup} />
              <Banner />
              <Subscribe />
              <Products />
              <Testimonials />
              <Footer />
              <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
            </>
          } />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;