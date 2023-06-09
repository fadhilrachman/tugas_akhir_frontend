import React, { useEffect } from "react";
import ReactModal from "react-modal";
import BaseButton from "../../../components/BaseButton";
import BaseInput from "../../../components/input/BaseInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "../../../components/input/TextArea";
import { logDOM } from "@testing-library/react";
import { getDataCategory } from "../../../redux/categorySlice";
import Select from "../../../components/input/Select";
import { getDataTags } from "../../../redux/tagSlice";
import { createdDataProduk } from "../../../redux/produkSlice";
const CreateAndUpdateProduk = ({ show, onHide, update }) => {
  const dispatch = useDispatch();
  const kategori = useSelector((state) => state.Category).data?.result;
  const tag = useSelector((state) => state.Tag).data?.result;

  useEffect(() => {
    dispatch(getDataCategory());
    dispatch(getDataTags());
  }, [dispatch]);
  console.log(kategori);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      kategori: "",
      description: "",
      image_url: "",
      tag: [],
    },
    onSubmit: async (val) => {
      await dispatch(createdDataProduk(val));
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("nama produk tidak boleh kosong"),
      price: Yup.string().required("harga tidak boleh kosong"),
      kategori: Yup.string().required("kategori  tidak boleh kosong"),
    }),
  });

  // const tag = [
  //   "burger",
  //   "jangfood",
  //   "chickent",
  //   "chickent",
  //   "chickent",
  //   "chickent",
  //   "chickent",
  //   "drink",
  //   "eat",
  // ];
  console.log(formik.values);
  const handleImage = (e) => {
    const img = e.target.value;
    formik.setFieldValue("image_url", img);
    console.log(img);
  };
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="fixed top-0 left-0 right-0 bottom-0  flex items-center  bg-fixed justify-center text-gray-900"
      // className="relative font-index left-0 right-0 flex items-center font-display justify-center text-gray-900"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      contentLabel="Example Modal"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Create Data produk
        </h2>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 gap-x-10"
        >
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              Nama Produks
            </label>
            <BaseInput
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.errors.name && formik.touched.name}
              errMessage={formik.errors.name}
            />
          </div>{" "}
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              Harga
            </label>
            <BaseInput
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              isInvalid={formik.errors.price && formik.touched.price}
              errMessage={formik.errors.price}
            />
          </div>{" "}
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              Kategori
            </label>
            <Select
              name="kategori"
              onChange={formik.handleChange}
              value={formik.values.kategori}
              isInvalid={formik.errors.kategori && formik.touched.kategori}
              errMessage={formik.errors.kategori}
            >
              <option value="">kategori</option>
              {kategori?.map((val) => (
                <option value={val._id}>{val.name}</option>
              ))}
            </Select>
          </div>{" "}
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              image produk
            </label>
            <input
              class="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
              id="multiple_files"
              name="image_url"
              onChange={handleImage}
              value={formik.values.image_url}
              type="file"
              multiple
            ></input>
          </div>
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              Deskripsi
            </label>
            <TextArea
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>{" "}
          <div className="flex flex-col mb-3 ">
            <label htmlFor="" className="mb-3">
              Tag
            </label>
            <div className="grid grid-cols-4 gap-3">
              {tag?.map((val) => (
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    value={val._id}
                    name="tag"
                    onChange={formik.handleChange}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm   dark:text-gray-300"
                  >
                    {val.name}
                  </label>
                </div>
              ))}
            </div>
          </div>{" "}
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

export default CreateAndUpdateProduk;
