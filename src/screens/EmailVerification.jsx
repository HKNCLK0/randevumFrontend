import React, { useState } from "react";
import { Header } from "../components/main";
import { Button, MainContainer } from "../components/main/UI";

const EmailVerification = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const userID = localStorage.getItem("userID");

  const [verificationCode, setVerificationCode] = useState("");
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-5/6 md:w-1/3 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">
            E-Posta Doğrulama
          </h1>
          {/*<Error error={error}>{errorMessage}</Error>*/}
          <div className="w-full flex flex-col items-center gap-4">
            <input
              maxLength="4"
              className="md:w-1/2 px-2 text-center font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Doğrulama Kodu"
            />
          </div>
          <Button disabled={!verificationCode}>Gönder</Button>
        </div>
      </MainContainer>
    </>
  );
};

export default EmailVerification;
