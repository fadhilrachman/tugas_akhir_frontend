import React from "react";

const Navbar = () => {
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
          <div className="border flex items-center">
            {/* <div></div> */}
            <div className="w-36 mx-5 pr-3 font-bold text-sm flex justify-between items-center border-slate-100 border-r-2">
              <span> All Category</span>{" "}
              <i class="bi bi-caret-down-fill text-xs"></i>
            </div>
            <input
              type="text"
              className="focus:outline-none text-gray-400"
              placeholder="Search Produk..."
            />
            <button className="text-white bg-emerald-600 font-extrabold text-1xl py-3 px-6">
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
