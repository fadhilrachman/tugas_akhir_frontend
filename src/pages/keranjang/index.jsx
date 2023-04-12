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
import { Link } from "react-router-dom";
const Keranjang = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const idUser = user.data?.result?._id;
  const keranjang = useSelector((state) => state.Keranjang);
  const dataKernjang = keranjang.data?.result;
  const [page, setPage] = useState("keranjang");
  let total = 0;

  const formik = useFormik({
    initialValues: {
      groceries: [],
    },
  });
  formik.values.groceries.length != 0 &&
    formik.values.groceries.map(
      (val) => (total += val.qty * parseInt(val.produk.price))
    );
  useEffect(() => {
    dispatch(getUser({ isLogin: true }));
    if (idUser) {
      dispatch(getAllCart(idUser && idUser));
    }
  }, [dispatch, idUser]);

  const handleChart = (val) => {
    const isKeyExist = formik.values.groceries.some(
      (item) => item.key === val.key
    );
    const deleteItem = formik.values.groceries.filter(
      (item) => item.key !== val.key
    );
    if (!isKeyExist) {
      console.log(val);
      return formik.setFieldValue("groceries", [
        ...formik.values.groceries,
        val,
      ]);
    }
    formik.setFieldValue("groceries", deleteItem);
  };

  const handleIncrementQty = (key) => {
    // const isKeyExist = formik.values.groceries.some((item) => item.key === key);

    let inCrementQty = [...formik.values.groceries];
    inCrementQty.map((val) => (val.key == key ? (val.qty = val.qty + 1) : ""));

    formik.setFieldValue("groceries", inCrementQty);
  };
  const handleDecrementQty = (key) => {
    let inDecrementQty = [...formik.values.groceries];
    inDecrementQty.map((val) =>
      val.key == key && val.qty > 0 ? (val.qty = val.qty - 1) : ""
    );

    formik.setFieldValue("groceries", inDecrementQty);
  };
  console.log(formik.values.groceries);

  return (
    <div className="text-gray-900 font-light">
      <Navbar />
      <div className="px-36 pt-12 grid grid-cols-3 gap-6 ">
        <div className="col-span-2">
          <h1 className="text-3xl font-medium  ">{page}</h1>
          <div className="w-full mt-4 rounded bg-neutral-100 h-2"></div>
          {page == "keranjang" ? (
            keranjang.status == "loading" ? (
              <div className="h-10 w-10 col-start-2  mx-auto my-5 rounded-full border-emerald-600 border-2 border-b-white animate-spin"></div>
            ) : dataKernjang?.length != 0 ? (
              dataKernjang?.map((val, key) => (
                <>
                  <div className="flex mt-5 items-start ">
                    <input
                      type="checkbox"
                      className="mr-4"
                      onChange={() => handleChart({ ...val, key })}
                      name="groceries"
                      id=""
                    />
                    <div className="w-full">
                      <p className="font-semibold">{val.produk.name}</p>
                      <small className="text-neutral-500">
                        {val.produk.category?.name}
                      </small>
                      <div className="flex">
                        <img
                          src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/2/24/16083d95-3271-4b29-86ff-be3bf84a6c4c.jpg.webp?ect=4g"
                          alt=""
                          className="mt-3 w-20 h-20 mr-4"
                        />
                        <div>
                          <p>{val.produk.description || "-"}</p>
                          <p className="mt-3 text-emerald-600 text-2xl">
                            Rp.{val.produk.price}
                          </p>
                        </div>
                      </div>
                      <div className="text-2xl flex   w-28 mt-3  mx-auto justify-between">
                        <i
                          className="bi bi-dash-circle cursor-pointer"
                          onClick={() => handleDecrementQty(key)}
                        ></i>
                        <span className="">
                          {/* {formik.values.groceries.filter(
                        (item) => item.key == val.key
                      )[0].qty || val.qty} */}
                          1
                        </span>
                        <i
                          className="bi bi-plus-circle cursor-pointer"
                          onClick={() => handleIncrementQty(key)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4 rounded bg-neutral-100 h-2"></div>
                </>
              ))
            ) : (
              <div className="w-80 mx-auto  mt-5">
                <span className="text-neutral-300 text-2xl font-lg">
                  Keranjang Belanjamu Kosong
                </span>
                <div className="w-6/12 mx-auto mt-5">
                  <Link to="/">
                    <BaseButton class="">Mulai Belanja</BaseButton>
                  </Link>
                </div>
              </div>
            )
          ) : (
            <div className=" mt-5">
              <div className="mb-5 border-b py-5">
                <p className="font-medium text-base border-b pb-3">
                  Alamat Pengiriman
                </p>
                <div className="mt-3 text-sm flex justify-between items-center px-3 ">
                  <div>
                    <p className="font-medium text-emerald-600 mb-2">Fadhil</p>
                    <p>
                      Provinsi Jawa Barat Kabupaten Garut Kelurahan Sirnajaya{" "}
                    </p>
                    <small>Samping masjid</small>
                  </div>
                  <span className="text-emerald-600">pilih alamat</span>
                </div>
              </div>
              <div className="">
                <p className="font-medium text-base border-b pb-3">
                  List Barang
                </p>
                {formik.values.groceries?.map((val) => (
                  <div className="mt-3 px-3">
                    <p className="font-medium text-emerald-600 ">
                      {val?.produk.name}
                    </p>
                    <small className="text-neutral-400">
                      {val?.produk.category.name}
                    </small>
                    <div className=" flex justify-between pr-5 items-center">
                      <div className="flex">
                        <img
                          src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/2/24/16083d95-3271-4b29-86ff-be3bf84a6c4c.jpg.webp?ect=4g"
                          alt=""
                          className="mt-2 w-14 h-1w-14 mr-4"
                        />
                        <div className="text-sm">
                          <p>{val?.produk.description}</p>
                          <p>Jumlah barang : {val?.qty}</p>
                          <p className="">
                            harga : <FormatRupiah value={val?.produk.price} />
                          </p>
                        </div>
                      </div>
                      <div className="text-emerald-600">
                        Total :{" "}
                        <FormatRupiah value={val.qty * val?.produk.price} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className=" shadow-lg  h-max rounded py-8    px-5">
          <div>
            <h1 className="font-medium text-lg">Ringkasan Belanja</h1>
            {formik.values.groceries.length != 0 ? (
              formik.values.groceries.map((val) => (
                <div className="mt-3 text-neutral-500 flex justify-between">
                  <span>
                    {val.produk.name}({val.qty})
                  </span>
                  <span>
                    <FormatRupiah
                      value={val.qty * parseInt(val.produk.price)}
                    />
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
          <BaseButton
            class="mt-5"
            disabled={formik.values.groceries.length == 0}
            onClick={() => setPage("checkout")}
          >
            Beli
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
