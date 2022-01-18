import React from "react";

const MainContainer = (props) => {
  return (
    <main className="w-full py-16 flex flex-col items-center font-Montserrat gap-10">
      {props.children}
    </main>
  );
};

export default MainContainer;
