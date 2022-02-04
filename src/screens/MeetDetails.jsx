import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Header, Loader } from "../components/main";
import SuccessModal from "../components/main/Modals/SuccessModal";

import { Button, MainContainer } from "../components/main/UI";

const MeetDetails = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const { meetID } = useParams();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [cookie, setCookies] = useCookies(["token"]);

  const token = cookie.token;

  const [data, setData] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/meets/getByMeetID/${meetID}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async () => {
    await axios
      .delete(`${API_URL}/meets/${meetID}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => setSuccess(true));
  };
  return (
    <>
      <Header />
      <MainContainer>
        <div className="w-11/12 md:w-4/5 flex flex-col gap-8 items-center bg-boxColor box-shadow py-8 rounded-lg">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl text-textColor">Randevu Detay</h1>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="text-center flex flex-col gap-4">
              <h1 className="text-textColor font-bold">{data.businessName}</h1>
              <h1 className="text-textColor font-bold">
                {data.date} - {data.clock}
              </h1>
              <Button onClick={handleDelete}>İptal Et</Button>
            </div>
          )}
        </div>
        <SuccessModal
          isOpen={success}
          setIsOpen={setSuccess}
          title="Randevu Silindi"
          subtitle="Randevunuz Başarıyla İptal Edilmiştir!"
          buttonText="Tamam"
          buttonNavigateURL="/"
        />
      </MainContainer>
    </>
  );
};

export default MeetDetails;
