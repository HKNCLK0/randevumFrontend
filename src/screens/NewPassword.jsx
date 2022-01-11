import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, Modals, Error } from "../components/main";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/main/UI";

//TODO:Modallarda Hata Veya Başarılı İconları Eklenecek
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
        <Modals isOpen={errorModal} setIsOpen={setErrorModal}>
          <div className="font-Montserrat flex flex-col items-center gap-6 text-center">
            <h1 className="text-textColor font-bold text-xl">
              Hatalı Sıfırlama Linki
            </h1>
            <h1 className="text-textColor font-semibold text-md">
              Lütfen Şifre Sıfırlama Bağlantınızı Kontrol Edin!
            </h1>
          </div>
          <button
            className="text-textColor font-Montserrat font-medium text-base border-2 px-6 rounded-lg border-borderAndOtherRed hover:border-transparent transition-colors hover:text-boxColor hover:bg-textColor py-2"
            onClick={() => navigate("/login")}
          >
            Tamam
          </button>
        </Modals>

        {/* SuccessModal */}
        <Modals isOpen={successModal} setIsOpen={setSuccessModal}>
          <div className="font-Montserrat flex flex-col items-center gap-6 text-center">
            <h1 className="text-textColor font-bold text-xl">Başarılı</h1>
            <h1 className="text-textColor font-semibold text-md">
              Şifre Sıfırlama İşleminiz Başarıyla Gerçekleşti
            </h1>
          </div>
          <button
            className="text-textColor font-Montserrat font-medium text-base border-2 px-6 rounded-lg border-borderAndOtherRed hover:border-transparent transition-colors hover:text-boxColor hover:bg-textColor py-2"
            onClick={() => navigate("/login")}
          >
            Giriş Yap
          </button>
        </Modals>
      </main>
    </>
  );
};

export default NewPassword;
