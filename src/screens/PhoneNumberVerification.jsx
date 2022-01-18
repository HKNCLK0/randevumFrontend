import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { Header, Error, Success } from "../components/main";
import SuccessModal from "../components/main/Modals/SuccessModal";
import { MainContainer, Button } from "../components/main/UI";

const PhoneNumberVerification = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const token = sessionStorage.getItem("token");
  const decodedToken = decodeToken(token);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [smsCode, setSMSCode] = useState("");

  useEffect(() => {
    axios
      .post(`${API_URL}/auth/verify-phone-number`, {
        userID: decodedToken.id,
      })
      .then(() => setSuccess(true));
  }, []);
  const handleSubmit = () => {
    axios
      .post(`${API_URL}/auth/check-sms-code`, {
        smsCode,
        userID: decodedToken.id,
      })
      .then(() => setIsOpen(true))
      .catch((err) => {
        setError(true);
        setErrorMessage(err.response.data);
      });
  };
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-5/6 md:w-1/3 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">
            Telefon Numarası Doğrulama
          </h1>
          <Error error={error}>{errorMessage}</Error>
          <Success success={success}>Doğrulama Kodu Gönderildi!</Success>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              maxLength="4"
              className="md:w-1/2 px-2 text-center font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
              value={smsCode}
              onChange={(e) => setSMSCode(e.target.value)}
              placeholder="Doğrulama Kodu"
            />
          </div>
          <Button onClick={handleSubmit} disabled={!smsCode}>
            Gönder
          </Button>
        </div>
        <SuccessModal
          isOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title="Telefon Numarası Doğrulama"
          subtitle="Telefon Numarası Başarıyla Doğrulandı"
          buttonText="Tamam"
          buttonNavigateURL="/"
        />
      </MainContainer>
    </>
  );
};

export default PhoneNumberVerification;
