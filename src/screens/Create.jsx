import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/main";
import { MainContainer } from "../components/main/UI";

//TODO:Business Password Görünmeyecek!

const Create = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { businessID } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/businesses/${businessID}`)
      .then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Oluştur</h1>
        </div>
      </MainContainer>
    </>
  );
};

export default Create;
