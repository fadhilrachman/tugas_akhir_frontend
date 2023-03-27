import React from "react";

const Select = (props) => {
  return (
    <select
      id="countries"
      class="bg-white border   rounded-lg focus:outline-none  px-3 py-2.5 "
      {...props}
    >
      {props.children}
    </select>
  );
};

export default Select;
