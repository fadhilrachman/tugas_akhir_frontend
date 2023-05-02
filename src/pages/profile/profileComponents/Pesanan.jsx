import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoice } from "../../../redux/invoicceSlice";
const Pesanan = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const [open, setOpen] = useState(false);
  const idUser = user.data?.result?._id;
  const invoice = useSelector((state) => state.Invoice);
  const dataIvoice = invoice?.data?.result;
  console.log({ dataIvoice });
  useEffect(() => {
    dispatch(getInvoice(idUser));
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Total Barang
            </th>
            <th scope="col" className="px-6 py-3">
              Total Harga
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              className={`px-6 py-4 font-medium   bg-gray-50 w-10 hover:cursor-pointer  ${
                !open && "-rotate-90"
              }`}
              onClick={() => setOpen(!open)}
            >
              <i className="bi bi-caret-down"></i>
            </th>
            <td className="px-6 py-4">Muhammad Fadhil Rahman</td>
            <td className="px-6 py-4">21</td>
            <td className="px-6 py-4">Rp.20.000.00</td>
          </tr>
          {open && (
            <>
              <tr className="text-xs text-gray-700 uppercase bg-gray-50">
                <th scope="col" className="px-6 py-3">
                  {""}
                </th>
                <th scope="col" className="px-6 py-3">
                  Barang
                </th>
                <th scope="col" className="px-6 py-3">
                  Jumlah
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">{""}</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Pesanan;
