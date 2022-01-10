import React from "react";

const BusinessCard = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-boxColor text-center w-2/3 md:w-1/4 py-8 rounded-lg font-semibold text-textColor text-sm transition-colors duration-200 hover:bg-textColor hover:text-boxColor"
    >
      {props.children}
    </a>
  );
};

export default BusinessCard;
