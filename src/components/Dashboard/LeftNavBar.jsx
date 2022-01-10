import React from "react";
import { decodeToken } from "react-jwt";

const LeftNavBar = () => {
  const token = sessionStorage.getItem("token");
  const user = decodeToken(token);
  console.log(user);
  return (
    <div className="h-screen w-72 bg-boxColor rounded-r-xl box-shadow flex flex-col py-10 gap-8 items-center font-Montserrat">
      <div className="flex w-64 h-44 flex-col items-center justify-center gap-4 bg-background rounded-lg">
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
        <button className="text-textColor font-semibold text-sm">
          Kişisel Bilgiler
        </button>
      </div>
    </div>
  );
};

export default LeftNavBar;
