import React from "react";

const Error = (props) => {
  const error = props.error;
  return (
    <h1
      className={`${
        error
          ? "border-2 px-4 py-4 border-borderAndOtherRed text-borderAndOtherRed font-semibold text-sm rounded-lg"
          : "hidden"
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Error;
