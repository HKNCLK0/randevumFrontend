import React from "react";

const Main = (props) => {
  return (
    <main className="flex flex-col w-5/6 items-center py-16">
      {props.children}
    </main>
  );
};

export default Main;
