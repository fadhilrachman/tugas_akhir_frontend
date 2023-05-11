import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Alamat from "./profileComponents/Alamat";
import Biodata from "./profileComponents/Biodata";
import Pesanan from "./profileComponents/Pesanan";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [path, setPath] = useState("Biodata Diri");
  useEffect(() => {
    dispatch(getUser({ isLogin: true }));
  }, [dispatch]);
  const tab = [
    {
      name: "Biodata Diri",
    },
    {
      name: "Alamat",
    },
    {
      name: "Pesanan",
    },
  ];

  let tabs;
  switch (path) {
    case "Biodata Diri":
      tabs = <Biodata />;
      break;
    case "Alamat":
      tabs = <Alamat />;
      break;
    case "Pesanan":
      tabs = <Pesanan />;
      break;
    default:
      tabs = <Biodata />;
      break;
  }

  return (
    <div className="font-index">
      <Navbar />
      <div className="grid grid-flow-col grid-cols-4 gap-10 mx-3">
        <div className=" p-4 rounded"></div>
        <div className=" col-span-3 ">
          <div className="my-4 text-emerald-600">
            <i class="bi bi-person-fill mr-2 "></i>
            Fadhil
          </div>

          <div class="border rounded  border-gray-200  text-gray-900 ">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center border-b-gray-200  ">
              {tab.map((val) => (
                <li
                  className={`inline-flex p-4 border-b-2   px-7  hover:cursor-pointer   ${
                    val.name == path
                      ? "text-emerald-600 border-emerald-600 "
                      : ""
                  }`}
                  onClick={() => setPath(val.name)}
                >
                  {val.name}
                </li>
              ))}
            </ul>

            <div className="p-5 py-12 ">{tabs}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
