import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

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
  return (
    <div className="w-full text-textColor">
      {data.map((comment, index) => (
        <div key={index} className="border-2 px-4 py-2 rounded-lg">
          <h1 className="font-semibold text-sm md:text-base">
            {comment.creatorName}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Comment;
