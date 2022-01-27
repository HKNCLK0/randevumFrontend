import React from "react";

const Main = (props) => {
  return (
    <main className={`${props.className} flex flex-col items-center py-16`}>
      {props.children}
    </main>
  );
};

export default Main;
