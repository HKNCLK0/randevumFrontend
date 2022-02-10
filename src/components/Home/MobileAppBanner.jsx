import React from "react";
import AppStore from "../../assets/AppStore.svg";
import PlayStore from "../../assets/PlayStore.svg";

const MobileAppBanner = () => {
  return (
    <div className="font-Montserrat">
      <div className="w-full md:flex hidden h-96 items-center bg-boxColor text-textColor rounded-lg">
        <div className="w-1/3 h-full text-primary-bir justify-center flex flex-col">
          <div className="flex flex-col py-8 px-12 gap-4 font-Montserrat text-center">
            <h1 className="font-bold text-2xl">
              Randevum'u Mobil Cihazınıza İndirin
            </h1>
            <p className="text-sm font-medium">
              Tek uygulama , milyonlarca randevu!
            </p>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            {/*<a href="#" className="transform transition hover:scale-105">
              <img className="" src={AppStore} />
            </a>
            <a href="#" className="transform transition hover:scale-105">
              <img className="" src={PlayStore} />
              </a>*/}
            <h1 className="text-2xl font-extrabold">Çok Yakında</h1>
          </div>
        </div>
        <div className="w-px h-4/5 rounded-lg bg-gray-300" />
        {/* TODO:App Resim Yapılacak */}
        <div className="w-8/12 h-full flex items-end justify-center">
          <img
            className="w-4/6"
            src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/MobileAppImage.svg?alt=media&token=e6673ec3-b231-4a77-b74d-1c9797fec930"
          />
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="flex flex-col gap-2 w-full py-4 items-center bg-boxColor">
          <h1 className="font-bold text-textColor text-sm">
            Randevum'u Mobil Cihazınıza İndirin
          </h1>
          <p className="text-sm font-medium text-textColor">
            Tek uygulama , milyonlarca randevu!
          </p>
          <h1 className="font-bold text-borderAndOtherRed">Resim Gelecek</h1>
          <div className="flex gap-4 justify-center">
            <img className="w-1/3" src={AppStore} />
            <img className="w-1/3" src={PlayStore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;
