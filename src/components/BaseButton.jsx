import React from "react";

const BaseButton = (props) => {
  return (
    <button
      {...props}
      className={`w-full bg-green-600 rounded px-3 text-white py-2 ${props.class}`}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
