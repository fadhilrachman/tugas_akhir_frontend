import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";
import { getDataTags } from "../../../redux/tagSlice";
import { useSelector, useDispatch } from "react-redux";

const Tag = () => {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.Tag);
  const dataProduk = tag.data?.result;
  useEffect(() => {
    dispatch(getDataTags());
  }, [dispatch]);
  console.log(dataProduk);
  const column = [
    {
      name: "Nama Tag",
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
    <div>
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search tag..." clas="w-max" />
        <BaseButton class="w-max">Create Tag</BaseButton>
      </div>
      <BaseTable data={dataProduk} column={column} />
    </div>
  );
};

export default Tag;
