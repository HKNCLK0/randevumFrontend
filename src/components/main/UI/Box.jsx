import React from "react";

const Box = (props) => {
  return (
    <div
      className={`${props.className} flex flex-col gap-4 items-center bg-boxColor box-shadow py-8 rounded-lg`}
    >
      {props.children}
    </div>
  );
};

export default Box;
