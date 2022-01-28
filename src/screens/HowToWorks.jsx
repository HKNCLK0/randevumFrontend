import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/UserData";

import { Header } from "../components/main";
import { Button, MainContainer } from "../components/main/UI";

import { useCookies } from "react-cookie";

//TODO:How To Works Yapılacak

const HowToWorks = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [cookies, setCookie] = useCookies(["jwtToken"]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3OTc5ODY1OTczZTdjMDVlMWIxYiIsInVzZXJFbWFpbCI6ImNlbGlraGFrYW41MjU1QGdtYWlsLmNvbSIsInVzZXJOYW1lIjoiSGFrYW4iLCJ1c2VyU3VybmFtZSI6IkNlbGlrIiwidXNlclBob25lIjoiKzkwNTQ2Nzg0NTc2MCIsInVzZXJFbWFpbFZlcmlmaWNhdGlvbiI6dHJ1ZSwidXNlclBob25lVmVyaWZpY2F0aW9uIjp0cnVlLCJ1c2VyUHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOTkvU2FtcGxlX1VzZXJfSWNvbi5wbmciLCJpYXQiOjE2NDMzNzQwNjUsImV4cCI6MTY0MzM3NTg2NX0.-KMTzOGVwfElkncI1wXwsOXL-kTi1k34NPuSpnIg1WI";
  const handleClick = () => {
    axios
      .get(`${API_URL}/deneme/data`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setCookie("jwtToken", res.data));
  };
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <h1 className="font-bold text-xl text-textColor">Nasıl Çalışır?</h1>
          <div>
            <h1 className="text-textColor">
              Sistemin Çalışması Adım Adım Yazılacak
            </h1>
            <Button onClick={handleClick}>Getir</Button>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default HowToWorks;
