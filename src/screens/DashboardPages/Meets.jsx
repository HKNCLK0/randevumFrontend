import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { LeftNavBar, Main, Box } from "../../components/Dashboard";
import { Error, Loader, TextFooter } from "../../components/main";
import { Link } from "react-router-dom";

const Meets = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = sessionStorage.getItem("token");
  const user = decodeToken(token);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/meets/${user.id}`)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false))
      .catch(() => setError(true));
  }, []);
  return (
    <div className="font-Montserrat">
      {/* Desktop */}
      <div className="hidden md:flex justify-between">
        <LeftNavBar page="meets" />
        <Main className="w-5/6 justify-between">
          <Box className="w-5/6">
            <h1 className="text-textColor font-bold text-xl">Randevularım</h1>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-col items-center gap-4">
                {data.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-6 md:gap-x-8">
                    {data.map((meet) => (
                      <div
                        key={meet._id}
                        className="w-[100px] h-32 flex text-textColor flex-col text-sm items-center justify-center border-2 rounded-lg cart-shadow"
                      >
                        <h1 className="font-medium">{meet.date}</h1>
                        <h1 className="font-medium">{meet.clock}</h1>
                        <h1 className="font-medium">{meet.businessName}</h1>
                        <button
                          onClick={() => alert(meet._id)}
                          className="border-2 border-borderAndOtherRed transition-colors duration-200 font-semibold hover:text-boxColor hover:bg-textColor hover:border-transparent px-2 py-1 mt-2 rounded-lg"
                        >
                          Detay
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className={`${
                      error
                        ? "hidden"
                        : "font-medium text-sm text-textColor text-center"
                    }`}
                  >
                    Aktif Randevunuz Bulunamadı <br /> Oluşturmak İçin{" "}
                    <Link className="font-bold" to="/create">
                      Buraya
                    </Link>{" "}
                    Tıklayın
                  </p>
                )}
              </div>
            )}
          </Box>
          <TextFooter />
        </Main>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-full">
          <LeftNavBar page="meets" />
        </div>
        <Main className="w-11/12 pt-20 h-[600px] pb-0 justify-between">
          <Box className="w-11/12">
            <h1 className="text-textColor font-bold text-xl">Randevularım</h1>
            <Error error={error}>
              Bir Hata Oluştu Lütfen Daha Sonra Tekrar Deneyin
            </Error>
            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-col items-center gap-4">
                {data.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-6 md:gap-x-8">
                    {data.map((meet) => (
                      <div
                        key={meet._id}
                        className="w-[100px] h-32 flex text-textColor flex-col text-sm items-center justify-center border-2 rounded-lg cart-shadow"
                      >
                        <h1 className="font-medium">{meet.date}</h1>
                        <h1 className="font-medium">{meet.clock}</h1>
                        <h1 className="font-medium">{meet.businessName}</h1>
                        <button
                          onClick={() => alert(meet._id)}
                          className="border-2 border-borderAndOtherRed transition-colors duration-200 font-semibold hover:text-boxColor hover:bg-textColor hover:border-transparent px-2 py-1 mt-2 rounded-lg"
                        >
                          Detay
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className={`${
                      error
                        ? "hidden"
                        : "font-medium text-sm text-textColor text-center"
                    }`}
                  >
                    Aktif Randevunuz Bulunamadı <br /> Oluşturmak İçin{" "}
                    <Link className="font-bold" to="/create">
                      Buraya
                    </Link>{" "}
                    Tıklayın
                  </p>
                )}
              </div>
            )}
          </Box>
          <TextFooter />
        </Main>
      </div>
    </div>
  );
};

export default Meets;
