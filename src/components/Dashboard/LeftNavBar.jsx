import React, { useEffect } from "react";
import { decodeToken } from "react-jwt";

import { useNavigate } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";

import { Loader } from "../main";
import { useSelector } from "react-redux";

const LeftNavBar = ({ page }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const user = decodeToken(token);

  const count = useSelector((state) => state.register.count);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className="h-screen w-1/6 bg-boxColor rounded-r-xl box-shadow flex flex-col py-10 gap-8 items-center justify-between font-Montserrat">
      <div className="flex flex-col gap-10">
        <div className="flex w-64 h-44 flex-col items-center justify-center gap-4 bg-background rounded-lg box-shadow">
          <img
            alt="userProfilePicture"
            src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/fusion_red.png?alt=media&token=3bb6b159-116e-4f0c-969c-d22c72b1ef6c"
            className="w-24 h-24 outline outline-2 transition-all outline-offset-4 hover:outline-offset-8 outline-textColor rounded-full"
          />
          {user ? (
            <h1 className="text-textColor font-bold text-xl">
              {user.userName} {user.userSurname}
            </h1>
          ) : (
            <Loader />
          )}
        </div>
        <div className="w-64 h-auto flex flex-col py-4 px-4 gap-4 bg-background rounded-lg">
          <a
            href="/"
            className={`text-center text-textColor hover:bg-textColor hover:text-borderAndOtherRed transition-colors duration-300 font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg`}
          >
            Anasayfa
          </a>
          <button
            onClick={() => navigate("/dashboard")}
            className={`${
              page === "ana" ? "text-textColor" : "text-gray-400"
            } text-center font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg`}
          >
            Kişisel Bilgiler
          </button>
          <button
            onClick={() => navigate("/dashboard/meets")}
            className={`${
              page === "meets" ? "text-textColor" : "text-gray-400"
            } text-center font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg`}
          >
            Randevularım
          </button>
          <button
            onClick={() => navigate("/dashboard/notifications")}
            className={`${
              page === "notifications" ? "text-textColor" : "text-gray-400"
            } font-semibold items-center flex justify-center relative text-sm box-shadow bg-boxColor py-3 rounded-lg`}
          >
            Bildirimler
            <div
              className={`${
                count === 0 ? "hidden" : ""
              } w-6 h-6 right-4 flex items-center justify-center border-2 border-borderAndOtherRed absolute rounded-full`}
            >
              <h1 className="text-textColor text-xs">{count}</h1>
            </div>
          </button>
          <button
            onClick={() => navigate("/dashboard/calendar")}
            className={`${
              page === "calendar" ? "text-textColor" : "text-gray-400"
            } text-center font-semibold text-sm box-shadow bg-boxColor py-3 rounded-lg`}
          >
            Takvim
          </button>
        </div>
        <button
          onClick={() => navigate("/create")}
          className="w-64 flex flex-col justify-center items-center rounded-lg box-shadow hover:text-background hover:bg-textColor transition-colors duration-300 text-textColor gap-2 bg-background py-8"
        >
          <FiPlusCircle size={60} />
          <h1 className="font-bold text-sm">Randevu Oluştur</h1>
        </button>
      </div>
      <button
        onClick={() => handleLogout()}
        className="flex bg-borderAndOtherRed px-10 transition-colors duration-300 hover:text-borderAndOtherRed hover:bg-textColor py-3 rounded-lg text-textColor font-bold items-center justify-center text-sm"
      >
        <HiOutlineLogin size={24} />
        Çıkış Yap
      </button>
    </div>
  );
};

export default LeftNavBar;
