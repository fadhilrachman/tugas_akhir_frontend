import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Alamat from "../profile/profileComponents/Alamat";
import Biodata from "../profile/profileComponents/Biodata";
import Pesanan from "../profile/profileComponents/Pesanan";
import Dashboard from "./dashboard";
import Kategori from "./kategori/Kategori";
import Produk from "./produk/Produk";
import Tag from "./tag/Tag";

const Admin = () => {
  const [path, setPath] = useState("Dashboard");
  const tab = [
    {
      name: "Dashboard",
    },
    {
      name: "Produk",
    },
    {
      name: "Kategori",
    },
    {
      name: "Tag",
    },
  ];

  let tabs;
  switch (path) {
    case "Dashboard":
      tabs = <Dashboard />;
      break;
    case "Produk":
      tabs = <Produk />;
      break;
    case "Kategori":
      tabs = <Kategori />;
      break;
    case "Tag":
      tabs = <Tag />;
      break;
    default:
      tabs = <Biodata />;
      break;
  }

  return (
    <div className="font-index">
      <Navbar />
      <div className="grid grid-flow-col grid-cols-4 gap-10 mx-3">
        <div className="border p-4 rounded">cok</div>
        <div className=" col-span-3 ">
          <div className="my-4 text-emerald-900">
            <i class="bi bi-speedometer2 mr-2"></i>
            Dashboard
          </div>

          <div class="border rounded  border-gray-200   ">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center border-b-gray-200  ">
              {tab.map((val) => (
                <li
                  className={`inline-flex p-4 border-b-2   px-7  hover:cursor-pointer  ${
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

export default Admin;
