import React from "react";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="border-2 px-4 py-2 text-sm rounded-lg text-textColor transition-colors duration-200 font-semibold hover:bg-textColor hover:text-boxColor hover:border-transparent border-borderAndOtherRed disabled:bg-disabledColor disabled:border-transparent disabled:text-textColor disabled:cursor-not-allowed"
    >
      {props.children}
    </button>
  );
};

export default Button;
