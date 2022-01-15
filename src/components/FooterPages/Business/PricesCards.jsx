import React from "react";

const PricesCards = (props) => {
  const { title } = props;
  return (
    <div className="w-1/4 flex justify-center py-4 rounded-lg bg-background box-shadow">
      <h1 className="text-textColor font-bold text-xl">{title}</h1>
    </div>
  );
};

export default PricesCards;
