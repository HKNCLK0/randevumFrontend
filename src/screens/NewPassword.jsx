import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, Error } from "../components/main";
import SuccessModal from "../components/main/Modals/SuccessModal";
import NotAuthModal from "../components/main/Modals/NotAuthModal";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/main/UI";

const NewPassword = () => {
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [error, setError] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    axios
      .post(`${API_URL}/password-reset/token`, {
        token,
      })
      .catch(() => setErrorModal(true));
  }, []);

  const handleSubmit = () => {
    if (firstPassword === secondPassword) {
      axios
        .post(`${API_URL}/password-reset/new-password`, {
          password: firstPassword,
          token,
        })
        .then(() => setSuccessModal(true));
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Header />
      <main className="w-full my-16 flex flex-col items-center font-Montserrat gap-16">
        <div className="w-4/5 md:w-1/4 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Şifremi Unuttum</h1>
          <p className="text-xs text-textColor text-center px-8">
            Yeni Şifrenizi Giriniz
          </p>
          <Error error={error}>Şifreler Eşleşmiyor!</Error>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              onClick={() => setError(false)}
              type="password"
              value={firstPassword}
              autoCapitalize="none"
              onChange={(e) => setFirstPassword(e.target.value)}
              placeholder="Şifre"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
            <input
              onClick={() => setError(false)}
              type="password"
              value={secondPassword}
              autoCapitalize="none"
              onChange={(e) => setSecondPassword(e.target.value)}
              placeholder="Şifre Tekrar"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
          </div>
          <Button
            disabled={!firstPassword || !secondPassword}
            onClick={handleSubmit}
          >
            Kaydet
          </Button>
        </div>
        {/* ErrorModal */}
        <NotAuthModal
          isOpen={errorModal}
          setIsOpen={setErrorModal}
          title="Hatalı Sıfırlama Linki"
          subtitle="Lütfen Şifre Sıfırlama Bağlantınızı Kontrol Edin!"
          buttonText="Tamam"
          buttonNavigateURL="/login"
        />
        {/* SuccessModal */}
        <SuccessModal
          isOpen={successModal}
          setIsOpen={setSuccessModal}
          title="Başarılı"
          subtitle="Şifre Sıfırlama İşleminiz Başarıyla Gerçekleşti!"
          buttonText="Giriş Yap"
          buttonNavigateURL="/login"
        />
      </main>
    </>
  );
};

export default NewPassword;
