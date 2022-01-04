import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Error } from "../components/main";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    axios
      .post(`${API_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.user.token);
        navigate("/");
      })
      .catch(() => setError(true));
  };
  return (
    <>
      <Header />
      <main className="w-full my-16 flex flex-col items-center font-Montserrat gap-16">
        <div className="w-4/5 md:w-1/4 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Giriş Yap</h1>
          <Error error={error}>E-Posta veya Şifre Hatalı</Error>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              value={email}
              autoCapitalize="none"
              onClick={() => setError(false)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Posta"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
            <div className="md:w-1/2">
              <input
                value={password}
                type="password"
                autoCapitalize="none"
                onClick={() => setError(false)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                className="w-full px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
              />
              <Link
                className="flex justify-end italic font-semibold text-xs pt-1 text-textColor md:text-sm md:font-medium"
                to="/login/forgot-password"
              >
                Şifremi Unuttum
              </Link>
            </div>
          </div>
          <button
            onClick={() => handleLogin()}
            className="border-2 px-4 py-2 rounded-lg text-textColor transition-colors duration-200 font-semibold hover:bg-textColor hover:text-boxColor hover:border-transparent border-borderAndOtherRed"
          >
            Giriş Yap
          </button>
        </div>
        <a
          href="https://business.randevum.tech/login"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-boxColor text-center w-2/3 md:w-1/4 py-8 rounded-lg font-semibold text-textColor text-sm transition-colors duration-200 hover:bg-textColor hover:text-boxColor"
        >
          İşletme Girişi İçin Tıklayın
        </a>
      </main>
    </>
  );
};

export default Login;
