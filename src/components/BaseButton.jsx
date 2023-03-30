import React from "react";

const BaseButton = (props) => {
  let bg;
  switch (props.variant) {
    case "white":
      bg = "bg-white text-emerald-600 border border-emerald-600";
      break;
    case "delete":
      bg = "bg-red-600 text-white";
      break;
    default:
      bg = "bg-emerald-600 text-white";
      break;
  }
  return (
    <button
      {...props}
      className={`w-full ${bg} rounded px-3 focus:outline-none  py-2 ${props.class}`}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
