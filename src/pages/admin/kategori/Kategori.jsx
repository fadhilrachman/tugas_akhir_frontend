import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";
import { getDataCategory } from "../../../redux/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import CreateKategori from "./CreateKategori";

const Kategori = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Category);
  const dataProduk = category.data?.result;
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch, show]);
  console.log(dataProduk);
  const column = [
    {
      name: "Nama Kategori",
      index: "name",
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
    <div className="">
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search kategori..." clas="w-max" />
        <BaseButton class="w-max" onClick={() => setShow(true)}>
          Create Kategori
        </BaseButton>
      </div>
      <BaseTable data={dataProduk} column={column} />
      <CreateKategori show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Kategori;
