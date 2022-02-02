import React from "react";

import { Footer, Header } from "../components/main";
import { MainContainer, Box } from "../components/main/UI";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

//Images
import RegisterPicture from "../assets/howToWorks/RegisterPicture.png";
import { Link } from "react-router-dom";

//TODO:How To Works Yapılacak

const HowToWorks = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Box className="w-11/12 text-textColor">
          <h1 className="font-semibold text-xl">Nasıl Çalışır?</h1>
          <div className="w-full flex items-center justify-around">
            <div
              className={`flex items-center justify-around bg-background w-3/4 box-shadow py-8 px-10 rounded-lg`}
            >
              <img
                className="w-[500px] h-[300px] rounded-xl"
                src={RegisterPicture}
              />
              <ImArrowLeft color="#F0FFFF" />
              <h1 className="font-semibold px-16 py-8 rounded-lg bg-boxColor">
                Randevu Oluşturmak İçin Öncelikle{" "}
                <Link to="/register" className="underline underline-offset-1">
                  Kayıt Ol
                </Link>
                un
              </h1>
            </div>
          </div>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
};

export default HowToWorks;
