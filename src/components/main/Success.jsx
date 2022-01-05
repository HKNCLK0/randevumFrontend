import React from "react";

const Success = (props) => {
  const success = props.success;
  return (
    <h1
      className={`${
        success
          ? "border-2 px-4 py-4 border-green-400 text-green-400 font-semibold text-sm rounded-lg"
          : "hidden"
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Success;
