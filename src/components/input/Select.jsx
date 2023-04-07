import React from "react";

const Select = (props) => {
  return (
    <>
      <select
        id="countries"
        // class="bg-white border   rounded-lg focus:outline-none   "
        className={`focus:outline-none focus:border-emerald-600 w-full bg-white text-gray-900 border rounded-lg px-3 py-2.5 ${
          props.class
        } ${props.isInvalid ? "border-red-500 " : ""}`}
        {...props}
        disabled={props.disabled}
      >
        {props.children}
      </select>
      {props.isInvalid && (
        <small className="text-red-500">{props.errMessage}</small>
      )}
    </>
  );
};

export default Select;
