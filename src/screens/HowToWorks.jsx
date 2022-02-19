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
        <Box className="w-11/12 text-textColor md:gap-0">
          <h1 className="font-semibold text-xl">Nasıl Çalışır?</h1>
          <div className="w-full flex items-center justify-around">
            <img
              className="w-full md:w-2/3 scale-125 md:scale-100"
              src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/HowToWorks.svg?alt=media&token=58d038bb-e5f7-4001-90b6-0484bf880e10"
              alt="how-to-works"
            />
          </div>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
};

export default HowToWorks;
