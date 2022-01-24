import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

import StarRatings from "react-star-ratings";

//TODO:Comment Ekleme Yapılacak Ve Mevcut Commentler Görünecek

const Comment = ({ businessID }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = sessionStorage.getItem("token");

  const user = decodeToken(token);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/comments/${businessID}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  const handleCreateComment = () => {
    alert("Create Comment");
  };

  return (
    <div className="w-full text-textColor flex flex-col gap-4">
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
