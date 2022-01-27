import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer, Header, Loader } from "../components/main";
import { MainContainer } from "../components/main/UI";

//TODO:Arama Sonucu Bulunamadı Yapılacak

const CreateBusinessList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/businesses`).then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-8 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl text-textColor">Oluştur</h1>
            <p className="text-textColor font-semibold text-sm">
              Randevu Oluşturmak İstediğiniz İşletmeyi Seçiniz
            </p>
          </div>
          <div className="w-full flex justify-center gap-16">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-3/4 md:w-1/2 py-2 rounded-lg outline-none px-2 font-semibold text-sm border-2 border-transparent transition-colors duration-300 focus:border-borderAndOtherRed"
              placeholder="Ara"
            />
            {/* Sıralama Ölçütü */}
            {/*<div className="w-1/4 flex">
              <select className="flex items-center border-2 bg-transparent text-textColor px-4 py-2 text-sm font-semibold rounded-lg">
                <option className="text-gray-400" value="">
                  Sıralama Ölçütü
                </option>
                <option className="text-background font-semibold" value="">
                  Yüksek Puanlı
                </option>
                <option className="text-background font-semibold" value="">
                  Düşük Puanlı
                </option>
                <option className="text-background font-semibold" value="">
                  A-Z Sırala
                </option>
                <option className="text-background font-semibold" value="">
                  Z-A Sırala
                </option>
              </select>
            </div> */}
          </div>
          {/* Search Bar */}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8 gap-x-4 gap-y-4 text-textColor">
              {data
                .filter((business) => {
                  if (searchQuery === "") {
                    return business;
                  } else if (
                    business.businessName
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  ) {
                    return business;
                  }
                })
                .map((business, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(`/create/${business._id}`)}
                    className="bg-background hover:bg-textColor group box-shadow hover:text-background rounded-lg px-4 py-8 flex flex-col gap-4 items-center hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={business.businessImage}
                      className="w-72 h-48 object-cover rounded-lg border-2 border-transparent shadow-xl group-hover:border-background"
                      alt="businessImage"
                    />
                    <div>
                      <h1 className="font-bold text-lg">
                        {business.businessName}
                      </h1>
                      <h1 className="text-sm opacity-75 font-medium">
                        {business.businessCategory}
                      </h1>
                    </div>
                  </button>
                ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </MainContainer>
      <Footer />
    </>
  );
};

export default CreateBusinessList;
