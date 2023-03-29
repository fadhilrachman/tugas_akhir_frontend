import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";
import { getDataProduks } from "../../../redux/produkSlice";
import { useSelector, useDispatch } from "react-redux";

const Produk = () => {
  const dispatch = useDispatch();
  const produk = useSelector((state) => state.Produk);
  const dataProduk = produk.data?.result;

  useEffect(() => {
    dispatch(getDataProduks());
  }, [dispatch]);

  const column = [
    {
      name: "gambar",
      index: "image_url",
      className: "w-min ",
      render: (item, val) => (
        <img
          src={process.env.REACT_APP_API + "/" + val}
          className="w-20 mx-auto"
          alt=""
        />
      ),
    },
    {
      name: "Nama Produk",
      index: "name",
    },
    {
      name: "Harga",
      index: "price",
    },
    {
      name: "Kategori",
      index: "category",
      render: (item, val) => <>{val?.name}</>,
    },
    {
      name: "tag",
      index: "tag",
      render: (item, val) =>
        val.map((tag) => <p className="text-left">- {tag.name}</p>),
    },
    {
      name: "Deskripsi",
      index: "description",
    },
    {
      name: "Action",
      render: () => (
        <>
          <p className="text-emerald-600 hover:cursor-pointer hover:underline">
            Update
          </p>{" "}
          <p className="text-red-600 hover:cursor-pointer hover:underline">
            Remove
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search produk..." clas="w-max" />
        <BaseButton class="w-max">Create Produk</BaseButton>
      </div>
      <BaseTable data={dataProduk} column={column} />
    </div>
  );
};

export default Produk;
