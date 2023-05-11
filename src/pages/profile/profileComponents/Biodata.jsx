import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Biodata = () => {
  const user = useSelector((state) => state.Auth);
  const data = user?.result?.result;

  return (
    <div className="flex">
      <div class="flex  ml-5 text-sm justify-around py-2  h-min w-2/4 ">
        <div className="">
          <p className="mt-7">Username</p>
          <p className="mt-7">Email</p>
        </div>

        <div>
          <p className="mt-7">{data?.username}</p>
          <p className="mt-7">{data?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
