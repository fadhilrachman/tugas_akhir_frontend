import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoice } from "../../../redux/invoicceSlice";
const Pesanan = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const [open, setOpen] = useState(null);
  const idUser = user.data?.result?._id;
  const invoice = useSelector((state) => state.Invoice);
  const dataIvoice = invoice?.data?.result;
  console.log({ dataIvoice });
  useEffect(() => {
    dispatch(getInvoice(idUser));
  }, []);
  console.log({ open });
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
          {dataIvoice?.length != 0 ? (
            dataIvoice?.map((val, key) => {
              let totalQty = 0;
              console.log(val.order.map((val) => (totalQty += val.qty)));

              return (
                <>
                  {" "}
                  <tr className="bg-white border-b ">
                    <th
                      className={`px-6 py-4 font-medium   bg-gray-50 w-10 hover:cursor-pointer  ${
                        open != key && "-rotate-90"
                      }`}
                      onClick={() => setOpen(open != key ? key : null)}
                    >
                      <i className="bi bi-caret-down"></i>
                    </th>
                    <td className="px-6 py-4">{val.adress.nama}</td>
                    <td className="px-6 py-4">{totalQty}</td>
                    <td className="px-6 py-4">
                      <FormatRupiah value={val.orders_total} />
                    </td>
                  </tr>
                  {open == key && (
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
                      {val.order.map((item) => {
                        return (
                          <tr className="bg-white border-b ">
                            <td className="px-6 py-4">{""}</td>
                            <td className="px-6 py-4">{item.produk.name}</td>
                            <td className="px-6 py-4">{item.qty}</td>
                            <td className="px-6 py-4">
                              <FormatRupiah
                                value={item.qty * item.produk.price}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })
          ) : (
            <tr className="text-center ">
              <td colSpan={4} className="py-5">
                Tidak History Pesanan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Pesanan;
