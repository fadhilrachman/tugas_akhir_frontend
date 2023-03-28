import React from "react";

const Biodata = () => {
  return (
    <div className="flex">
      <div className=" border shadow-lg p-5 rounded w-min">
        <div className="h-56 w-56 bg-emerald-600 rounded"></div>
        <button className="text-emerald-600 border mt-3 w-full rounded py-2">
          Pilih Foto
        </button>
      </div>
      <div class="flex  ml-5 text-sm justify-around py-2  h-min w-2/4 ">
        <div className="">
          <p>Username</p>
          <p className="mt-7">Email</p>
          <p className="mt-7">Tanggal Lahir</p>
          <p className="mt-7">email</p>
        </div>

        <div>
          <p>Muhammad Fadhil Rahman</p>
          <p className="mt-7">muhfadhilrachman@gmail.com</p>
          <p className="mt-7">-</p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
