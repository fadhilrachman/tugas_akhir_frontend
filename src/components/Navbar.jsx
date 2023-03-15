import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataCategory } from "../pages/home/redux/categorySlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [category, setCategoyr] = useState({
    active: false,
    data: "All Category",
  });
  const Category = useSelector((state) => state.Category);
  const dataCategory = Category?.data.result;

  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);
  console.log(dataCategory);
  return (
    <div className="text-sm font-medium font-index">
      <div className=" p-6 px-24 flex justify-between items-center">
        <div>
          {/* <i class="bi bi-envelope-fill mr-2"></i>muhfadhilrachman@gmail.com */}
          <h1 className="text-3xl">
            <img
              src="https://themewagon.github.io/ogani/img/logo.png"
              alt=""
              srcset=""
            />
          </h1>
        </div>
        <div>
          <div className="border grid grid-cols-3 w-96">
            {/* <div></div> */}
            <div className="flex flex-col">
              <div className="w-36 px-5 pr-3 py-3 font-bold text-sm flex justify-between items-center border-slate-100 border-r-2 hover:cursor-pointer hover:bg-neutral-100">
                <span> {category.data}</span>{" "}
                <i class="bi bi-caret-down-fill text-xs"></i>
              </div>
            </div>
            <input
              type="text"
              className="focus:outline-none text-gray-400 px-3 "
              placeholder="Search Produk..."
            />
            <button className="text-white bg-emerald-600 font-extrabold text-1xl py-3 px-6 ">
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
