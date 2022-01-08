import React from "react";
import { Link } from "react-router-dom";

//TODO:Linklerin Sayfaları Yapılacak
//TODO:Social Bar Yapılacak
//TODO:Flex Yapısı 1/3/1 Şeklinde Yeniden Tasarlanacak

const Footer = () => {
  return (
    <footer className="flex w-full h-60 md:h-96 px-4 md:px-24 py-4 bg-boxColor mt-10 font-Montserrat">
      <div className="w-1/4 flex flex-col gap-y-4 items-center justify-center">
        <img
          className="w-40 h-40"
          src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
          alt="footerLogo"
        />
        <h1 className="text-textColor font-semibold text-sm">
          Tek Uygulama, Milyonlarca Randevu
        </h1>
      </div>
      <div className="hidden w-2/4 h-full md:flex">
        <div className="w-1/3 flex flex-col items-center justify-center gap-4">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            Keşfet
          </h1>
          <div className="flex flex-col gap-4 text-center">
            <Link to="#" className="text-textColor text-sm font-semibold">
              Hakkımızda
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              Kariyer
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              İletişim
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              Sosyal Sorumluluk
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-4">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            Yardım
          </h1>
          <div className="flex flex-col gap-4 text-center">
            <Link to="#" className="text-textColor text-sm font-semibold">
              Sık Sorulan Sorular
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              Gizlilik Politikası
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              KVKK
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              Çerez Politikası
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-4">
          <h1 className="text-textColor font-bold underline underline-offset-2">
            İşletme
          </h1>
          <div className="flex flex-col gap-4 text-center">
            <Link to="#" className="text-textColor text-sm font-semibold">
              Kayıt Olun
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              İşletme Politikası
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              Ücretler Ve Fiyatlandırma
            </Link>
            <Link to="#" className="text-textColor text-sm font-semibold">
              ##BOŞ##
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
