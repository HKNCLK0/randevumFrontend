import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Error, Header, Loader } from "../components/main";
import { Box, Button, MainContainer } from "../components/main/UI";

import { useCookies } from "react-cookie";

import SuccessModal from "../components/main/Modals/SuccessModal";
import NotAuthModal from "../components/main/Modals/NotAuthModal";
import Comment from "../components/Create/Comment";

import City from "../City";

//BUG:Mobilde Seçilen İptal Edilirken Görsel Problem Var

//TODO:Giriş Yapmadan Saatler Ve Doluluk Görünecek Ama Seçim Yapılamayacak

const Create = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [cookie, setCookies] = useCookies(["token"]);

  const token = cookie.token;

  const { businessID } = useParams();
  const [data, setData] = useState([]);

  const [selectedDate, setSelecetedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [loginAlertModal, setIsLoginAlertModal] = useState(false);

  const [doluSaat, setDoluSaat] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/businesses/${businessID}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => setData(res.data));

      axios
        .get(`${API_URL}/meets/business/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) =>
          res.data.map((meet) => {
            setDoluSaat((before) => [
              ...before,
              { clock: meet.clock, date: meet.date },
            ]);
          })
        );
    } else {
      setIsLoginAlertModal(true);
    }
  }, []);

  const handleCreate = () => {
    setError(false);
    axios
      .post(
        `${API_URL}/meets`,
        {
          businessID,
          businessName: data.businessName,
          date: selectedDate,
          clock: selectedTime,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => setIsOpen(true))
      .catch(() => {
        setError(true);
        setErrorMessage(
          "Randevu Oluşturulamıyor! Lütfen Daha Sonra Tekrar Deneyin Veya Destekle İletişime Geçin!"
        );
      });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Box className="w-11/12 md:w-4/5">
          <h1 className="font-bold md:text-xl text-textColor">Oluştur</h1>
          <Error error={error}>{errorMessage}</Error>
          {data ? (
            <div className="flex flex-col md:flex-row gap-8 md:gap-x-12 w-full px-4 md:px-16">
              <img
                src={data.businessImage}
                alt="businessImage"
                className="w-full md:w-1/3"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-textColor text-lg font-semibold">
                  {data.businessName}
                </h1>
                <h1 className="text-textColor text-sm">
                  {data.businessCategory}
                </h1>
                <p className="text-textColor pt-4 text-sm">
                  {data.businessAddress} <br />{" "}
                  {data.businessIlce
                    ? data.businessIlce[0] +
                      data.businessIlce.substr(1).toLowerCase()
                    : ""}{" "}
                  /{" "}
                  {data.businessCountry
                    ? City[data.businessCountry - 1].name
                    : null}
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-textColor font-semibold text-sm">
                      Randevu Tarihini Seçiniz
                    </h1>
                    {data.businessMeetDates &&
                    data.businessMeetDates.length > 0 ? (
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4">
                        {data.businessMeetDates.map((meetDate, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setSelecetedDate(
                                meetDate === selectedDate ? "" : meetDate
                              )
                            }
                            className={`${
                              selectedDate === meetDate
                                ? "border-transparent bg-textColor text-boxColor"
                                : "text-textColor border-borderAndOtherRed "
                            } border-2 font-semibold px-2 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-textColor hover:text-boxColor hover:border-transparent`}
                          >
                            {meetDate}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <h1 className="text-sm text-textColor font-semibold">
                        Bu İşletme İle İlgili Saat Bilgisi Bulunamadı!
                      </h1>
                    )}
                  </div>
                  <div
                    className={`${
                      selectedDate.length ? "" : "hidden"
                    } flex flex-col gap-2`}
                  >
                    <h1 className="text-textColor font-semibold text-sm">
                      Randevu Saatini Seçiniz
                    </h1>
                    {selectedDate.length > 0 ? (
                      data.businessMeetTimes ? (
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2">
                          {data.businessMeetTimes.map((meetTime, index) => {
                            return (
                              <button
                                key={index}
                                disabled={doluSaat.find((saat) =>
                                  saat.date == selectedDate
                                    ? saat.clock == meetTime
                                      ? true
                                      : false
                                    : null
                                )}
                                onClick={() =>
                                  setSelectedTime(
                                    meetTime === selectedTime ? "" : meetTime
                                  )
                                }
                                className={`${
                                  selectedTime === meetTime
                                    ? "border-transparent bg-textColor text-boxColor"
                                    : "text-textColor border-borderAndOtherRed"
                                } border-2 font-semibold disabled:bg-disabledColor disabled:border-transparent disabled:text-textColor disabled:cursor-not-allowed px-2 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-textColor hover:text-boxColor hover:border-transparent`}
                              >
                                {meetTime}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <Loader />
                      )
                    ) : (
                      <h1 className="text-textColor font-semibold">
                        Lütfen Önce Randevu Tarihi Seçiniz
                      </h1>
                    )}
                  </div>
                </div>
                <div className="w-full flex justify-center pt-4">
                  <Button
                    onClick={handleCreate}
                    disabled={!selectedTime || !selectedDate}
                  >
                    Randevu Oluştur
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </Box>
        {/* TODO:Yorum Ekleme Yapılacak */}
        {/*<Box className="w-11/12 md:w-4/5 md:px-32 px-6">
          <h1 className="font-bold md:text-xl text-textColor">
            Değerlendirmeler
          </h1>
          <Comment businessID={businessID} />
          </Box>*/}
        <SuccessModal
          isOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title="Randevu Oluşturuldu"
          subtitle={`${selectedDate} tarihli, ${selectedTime} saatli ${data.businessName} randevunuz oluşturulmuştur`}
          buttonText="Tamam"
          buttonNavigateURL="/"
        />
        <NotAuthModal
          isOpen={loginAlertModal}
          setIsOpen={setIsLoginAlertModal}
          title="Giriş Yap"
          subtitle="Devam Etmek İçin Lütfen Giriş Yapın!"
          buttonText="Giriş Yap"
          buttonNavigateURL="/login"
        />
      </MainContainer>
    </>
  );
};

export default Create;
