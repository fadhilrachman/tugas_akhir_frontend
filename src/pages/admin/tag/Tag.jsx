import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import BaseTable from "../../../components/BaseTable";
import BaseInput from "../../../components/input/BaseInput";
import { getDataTags, deleteDataTag } from "../../../redux/tagSlice";
import { useSelector, useDispatch } from "react-redux";
import ModalDelete from "../../../components/modal/ModalDelete";
import CreateAndUpdateTag from "./CreateAndUpdateTag";
const Tag = () => {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.Tag);
  const dataTag = tag.data?.result;
  const [show, setShow] = useState({
    create: false,
    delete: false,
    update: false,
    data: {},
  });
  const [id, setId] = useState("");
  useEffect(() => {
    dispatch(getDataTags());
  }, [dispatch, show]);

  const handleDelete = async () => {
    await dispatch(deleteDataTag(id));
    setShow({ ...show, delete: false });
  };

  const column = [
    {
      name: "Nama Tag",
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
  console.log(tag);
  return (
    <div className="">
      <div className="flex justify-between mb-8">
        <BaseInput placeholder="search tag..." clas="w-max" />
        <BaseButton
          class="w-max"
          onClick={() => setShow({ ...show, create: true })}
        >
          Create Tag
        </BaseButton>
      </div>
      <BaseTable
        data={dataTag}
        column={column}
        loading={tag.status == "loading"}
      />
      <CreateAndUpdateTag
        show={show.create}
        onHide={() => setShow({ ...show, create: false })}
      />
      <CreateAndUpdateTag
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

export default Tag;
