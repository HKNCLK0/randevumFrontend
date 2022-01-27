import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { LeftNavBar, Main, Box } from "../components/Dashboard";
import { Error } from "../components/main";
import { Input } from "../components/main/UI";

//TODO:Kullanıcı Bilgisi Düzenleme Yapılacak

const Dashboard = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const user = decodeToken(token);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="font-Montserrat">
      {/* Desktop */}
      <div className="hidden md:flex justify-between">
        <LeftNavBar page="ana" />
        <Main className="w-5/6">
          <Box className="w-5/6">
            <h1 className="text-textColor font-bold text-xl">
              Kişisel Bilgiler
            </h1>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {user ? (
              <div className="flex gap-16">
                <Input
                  inputType="text"
                  placeholder="İsim"
                  value={user.userName}
                  disabled={true}
                />
                <Input
                  inputType="text"
                  placeholder="Soyisim"
                  value={user.userSurname}
                  disabled={true}
                />
              </div>
            ) : (
              ""
            )}
          </Box>
        </Main>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-full">
          <LeftNavBar page="ana" />
        </div>
        <Main className="w-11/12 py-20">
          <Box className="w-full">
            <h1 className="text-textColor font-bold text-xl">
              Kişisel Bilgiler
            </h1>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {user ? (
              <div className="flex gap-4">
                <Input
                  inputType="text"
                  placeholder="İsim"
                  value={user.userName}
                  disabled={true}
                />
                <Input
                  inputType="text"
                  placeholder="Soyisim"
                  value={user.userSurname}
                  disabled={true}
                />
              </div>
            ) : (
              ""
            )}
          </Box>
        </Main>
      </div>
    </div>
  );
};

export default Dashboard;
