import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/main";
import { MainContainer } from "../components/main/UI";

const BusinessFilterByCategory = () => {
  const location = useLocation();
  const categoryName = location.state.category.categoryName;
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`${API_URL}/businesses`, {
        categoryName,
      })
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">{categoryName}</h1>
        </div>
      </MainContainer>
    </>
  );
};

export default BusinessFilterByCategory;
