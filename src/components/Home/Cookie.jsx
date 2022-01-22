import React from "react";

//TODO:Cookie Accept Yapılacak
const Cookie = () => {
  const cookieState = localStorage.getItem("c");
  return (
    <div
      className={`${
        cookieState === "1" ? "hidden" : "flex"
      } font-Montserrat fixed bottom-0 w-1/2 items-center justify-center rounded-t-2xl text-center h-16 bg-background`}
    >
      <h1 className="text-textColor font-semibold text-sm">
        Kullanıcılarımıza Daha İyi Hizmet Sunmak İçin Çerezleri Kullanıyoruz!
      </h1>
    </div>
  );
};

export default Cookie;
