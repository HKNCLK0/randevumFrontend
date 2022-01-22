import React from "react";
import { Header } from "../../../components/main";
import { MainContainer } from "../../../components/main/UI";

const KVKK = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-5/6 md:w-11/12 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">
            Kişisel Verilerin Korunma Kanunu
          </h1>
        </div>
      </MainContainer>
    </>
  );
};

export default KVKK;
