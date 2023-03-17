import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataCategory,
  setCategory,
} from "../pages/home/redux/categorySlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const Category = useSelector((state) => state.Category);
  const dataCategory = Category?.data.result;

  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);

  const handleCategory = (val) => {
    console.log("ini val : ", val);
    dispatch(setCategory(val));
  };
  console.log(Category);

  const kategori = ["kat1", "kat2", "kat3", "kat4", "kat5"];
  return (
    <div className="text-sm font-medium font-index">
      <div className=" p-6 px-24 flex justify-between items-center">
        <div>
          <h1 className="text-3xl">
            <img
              src="https://themewagon.github.io/ogani/img/logo.png"
              alt=""
              srcset=""
            />
          </h1>
        </div>
        <div>
          <div className=" grid grid-cols-3 gap-0  ">
            <div className=" row-span-3 relative">
              <select
                name=""
                id=""
                onChange={(e) => handleCategory(e.target.value)}
                className="border-y bg-white border-l px-5  pr-3 py-3 font-bold text-sm flex justify-around items-center w-full focus:outline-none  hover:cursor-pointer hover:bg-neutral-100"
              >
                <option value="">All Category</option>
                {dataCategory?.map((val) => (
                  <option value={val._id}>{val.name}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="focus:outline-none text-gray-400 px-3 py-3 border-y  "
              placeholder="Search Produk..."
            />
            <button className="text-white bg-emerald-600 font-extrabold text-1xl py-3 px-6  ">
              Search
            </button>
          </div>
        </div>
        <div>
          {" "}
          <i class="bi bi-person-fill mr-2"></i>login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
