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
            <button className="text-white bg-green-500 font-extrabold text-1xl py-3 px-6">
              Search
            </button>
          </div>
        </div>
        <div>
          {" "}
          <i class="bi bi-person-fill mr-2"></i>login
        </div>
      </div>
      <img
        // src="https://img-cdn.medkomtek.com/e9rOlqEYKr_bbhp9Nk4nJDC4lFs=/0x0/smart/filters:quality(75):strip_icc():format(webp)/article/IDAAIeoGFsdRns-wCBA4Y/original/014055800_1604479989-Mau-Diet-Hindari-Makan-Buah-Buah-Tinggi-Kalori-Ini-shutterstock_770613370.jpg"
        alt=""
        src="https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870264.jpg?size=626&ext=jpg&ga=GA1.2.1056913818.1672935173&semt=sph"
        className="w-screen h-44 "
      />
      <div className="h-44 bg-black w-screen bg-opacity-50 absolute top-24 text-white font-bold flex flex-col justify-center items-center">
        <span className="text-3xl">Organi Shop</span>
        <span>Home-Shop</span>
      </div>
    </div>
  );
};

export default Navbar;
