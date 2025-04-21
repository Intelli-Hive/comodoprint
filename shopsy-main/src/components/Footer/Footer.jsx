import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// Banner stili
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Şirket Bilgileri */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Comodo Printer" className="max-w-[50px]" />
              Comodo Printer
            </h1>
            <p>
              Comodo Printer, ihtiyacınıza özel 3D baskı çözümleri sunar. Endüstriyel ve kişisel projeler için hızlı, kaliteli ve güvenilir hizmet sağlıyoruz.
            </p>
          </div>

          {/* Footer Linkleri */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Sosyal medya linkleri */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Bizi Takip Edin</h3>
              <div className="flex items-center gap-3 mt-6">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl hover:text-primary transition duration-200" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-3xl hover:text-primary transition duration-200" />
                </a>
                <a href="#" aria-label="Linkedin">
                  <FaLinkedin className="text-3xl hover:text-primary transition duration-200" />
                </a>
              </div>
            </div>

            {/* İletişim Bilgileri */}
            <div className="mt-6 sm:mt-0">
              <h3 className="font-semibold text-lg mb-4">İletişim</h3>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Antalya, Türkiye</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+90 505 998 2093</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
