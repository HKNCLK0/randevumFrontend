import React from "react";
import { Cards } from "../RecommendedBusiness/";

//TODO:Kart Yapılacak

const RecommendedBusiness = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-boxColor px-4 py-4 rounded-lg font-Montserrat box-shadow gap-6">
      <h1 className="font-bold text-textColor">Önerilen İşletmeler</h1>
      <Cards />
    </div>
  );
};

export default RecommendedBusiness;
