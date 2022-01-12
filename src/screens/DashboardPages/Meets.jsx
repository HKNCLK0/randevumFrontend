import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { LeftNavBar, Main, Box } from "../../components/Dashboard";
import { Error, Loader } from "../../components/main";
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
    <div className="flex justify-between font-Montserrat">
      <LeftNavBar page="meets" />
      <Main className="flex flex-col w-5/6 items-center py-16">
        <Box className="w-5/6 py-6 flex flex-col gap-8 items-center rounded-lg box-shadow bg-boxColor">
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
      </Main>
    </div>
  );
};

export default Meets;
