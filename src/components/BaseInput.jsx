import React from "react";

const BaseInput = (props) => {
  return (
    <input
      {...props}
      className={`focus:outline-none w-full text-neutral-500 border rounded px-3 py-2 ${props.class}`}
    />
  );
};

export default BaseInput;
