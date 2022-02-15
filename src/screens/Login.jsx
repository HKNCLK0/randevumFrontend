import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Error } from "../components/main";

import { useCookies } from "react-cookie";

import {
  BusinessCard,
  Button,
  Input,
  MainContainer,
  Box,
} from "../components/main/UI";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    document.getElementById("emailInput").focus();
    if (token) {
      navigate("/");
    }
  }, []);

  const [cookie, setCookies] = useCookies(["token"]);

  const token = cookie.token;

  const handleLogin = () => {
    axios
      .post(`${API_URL}/auth/login`, {
        userEmail: email,
        userPassword: password,
      })
      .then((res) => {
        setCookies("token", res.data.token, {
          secure: true,
        });
        navigate("/");
      })
      .catch(() => setError(true));
  };
  const pressKey = (e) => {
    if (!email || !password) {
      return;
    } else {
      if (e.key === "Enter") {
        handleLogin();
      }
    }
  };
  return (
    <>
      <Header />
      <MainContainer>
        <Box className="w-4/5 md:w-1/4">
          <h1 className="font-bold text-xl text-textColor">Giriş Yap</h1>
          <Error error={error}>E-Posta veya Şifre Hatalı</Error>
          <div className="w-full flex flex-col items-center gap-4">
            <Input
              id="emailInput"
              value={email}
              setError={setError}
              setState={setEmail}
              placeholder="E-Posta"
              inputType="email"
            />
            <Input
              value={password}
              inputType="password"
              setError={setError}
              keyPress={pressKey}
              setState={setPassword}
              placeholder="Şifre"
            />
          </div>
          <Button
            disabled={!email || !password}
            onClick={handleLogin}
            className="border-2 px-4 py-2 rounded-lg text-textColor transition-colors duration-200 font-semibold hover:bg-textColor hover:text-boxColor hover:border-transparent border-borderAndOtherRed disabled:bg-disabledColor disabled:border-transparent disabled:text-textColor disabled:cursor-not-allowed"
          >
            Giriş Yap
          </Button>
          <Link
            className="flex justify-end font-semibold text-xs pt-4 opacity-70 text-textColor md:text-sm md:font-medium"
            to="/login/forgot-password"
          >
            Şifremi Unuttum
          </Link>
        </Box>
        <BusinessCard href="https://business.randevum.tech/">
          İşletme Girişi İçin Tıklayınız
        </BusinessCard>
      </MainContainer>
    </>
  );
};

export default Login;
