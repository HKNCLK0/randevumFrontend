import React, { useState } from "react";
import { Header } from "../components/main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <main className="w-full my-16 flex flex-col items-center font-Montserrat">
        <div className="w-4/5 md:w-1/4 flex flex-col gap-8 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Giriş Yap</h1>
          <div className="w-full flex flex-col items-center gap-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Posta"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
              className="md:w-1/2 px-2 font-semibold py-2 outline-none border-transparent text-sm border-2 transition-colors duration-200 focus:border-borderAndOtherRed rounded-lg"
            />
          </div>
          <button className="border-2 px-4 py-2 rounded-lg text-textColor transition-colors duration-200 font-semibold hover:bg-textColor hover:text-boxColor hover:border-transparent border-borderAndOtherRed">
            Giriş Yap
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
