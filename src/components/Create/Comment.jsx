import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

import { Error, Success } from "../main";

import StarRatings from "react-star-ratings";
import { Button } from "../main/UI";

//TODO:Comment Ekleme Yapılacak Ve Mevcut Commentler Görünecek

const Comment = ({ businessID }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = sessionStorage.getItem("token");

  const user = decodeToken(token);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [data, setData] = useState([]);

  const [commentMessage, setCommentMessage] = useState("");
  const [commentPoint, setCommentPoint] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/comments/${businessID}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response));
  }, [success, error]);

  const handleCreateComment = () => {
    axios
      .post(`${API_URL}/comments`, {
        businessID,
        commentPoint: 4.9,
        commentText: commentMessage,
        creatorName: user.userName,
      })
      .then(() => setSuccess("Yorum Gönderildi"))
      .catch(() =>
        setError("Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin")
      );
  };

  return (
    <div className="w-full text-textColor flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2">
        <Success success={success.length > 0}>{success}</Success>
        <Error error={error.length > 0}>{error}</Error>
        {/* TODO:Puan Ekleme Yapılacak */}
        <textarea
          onChange={(e) => setCommentMessage(e.target.value)}
          placeholder="Yorum Ekle (En Az 10 Harf)"
          className="w-full h-14 rounded-lg border-2 border-transparent outline-none transition-colors duration-300 hover:border-borderAndOtherRed focus:border-borderAndOtherRed text-boxColor font-semibold text-sm px-2 py-1"
        ></textarea>
        {commentMessage.length >= 10 ? (
          <Button onClick={handleCreateComment}>Yorum Yap</Button>
        ) : (
          ""
        )}
      </div>
      {/* TODO:Gelen Datalar Ters Çevirilecek */}
      {data.length > 0 ? (
        data.map((comment, index) => (
          <div key={index} className="border-2 px-4 py-2 rounded-lg">
            <div className="flex gap-4 items-center">
              <h1 className="font-semibold text-sm md:text-base">
                {comment.creatorName}
              </h1>
              <span className="flex gap-1 items-center">
                <StarRatings
                  rating={4.3}
                  starSpacing="1px"
                  starDimension="16px"
                  starRatedColor="#ff4757"
                  numberOfStars={5}
                />
                <h1 className="text-xs font-semibold">
                  ({comment.commentPoint})
                </h1>
              </span>
            </div>
            <p className="text-sm font-light">{comment.commentText}</p>
          </div>
        ))
      ) : (
        <h1 className="font-semibold text-center text-sm">
          Henüz Yorum Yapılmamış
        </h1>
      )}
    </div>
  );
};

export default Comment;
