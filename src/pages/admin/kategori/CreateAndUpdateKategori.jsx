import React, { useEffect } from "react";
import ReactModal from "react-modal";
import BaseButton from "../../../components/BaseButton";
import BaseInput from "../../../components/input/BaseInput";
import { useFormik } from "formik";
import {
  createDataCategory,
  updateDataCategory,
} from "../../../redux/categorySlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const CreateAndUpdateKategori = ({ show, onHide, update }) => {
  const dispatch = useDispatch();
  console.log("ini data", update);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (val) => {
      if (update) {
        await dispatch(updateDataCategory({ id: update._id, name: val.name }));
      } else {
        await dispatch(createDataCategory(val));
      }
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("nama kategori tidak boleh kosong"),
    }),
  });

  useEffect(() => {
    formik.setFieldValue("name", update?.name);
  }, [update]);
  console.log(formik.touched);
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="fixed font-index top-0 left-0 right-0 bottom-0 flex items-center font-display justify-center text-gray-900"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      contentLabel="Example Modal"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Create Data Kategori
        </h2>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col my-4 ">
            <label htmlFor="" className="mb-3">
              Nama Kategori
            </label>
            <BaseInput
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.errors.name && formik.touched.name}
              errMessage={formik.errors.name}
            />
          </div>
          <div className="flex justify-end">
            <BaseButton variant="white" onClick={() => onHide()}>
              Cancel
            </BaseButton>
            <BaseButton class="ml-3" type="submit">
              Submit
            </BaseButton>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default CreateAndUpdateKategori;
