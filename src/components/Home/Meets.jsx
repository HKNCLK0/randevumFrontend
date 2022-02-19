import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../main";

const Meets = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const [cookie, setCookies] = useCookies(["token"]);

  const token = cookie.token;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/meets`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="flex flex-col py-8 bg-boxColor text-textColor items-center justify-center rounded-b-lg box-shadow gap-y-4 font-Montserrat">
      <h1 className="font-bold">Aktif Randevular</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center gap-4">
          {data.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-6 md:gap-x-8">
              {data.map((meet) => (
                <div
                  key={meet._id}
                  className="w-[120px] h-40 flex flex-col text-sm items-center justify-center border-2 rounded-lg cart-shadow"
                >
                  <h1 className="font-medium text-center">{meet.date}</h1>
                  <h1 className="font-medium">{meet.clock}</h1>
                  <h1 className="font-medium text-center">
                    {meet.businessName}
                  </h1>
                  <button
                    onClick={() => navigate(`/meet/${meet._id}`)}
                    className="border-2 border-borderAndOtherRed transition-colors duration-200 font-semibold hover:text-boxColor hover:bg-textColor hover:border-transparent px-2 py-1 mt-2 rounded-lg"
                  >
                    Detay
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-medium text-sm text-textColor text-center">
              Aktif Randevunuz Bulunamadı <br /> Oluşturmak İçin{" "}
              <Link className="font-bold" to="/create">
                Buraya
              </Link>{" "}
              Tıklayın
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Meets;
