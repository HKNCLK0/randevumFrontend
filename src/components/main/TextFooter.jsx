import React from "react";

const TextFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <h1 className="font-medium text-sm text-disabledColor block">
      Randevum © {year} || All Rights Reserved
    </h1>
  );
};

export default TextFooter;
