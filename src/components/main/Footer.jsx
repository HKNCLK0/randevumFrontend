import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

//TODO:Linklerin Sayfaları Yapılacak

const Footer = () => {
  const date = new Date();
  const yil = date.getFullYear();
  return (
    <footer className="flex w-full h-60 md:h-96 px-4 md:px-24 py-4 flex-col justify-between items-center pt-16 bg-boxColor mt-10 font-Montserrat">
      {/* Desktop */}
      <div className="md:grid grid-cols-12 w-full hidden">
        <div className="col-span-3 flex flex-col items-center justify-center gap-2">
          <img
            className="w-2/5"
            src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
            alt="footerLogo"
          />
          <h1 className="text-textColor w-2/5 text-left font-semibold text-sm">
            Tek Uygulama Milyonlarca Randevu
          </h1>
        </div>
        <div className="col-span-2 pl-28 flex flex-col items-center justify-center gap-2">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            Keşfet
          </h1>
          <div className="flex flex-col items-center gap-y-2">
            <Link to="#" className="text-textColor font-semibold text-sm">
              Hakkımızda
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              Kariyer
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              İletişim
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              Sosyal Sorumluluk
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-2">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            Yardım
          </h1>
          <div className="flex flex-col items-center gap-y-2">
            <Link to="#" className="text-textColor font-semibold text-sm">
              Sık Sorulan Sorular
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              Gizlilik Politikası
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              KVKK
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              Çerez Politikası
            </Link>
          </div>
        </div>
        <div className="col-span-2 pr-28 flex flex-col items-center justify-center gap-2">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            İşletme
          </h1>
          <div className="flex flex-col items-center gap-y-2">
            <Link to="#" className="text-textColor font-semibold text-sm">
              Kayıt
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              İşletme Politikası
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              Ücretler Ve Fiyatlar
            </Link>
            <Link to="#" className="text-textColor font-semibold text-sm">
              ##BOŞ##
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-center pr-24 justify-center gap-2">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            Social
          </h1>
          <div className="flex flex-col gap-y-2">
            <a
              href="https://instagram.com/randevumapp"
              className="transition-all hover:scale-125 duration-200"
            >
              <FaInstagram size={28} color="#F0FFFF" />
            </a>
            <a
              href="https://twitter.com/randevumapp"
              className="transition-all hover:scale-125 duration-200"
            >
              <FaTwitter size={28} color="#F0FFFF" />
            </a>

            <a
              href="https://linkedin.com/company/randevum"
              className="transition-all hover:scale-125 duration-200"
            >
              <FaLinkedin size={28} color="#F0FFFF" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-textColor font-medium text-sm opacity-30">
        Randevum © {yil} || All Rights Reserved
      </h1>
    </footer>
  );
};

export default Footer;
