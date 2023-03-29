import React from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";

const Produk = () => {
  const column = [
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
    },
    {
      name: "tag",
      index: "tag",
    },
    {
      name: "Nama Produk",
    },
  ];
  const data = [
    {
      produk: "prod1",
    },
  ];
  return (
    <div>
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search produk..." clas="w-max" />
        <BaseButton class="w-max">Create Produk</BaseButton>
      </div>
      <BaseTable data={data} column={column} />
    </div>
  );
};

export default Produk;
