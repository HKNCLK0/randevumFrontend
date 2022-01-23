import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Loader } from "../components/main";
import { MainContainer, Box } from "../components/main/UI";

//TODO:Sıralama Ölçütü Yapılacak

const BusinessFilterByCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state.category.categoryName;
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${API_URL}/businesses`, {
        categoryName,
      })
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <Box className="w-11/12 md:w-4/5">
          <h1 className="font-bold text-xl text-textColor">{categoryName}</h1>
          {data.length > 0 ? (
            <p className="text-textColor font-semibold text-sm">
              Randevu Oluşturmak İstediğiniz İşletmeyi Seçiniz
            </p>
          ) : (
            ""
          )}
          <div className="w-full flex justify-center gap-16">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-1/2 py-2 rounded-lg outline-none px-2 font-semibold text-sm border-2 border-transparent transition-colors duration-300 focus:border-borderAndOtherRed"
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
          ) : loading ? (
            <Loader />
          ) : (
            <h1 className="text-textColor font-semibold text-sm">
              Aradığınız Kriterlerde İşletme Bulunamadı
            </h1>
          )}
        </Box>
      </MainContainer>
    </>
  );
};

export default BusinessFilterByCategory;
