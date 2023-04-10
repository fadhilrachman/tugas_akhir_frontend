import React from "react";
import Navbar from "../../components/Navbar";
import { getUser } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCart } from "../../redux/KeranjangSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import BaseButton from "../../components/BaseButton";
import { FormatRupiah } from "@arismun/format-rupiah";
const Keranjang = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const idUser = user.data?.result?._id;
  const keranjang = useSelector((state) => state.Keranjang);
  const dataKernjang = keranjang.data?.result;
  const [qty, setQty] = useState(0);
  let total = 0;

  const formik = useFormik({
    initialValues: {
      data: [],
    },
  });
  formik.values.data.length != 0 &&
    formik.values.data.map((val) => (total += val.qty * parseInt(val.price)));
  useEffect(() => {
    dispatch(getUser({ isLogin: true }));
    if (idUser) {
      dispatch(getAllCart(idUser && idUser));
    }
  }, [dispatch, idUser]);

  const handleChart = (val) => {
    const isKeyExist = formik.values.data.some((item) => item.key === val.key);
    const deleteItem = formik.values.data.filter(
      (item) => item.key !== val.key
    );
    if (!isKeyExist) {
      return formik.setFieldValue("data", [...formik.values.data, val]);
    }
    formik.setFieldValue("data", deleteItem);
  };
  console.log(formik.values.data);

  const handleQty = (key) => {
    let inCrementQty = [...formik.values.data];
    inCrementQty[key].qty = inCrementQty[key].qty + 1;
    formik.setFieldValue("data", inCrementQty);
  };
  const produk = [
    {
      name: "jam tangan",
      category: "kebutuhan",
      price: "20000",
      deskripsi: "jam tangan murah dari kulit buaya",
      qty: 1,
    },
    {
      name: "Pepaya",
      category: "buah",
      price: "22000",
      deskripsi: "Pepaya segar dari jerman",
      qty: 1,
    },
    {
      name: "Sop buah",
      category: "makanan",
      price: "20000",
      deskripsi: "Sop buah buatan mak endang",
      qty: 1,
    },
  ];
  console.log(formik.values.data);
  return (
    <div className="text-gray-900 font-light">
      <Navbar />
      <div className="px-36 pt-12 grid grid-cols-3 gap-6 ">
        <div className="col-span-2">
          <h1 className="text-3xl font-medium  ">Keranjang</h1>
          <div className="mt-4 flex justify-between">
            <div>
              <input type="checkbox" className="mr-3" id="" />
              Pilih Semua
            </div>
            <span className="text-emerald-600">Hapus</span>
          </div>
          <div className="w-full mt-4 rounded bg-neutral-100 h-2"></div>
          {produk.map((val, key) => (
            <>
              <div className="flex mt-5 items-start ">
                <input
                  type="checkbox"
                  className="mr-4"
                  onChange={() => handleChart({ ...val, key })}
                  name="data"
                  id=""
                />
                <div className="w-full">
                  <p className="font-semibold">{val.name}</p>
                  <small className="text-neutral-500">{val.category}</small>
                  <div className="flex">
                    <img
                      src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/2/24/16083d95-3271-4b29-86ff-be3bf84a6c4c.jpg.webp?ect=4g"
                      alt=""
                      className="mt-3 w-20 h-20 mr-4"
                    />
                    <div>
                      <p>{val.deskripsi}</p>
                      <p className="mt-3 text-emerald-600 text-2xl">
                        Rp.{val.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl flex   w-28 mt-3  mx-auto justify-between">
                    <i
                      className="bi bi-dash-circle cursor-pointer"
                      onClick={() => qty > 0 && setQty(qty - 1)}
                    ></i>
                    <span className="">
                      {val.qty || formik.values.data[key].qty}
                    </span>
                    <i
                      className="bi bi-plus-circle cursor-pointer"
                      onClick={() => handleQty(key)}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4 rounded bg-neutral-100 h-2"></div>
            </>
          ))}
        </div>
        <div className=" shadow-lg  h-max rounded py-8    px-5">
          <div>
            <h1 className="font-medium text-lg">Ringkasan Belanja</h1>
            {formik.values.data.length != 0 ? (
              formik.values.data.map((val) => (
                <div className="mt-3 text-neutral-500 flex justify-between">
                  <span>
                    {val.name}({val.qty})
                  </span>
                  <span>
                    <FormatRupiah value={val.qty * parseInt(val.price)} />
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center mt-3 w-full">-</div>
            )}
          </div>
          <div className="mt-5 flex items-center justify-between font-medium text-lg">
            <h1 className="">Total Harga</h1>
            <h1>
              <FormatRupiah value={total} />
            </h1>
          </div>
          <BaseButton class="mt-5">Beli</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
