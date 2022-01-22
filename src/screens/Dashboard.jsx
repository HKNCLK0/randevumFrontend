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
  console.log(user);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex justify-between font-Montserrat">
      <LeftNavBar page="ana" />
      <Main>
        <Box>
          <h1 className="text-textColor font-bold text-xl">Kişisel Bilgiler</h1>
          <Error error={error}>
            Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
          </Error>
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
        </Box>
      </Main>
    </div>
  );
};

export default Dashboard;
