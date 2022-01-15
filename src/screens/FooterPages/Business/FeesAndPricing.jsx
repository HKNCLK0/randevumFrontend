import React from "react";
import PricesCards from "../../../components/FooterPages/Business/PricesCards";

import { Header } from "../../../components/main";
import { MainContainer } from "../../../components/main/UI";

//TODO:Prices Card Backend'den Çekilecek Ve Düzenlenebilir Olacak
const FeesAndPricing = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-8 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl text-textColor">
              Ücretler Ve Fiyalandırma
            </h1>
            <p className="text-textColor font-semibold text-sm pt-6">
              !!!Yazı!!!
            </p>
          </div>
          <div className="flex justify-center bg-red-900 w-full gap-10">
            <PricesCards title="Giriş" />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default FeesAndPricing;
