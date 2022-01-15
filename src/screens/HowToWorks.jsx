import axios from "axios";
import React, { useEffect } from "react";

import { Header } from "../components/main";
import { MainContainer } from "../components/main/UI";

//TODO:How To Works Yapılacak

const HowToWorks = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios.get(`${API_URL}/cookie`).then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Nasıl Çalışır?</h1>
          <div>
            <h1 className="text-textColor">
              Sistemin Çalışması Adım Adım Yazılacak
            </h1>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default HowToWorks;
