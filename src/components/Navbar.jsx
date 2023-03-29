import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataCategory, setCategory } from "../redux/categorySlice";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../redux/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const Category = useSelector((state) => state.Category);
  const dataCategory = Category?.data.result;
  const token = localStorage.getItem("token");
  const username = user.data?.result?.username;
  const role = user.data?.result?.role;
  useEffect(() => {
    dispatch(getUser({ isLogin: true }));
    dispatch(getDataCategory());
  }, [dispatch]);

  const handleCategory = (val) => {
    dispatch(setCategory(val));
  };

  const handleLogout = async () => {
    await dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="text-sm font-medium font-index text-black">
      <div className=" p-6 px-24 flex justify-between items-center">
        <div>
          <h1 className="text-3xl">
            <Link to="/">
              <img
                src="https://themewagon.github.io/ogani/img/logo.png"
                alt=""
                srcset=""
              />
            </Link>
          </h1>
        </div>
        <div>
          <div className=" grid grid-cols-3 gap-0  ">
            <div className=" row-span-3 relative">
              <select
                name=""
                id=""
                onChange={(e) => handleCategory(e.target.value)}
                className="border-y w-56 bg-white border-l px-5  pr-3 py-3 font-bold text-sm flex justify-around items-center  focus:outline-none  hover:cursor-pointer hover:bg-neutral-100"
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
        <div className="flex items-center justify-between">
          {" "}
          <div className="relative  w-16 py-3 ">
            <div className="w-1 absolute h-1 right-8 top-1 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold p-2">
              <small>1</small>
            </div>
            <i class="bi bi-cart  text-2xl font-bold "></i>
          </div>
          {/* <i class="bi bi-person-fill mr-2"></i>login */}
          <div className="">
            {token && username ? (
              <div className="hover:cursor-pointer flex justify-center items-center group relative  py-3">
                <div className="bg-emerald-500 w-7 h-7 rounded-full"></div>
                <span className="ml-2">{username}</span>
                <div className="absolute hidden group-hover:flex hover:flex top-12 bg-white  flex-col rounded ">
                  <Link to="/profile">
                    <div className=" w-32 flex border-t justify-between border-x py-2 px-4 rounded-t hover:bg-slate-100">
                      <i class="bi bi-person-fill mr-2"></i>
                      <small>Profile</small>
                    </div>
                  </Link>
                  {role == "admin" && (
                    <Link to="/admin">
                      <div className=" w-32 flex border-t justify-between border-x py-2 px-4  hover:bg-slate-100">
                        <i class="bi bi-speedometer2"></i>
                        <small>Dashboard</small>
                      </div>
                    </Link>
                  )}

                  <div
                    className=" w-32 flex border-t justify-between border-x py-2 px-4 rounded-b hover:bg-slate-100"
                    onClick={handleLogout}
                  >
                    <i class="bi bi-box-arrow-left"></i>
                    <small>Logout</small>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  className="bg-white  border border-emerald-600 text-emerald-600 rounded py-2 px-4"
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </button>{" "}
                <button
                  className="bg-emerald-600 text-white rounded ml-3 py-2 px-4"
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </button>
              </>
            )}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
