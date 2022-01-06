import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="font-Montserrat">
      <button
        onClick={() => handleLogout()}
        className="bg-green-400 p-4 font-bold"
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default Dashboard;
