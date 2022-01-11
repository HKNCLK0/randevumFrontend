import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Loader } from "../components/main";
import { MainContainer } from "../components/main/UI";

//TODO:Sıralama Ölçütü Yapılacak
const BusinessFilterByCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state.category.categoryName;
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
        <div className="w-11/12 md:w-4/5 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">{categoryName}</h1>
          {data.length > 0 ? (
            <p className="text-textColor font-semibold text-sm">
              Randevu Oluşturmak İstediğiniz İşletmeyi Seçiniz
            </p>
          ) : (
            ""
          )}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8 gap-x-4 gap-y-4 text-textColor">
              {data.map((business, index) => (
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
        </div>
      </MainContainer>
    </>
  );
};

export default BusinessFilterByCategory;
