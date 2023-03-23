import React from "react";

const BaseButton = (props) => {
  return (
    <button
      className={`w-full bg-green-600 rounded text-white py-2 ${props.class}`}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
