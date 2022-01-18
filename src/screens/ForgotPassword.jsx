import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header } from "../components/main";
import SuccessModal from "../components/main/Modals/SuccessModal";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const [email, setEmail] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = () => {
    axios
      .post(`${API_URL}/password-reset`, {
        email,
      })
      .then(() => setIsOpen(true));
  };
  return (
    <>
      <Header />
      <main className="w-full my-16 flex flex-col items-center font-Montserrat gap-16">
        <div className="w-4/5 md:w-1/4 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Şifremi Unuttum</h1>
          <p className="text-xs text-textColor text-center px-8">
            Şifre Sıfırlama Bağlantısı İçin Lütfen E-Posta Adresinizi Girin
          </p>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              value={email}
              autoCapitalize="none"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Posta"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
          </div>
          <button
            onClick={() => handleSubmit()}
            className="border-2 px-4 py-2 rounded-lg text-textColor transition-colors duration-200 font-semibold hover:bg-textColor hover:text-boxColor hover:border-transparent border-borderAndOtherRed"
          >
            Gönder
          </button>
        </div>
        <SuccessModal
          title="Şifre Sıfırlama"
          subtitle="Şifre Yenileme Bağlantısı Gönderildi."
          isOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          buttonText="Tamam"
          buttonNavigateURL="/login"
        />
      </main>
    </>
  );
};

export default ForgotPassword;
