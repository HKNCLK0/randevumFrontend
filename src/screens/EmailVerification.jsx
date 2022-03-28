import React, { useState, useEffect } from "react";
import { Header, Error, Success } from "../components/main";
import SuccessModal from "../components/main/Modals/SuccessModal";
import { Button, MainContainer } from "../components/main/UI";
import axios from "axios";

import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const decodedToken = decodeToken(token);

  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //TODO:decodeToken token çözülmeden user email ile değişecek!
    axios
      .post(`${API_URL}/auth/verification-email`, {
        userID: decodedToken.id,
      })
      .then(() => setSuccess(true));
  }, []);

  const handleSubmit = () => {
    axios
      .post(`${API_URL}/auth/verify-email-code`, {
        verificationCode,
        userID: decodedToken.id,
      })
      .then(() => setIsOpen(true))
      .catch((err) => {
        setError(true);
        setErrorMessage(err.response.data);
      });
  };
  const clearError = () => {
    setSuccess(false);
    setError(false);
  };
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-5/6 md:w-1/3 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">
            E-Posta Doğrulama
          </h1>
          <Error error={error}>{errorMessage}</Error>
          <Success success={success}>Doğrulama Kodu Gönderildi!</Success>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              maxLength="4"
              onClick={() => clearError()}
              className="md:w-1/2 px-2 text-center font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Doğrulama Kodu"
            />
          </div>
          <Button onClick={handleSubmit} disabled={!verificationCode}>
            Gönder
          </Button>
        </div>
        <SuccessModal
          title="E-Posta Doğrulama"
          subtitle="E-Posta Adresiniz Başarıyla Doğrulandı"
          isOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          buttonText="Devam Et"
          buttonNavigateURL="/login"
          //buttonNavigateURL="/register/phone-verification"
        />
      </MainContainer>
    </>
  );
};

export default EmailVerification;
