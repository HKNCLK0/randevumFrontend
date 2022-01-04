import React from "react";

const MainContainer = (props) => {
  return (
    <main className="w-full my-16 flex flex-col items-center font-Montserrat gap-16">
      {props.children}
    </main>
  );
};

export default MainContainer;
