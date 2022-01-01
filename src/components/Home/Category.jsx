import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../main";

const Category = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/category`)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-boxColor px-4 py-4 rounded-lg font-Montserrat box-shadow gap-6">
      <h1 className="font-bold text-textColor">Kategoriler</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-16 gap-y-6 md:gap-x-14">
          {data.map((category) => (
            <Link
              to={category.urlParams}
              className="w-24 h-28 text-center gap-2 border-2 rounded-lg border-borderAndOtherRed transition-colors duration-200 hover:bg-borderAndOtherRed flex flex-col items-center justify-center cart-shadow"
            >
              <img
                src={category.imageURL}
                className="w-10 h-10"
                alt="categoryImage"
              />
              <h1 className="font-semibold text-sm text-textColor">
                {category.categoryName}
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
