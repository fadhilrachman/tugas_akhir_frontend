import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";
import {
  getDataCategory,
  deleteDataCateogry,
  updateDataCategory,
} from "../../../redux/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import CreateAndUpdateKategori from "./CreateAndUpdateKategori";
import ModalDelete from "../../../components/modal/ModalDelete";

const Kategori = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Category);
  const dataProduk = category.data?.result;
  const [show, setShow] = useState({
    create: false,
    delete: false,
    update: false,
    data: {},
  });
  const [id, setId] = useState("");
  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch, show]);

  const handleDelete = async () => {
    await dispatch(deleteDataCateogry(id));
    setShow({ ...show, delete: false });
  };

  const column = [
    {
      name: "Nama Kategori",
      index: "name",
    },
    {
      name: "Action",
      render: (val, item) => {
        return (
          <>
            {/* {val} */}
            <p
              className="text-emerald-600 hover:cursor-pointer hover:underline"
              onClick={() => {
                setShow({ ...show, update: true, data: val });
              }}
            >
              Update
            </p>{" "}
            <p
              className="text-red-600 hover:cursor-pointer hover:underline"
              onClick={() => {
                setShow({ ...show, delete: true });
                setId(val._id);
              }}
            >
              Remove
            </p>
          </>
        );
      },
    },
  ];
  console.log(category);
  return (
    <div className="">
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search kategori..." clas="w-max" />
        <BaseButton
          class="w-max"
          onClick={() => setShow({ ...show, create: true })}
        >
          Create Kategori
        </BaseButton>
      </div>
      <BaseTable
        data={dataProduk}
        column={column}
        loading={category.status == "loading"}
      />
      <CreateAndUpdateKategori
        show={show.create}
        onHide={() => setShow({ ...show, create: false })}
      />
      <CreateAndUpdateKategori
        show={show.update}
        onHide={() => setShow({ ...show, update: false })}
        update={show.data}
      />
      <ModalDelete
        show={show.delete}
        onHide={() => setShow({ ...show, delete: false })}
        destroy={handleDelete}
      />
    </div>
  );
};

export default Kategori;
