import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { decodeToken } from "react-jwt";

import { useSelector, useDispatch } from "react-redux";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useCookies } from "react-cookie";

import { setCounter } from "../../redux/Notifications";

const Header = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [cookie, setCookies] = useCookies(["token"]);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.register.count);

  const token = cookie.token;

  const user = decodeToken(token);

  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (token) {
      axios.get(`${API_URL}/notifications/${user.id}`).then((res) => {
        setData(res.data);
        dispatch(setCounter(res.data.length));
      });
    } else return;
  }, []);
  return (
    <header className="font-Montserrat">
      {/* Masaüstü */}
      <div className=" hidden md:flex">
        <div className="w-full h-16 filter drop-shadow-xl bg-boxColor flex items-center md:justify-around text-textColor">
          <div className="w-1/6 flex items-center justify-center ">
            <img
              alt="header-logo"
              className="w-14 h-14"
              src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
            />
          </div>
          <div className="hidden sm:text-xs md:text-sm lg:text-md xl:text-base w-2/4 h-full md:flex flex-row font-Montserrat text-primary-bir items-center text-center justify-center font-semibold md:gap-10 lg:gap-20">
            <Link to="/">
              <h1>Anasayfa</h1>
            </Link>
            <Link to="/nasil-calisir">
              <h1>Nasıl Çalışır?</h1>
            </Link>
            {/*<Link to="/businesses">
              <h1>İşletmeler</h1>
            </Link>*/}
            <Link to="/create">
              <h1>Oluştur</h1>
            </Link>
          </div>
          {token ? (
            <div className="hidden md:flex relative w-2/12 lg:w-1/6 h-full font-Montserrat text-sm lg:text-base items-center lg:justify-start font-bold">
              <Link
                to="/dashboard"
                className="flex flex-row items-center gap-2"
              >
                <img
                  alt="icon-dashboard"
                  className="w-5 h-5 mb-1"
                  src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/user.png?alt=media&token=ecf39dbd-d5f3-43ee-9426-5885b757d857"
                />
                <h1 className="text-primary-bir">Hesabım</h1>
                {count == 0 ? null : (
                  <div
                    className={`${
                      count === 0 ? "hidden" : ""
                    } w-6 h-6 left-28 flex items-center justify-center border-2 border-borderAndOtherRed absolute rounded-full`}
                  >
                    <h1 className="text-textColor text-xs">{count}</h1>
                  </div>
                )}
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex md:w-3/12 lg:w-1/6 h-full font-Montserrat text-sm items-center sm:justify-center lg:justify-start font-bold flex-row sm:gap-2 md:gap-3 lg:gap-4">
              <Link to="/login" className="lg:py-1 text-primary-bir">
                Giriş Yap
              </Link>
              <Link to="/register">
                <div className="w-20 sm:px-2 md:px-2 md:w-auto py-2 flex items-center justify-center lg:px-4 lg:py-2 rounded-full bg-borderAndOtherRed text-textColor text-primary-iki">
                  <h1>Kayıt Ol</h1>
                </div>
              </Link>
            </div>
          )}
        </div>
        {/* Mobil */}
        <div className="md:hidden flex text-textColor">
          <button>
            <GiHamburgerMenu size={24} color="#f0ffff" />
          </button>
        </div>
      </div>
      {/* Mobil */}
      <div className="flex md:hidden">
        <div className="w-full px-8 h-16 filter drop-shadow-xl bg-boxColor flex items-center justify-between md:justify-around text-textColor">
          <div className="w-1/6 flex items-center justify-center ">
            <img
              alt="header-logo"
              className="w-14 h-14"
              src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
            />
          </div>
          <div className="flex">
            <button onClick={() => setOpen(!open)}>
              {open ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } flex flex-col gap-2 items-center py-4`}
      >
        <Link
          to="/"
          className="w-1/2 text-textColor px-2 py-3 text-sm font-semibold flex items-center justify-center rounded-lg bg-boxColor"
        >
          Anasayfa
        </Link>
        <Link
          to="/nasil-calisir"
          className="w-1/2 text-textColor px-2 py-3 text-sm font-semibold flex items-center justify-center rounded-lg bg-boxColor"
        >
          Nasıl Çalışır?
        </Link>
        {/*<Link
          to="/businesses"
          className="w-1/2 text-textColor px-2 py-3 text-sm font-semibold flex items-center justify-center rounded-lg bg-boxColor"
        >
          İşletmeler
        </Link>*/}
        <Link
          to="/create"
          className="w-1/2 text-textColor px-2 py-3 text-sm font-semibold flex items-center justify-center rounded-lg bg-boxColor"
        >
          Oluştur
        </Link>
        {token ? (
          <span className="flex justify-center items-center w-full">
            <Link
              to="/dashboard"
              className="w-1/2 text-textColor px-2 py-3 text-sm font-semibold flex items-center justify-center rounded-lg bg-boxColor"
            >
              Hesabım
            </Link>
            {count == 0 ? null : (
              <div
                className={`${
                  count === 0 ? "hidden" : ""
                } w-6 h-6 right-28 flex items-center justify-center border-2 border-borderAndOtherRed absolute rounded-full`}
              >
                <h1 className="text-textColor text-xs">{count}</h1>
              </div>
            )}
          </span>
        ) : (
          ""
        )}
        {token ? (
          <button
            onClick={() => handleLogout()}
            className="w-1/2 text-textColor px-2 py-3 text-sm font-bold flex items-center justify-center rounded-lg bg-boxColor"
          >
            Çıkış Yap
          </button>
        ) : (
          <div className="flex gap-4 pt-4 items-center">
            <Link className="text-textColor font-semibold" to="/login">
              Giriş Yap
            </Link>
            <Link
              className="w-24 sm:px-2 md:px-2 md:w-auto py-2 flex items-center justify-center lg:px-4 lg:py-2 rounded-full bg-borderAndOtherRed text-textColor font-semibold"
              to="/register"
            >
              Kayıt Ol
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
