import React from "react";

const Box = (props) => {
  return (
    <div
      className={`w-5/6 py-6 flex flex-col gap-8 items-center rounded-lg box-shadow bg-boxColor ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Box;
