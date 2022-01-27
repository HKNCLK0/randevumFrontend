import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useSelector, useDispatch } from "react-redux";

import { BsDot } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

import { LeftNavBar, Main, Box } from "../../components/Dashboard";

import { setCounter } from "../../redux/Notifications";

import { Error, Loader, Success, TextFooter } from "../../components/main";

const Notifications = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const token = sessionStorage.getItem("token");
  const user = decodeToken(token);

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.register.count);

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    axios
      .get(`${API_URL}/notifications/${user.id}`)
      .then((res) => {
        setData(res.data);
        dispatch(setCounter(res.data.length));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };
  const handleDelete = ({ e, notification }) => {
    e.stopPropagation();
    axios
      .delete(`${API_URL}/notifications/${notification._id}`)
      .then(() => setSuccess(true))
      .then(() => getNotifications());
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  return (
    <div className="font-Montserrat">
      {/* Desktop */}
      <div className="hidden md:flex justify-between">
        <LeftNavBar page="notifications" />
        <Main className="w-5/6 justify-between">
          <Box className="w-5/6 px-20 gap-3">
            <h1 className="text-textColor font-bold text-xl">Bildirimler</h1>
            <Success success={success}>Bildirim Başarıyla Silindi</Success>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {loading ? (
              <Loader />
            ) : data.length === 0 ? (
              <h1 className="text-textColor font-semibold">Bildirim Yok</h1>
            ) : (
              data.map((notification, index) => (
                <div
                  className="bg-background flex items-center justify-between w-full rounded-lg box-shadow px-4 py-3 text-textColor"
                  key={index}
                >
                  <span className="flex">
                    <BsDot size={24} />
                    <h1 className="font-medium text-sm pt-0.5">
                      {notification.message}
                    </h1>
                  </span>
                  <button
                    onClick={(e) => handleDelete({ e, notification })}
                    className="text-textColor transition-colors duration-200 hover:text-borderAndOtherRed"
                  >
                    <MdDeleteOutline size={24} />
                  </button>
                </div>
              ))
            )}
          </Box>
          <TextFooter />
        </Main>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-full">
          <LeftNavBar page="notifications" />
        </div>
        <Main className="w-11/12 pt-20 h-[600px] pb-0 justify-between">
          <Box className="w-11/12 gap-3 px-4">
            <h1 className="text-textColor font-bold text-xl">Bildirimler</h1>
            <Success success={success}>Bildirim Başarıyla Silindi</Success>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {loading ? (
              <Loader />
            ) : data.length === 0 ? (
              <h1 className="text-textColor font-semibold">Bildirim Yok</h1>
            ) : (
              data.map((notification, index) => (
                <div
                  className="bg-background flex items-center justify-between w-full rounded-lg box-shadow px-4 py-3 text-textColor"
                  key={index}
                >
                  <span className="flex">
                    <BsDot size={24} />
                    <h1 className="font-medium text-sm pt-0.5">
                      {notification.message}
                    </h1>
                  </span>
                  <button
                    onClick={(e) => handleDelete({ e, notification })}
                    className="text-textColor transition-colors duration-200 hover:text-borderAndOtherRed"
                  >
                    <MdDeleteOutline size={24} />
                  </button>
                </div>
              ))
            )}
          </Box>
          <TextFooter />
        </Main>
      </div>
    </div>
  );
};

export default Notifications;
