import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LeftNavBar, Main, Box } from "../components/Dashboard";
import { Error, TextFooter } from "../components/main";
import { Input } from "../components/main/UI";
import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/UserData";
//TODO:Kullanıcı Bilgisi Düzenleme Yapılacak

const Dashboard = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [cookie, setCookies] = useCookies(["token"]);

  const token = cookie.token;

  //const [user, setUser] = useState({});

  const user = useSelector((state) => state.userData.user);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    return await axios
      .get(`${API_URL}/userData`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => dispatch(setUser(res.data)));
  };

  return (
    <div className="font-Montserrat">
      {/* Desktop */}
      <div className="hidden md:flex justify-between">
        <LeftNavBar page="ana" user={user} />
        <Main className="w-5/6 justify-between">
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
          <TextFooter />
        </Main>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-full">
          <LeftNavBar page="ana" />
        </div>
        <Main className="w-11/12 pt-20 h-[600px] pb-0 justify-between bg-red-400">
          <Box className="w-11/12">
            <h1 className="text-textColor font-bold text-xl">
              Kişisel Bilgiler
            </h1>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {user ? (
              <div className="flex flex-col gap-4">
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
          <TextFooter />
        </Main>
      </div>
    </div>
  );
};

export default Dashboard;
