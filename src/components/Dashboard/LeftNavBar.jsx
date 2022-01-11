import React from "react";
import { decodeToken } from "react-jwt";

import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";

const LeftNavBar = () => {
  const token = sessionStorage.getItem("token");
  const user = decodeToken(token);
  //TODO:Sayfalara Göre Yazı Rengi Ayarlanacak
  //TODO:Bütün Butonlara İşlev Eklenecek
  return (
    <div className="h-screen w-72 bg-boxColor rounded-r-xl box-shadow flex flex-col py-10 gap-8 items-center justify-between font-Montserrat">
      <div className="flex flex-col gap-10">
        <div className="flex w-64 h-44 flex-col items-center justify-center gap-4 bg-background rounded-lg box-shadow">
          <img
            alt="userProfilePicture"
            src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/fusion_red.png?alt=media&token=3bb6b159-116e-4f0c-969c-d22c72b1ef6c"
            className="w-24 h-24 outline outline-2 transition-all outline-offset-4 hover:outline-offset-8 outline-textColor rounded-full"
          />
          <h1 className="text-textColor font-bold text-xl">
            {user.userName} {user.userSurname}
          </h1>
        </div>
        <div className="w-64 h-auto flex flex-col py-4 px-4 gap-4 bg-background rounded-lg">
          <button className="text-textColor font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg">
            Kişisel Bilgiler
          </button>
          <button className="text-textColor font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg">
            Randevularım
          </button>
          <button className="text-textColor font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg">
            Bildirimler
          </button>
          <button className="text-textColor font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg">
            Takvim
          </button>
        </div>
        <button className="w-64 flex flex-col justify-center items-center rounded-lg box-shadow hover:text-background hover:bg-textColor transition-colors duration-300 text-textColor gap-2 bg-background py-8">
          <FiPlusCircle size={60} />
          <h1 className="font-bold text-sm">Randevu Oluştur</h1>
        </button>
      </div>
      <button className="flex bg-borderAndOtherRed px-10 transition-colors duration-300 hover:text-borderAndOtherRed hover:bg-textColor py-3 rounded-lg text-textColor font-bold items-center justify-center text-sm">
        <HiOutlineLogin size={24} />
        Çıkış Yap
      </button>
    </div>
  );
};

export default LeftNavBar;