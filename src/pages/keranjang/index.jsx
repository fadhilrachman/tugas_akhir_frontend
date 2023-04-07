import React from "react";
import Navbar from "../../components/Navbar";
import { getUser } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCart } from "../../redux/KeranjangSlice";
import { useEffect } from "react";

const Keranjang = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const idUser = user.data?.result?._id;
  const keranjang = useSelector((state) => state.Keranjang);
  const dataKernjang = keranjang.data?.result;

  useEffect(() => {
    dispatch(getUser({ isLogin: true }));
    if (idUser) {
      dispatch(getAllCart(idUser && idUser));
    }
  }, [dispatch, idUser]);
  console.log(idUser);
  console.log(keranjang);
  return (
    <div className="text-gray-900 font-light">
      <Navbar />
      <div className="px-36 pt-12 grid grid-cols-3 gap-6 ">
        <div className="col-span-2">
          <h1 className="text-3xl font-medium  ">Keranjang</h1>
          <div className="mt-4 flex justify-between">
            <div>
              <input type="checkbox" className="mr-3" name="" id="" />
              Pilih Semua
            </div>
            <span className="text-emerald-600">Hapus</span>
          </div>
          <div className="w-full mt-4 rounded bg-neutral-100 h-2"></div>
          <div className="flex mt-5">
            <input type="checkbox" className="mr-4 " name="" id="" />
            <div>
              <span className="font-semibold">Jam tangan</span>
            </div>
          </div>
        </div>
        <div className="">cok</div>
      </div>
    </div>
  );
};

export default Keranjang;
