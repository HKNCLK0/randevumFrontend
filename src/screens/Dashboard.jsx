import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/Dashboard/LeftNavBar";

//BUG:Notification Tüm Sayfalarda Fetch Yapacak

const Dashboard = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <LeftNavBar page="ana" />
    </>
  );
};

export default Dashboard;
