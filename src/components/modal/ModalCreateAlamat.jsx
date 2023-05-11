import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import BaseButton from "../BaseButton";
import BaseInput from "../input/BaseInput";
import TextArea from "../input/TextArea";
import * as Yup from "yup";
import Select from "../input/Select";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataPovinsi,
  getDataKabupaten,
  getDataKecamatan,
  getDataKelurahan,
} from "../../redux/regionSlice";
import { createAlamat, updateAlamat } from "../../redux/alamatSlice";
import { getUser } from "../../redux/authSlice";

const ModalCreateAlamat = ({ show, onHide, update }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth);
  const idUser = user.result?.result?._id;
  const region = useSelector((state) => state.Region);
  const dataProvinsi = region.dataProvinsi?.provinsi;
  const dataKabupten = region.dataKabupaten?.kota_kabupaten;
  const dataKecamatan = region.dataKecamatan?.kecamatan;
  const dataKelurahan = region.dataKelurahan?.kelurahan;
  const [param, setParam] = useState({
    id_provinsi: "",
    id_kabupaten: "",
    id_kecamatan: "",
  });
  const formik = useFormik({
    initialValues: {
      nama: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      detail_alamat: "",
      user: "",
    },
    onSubmit: async (values) => {
      if (update) {
        console.log("ini val ", values);
        const data = { ...values, id: update._id };
        await dispatch(updateAlamat(data));
      } else {
        await dispatch(createAlamat(values));
      }
      setParam({ id_provinsi: "", id_kabupaten: "", id_kecamatan: "" });
      formik.resetForm();
      onHide();
    },
    validationSchema: Yup.object({
      nama: Yup.string().required("nama tidak boleh kosong"),
      provinsi: Yup.string().required("provinsi tidak boleh kosong"),
      kabupaten: Yup.string().required("kabupaten tidak boleh kosong"),
      kecamatan: Yup.string().required("kecamatan tidak boleh kosong"),
      kelurahan: Yup.string().required("kelurahan tidak boleh kosong"),
      detail_alamat: Yup.string().required("detail tidak boleh kosong"),
      user: Yup.string().required("user tidak boleh kosong"),
    }),
  });

  useEffect(() => {
    dispatch(getDataPovinsi());
    dispatch(getUser({ islogin: true }));
    formik.setFieldValue("user", idUser);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDataKabupaten(param.id_provinsi));
    dispatch(getDataKecamatan(param.id_kabupaten));
    dispatch(getDataKelurahan(param.id_kecamatan));
  }, [param]);

  const handleProvinsi = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nama = selectedOption.text;
    console.log("ini id : ", nama);
    formik.setFieldValue("provinsi", nama);
    setParam({ ...param, id_provinsi: e.target.value });
    if (e.target.value === "") {
      formik.setFieldValue("kabupaten", "");
      formik.setFieldValue("kecamatan", "");
      formik.setFieldValue("provinsi", "");
      formik.setFieldValue("kelurahan", "");
      setParam({
        id_provinsi: "",
        id_kabupaten: "",
        id_kecamatan: "",
      });
    }
  };

  const handleKabupaten = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nama = selectedOption.text;
    formik.setFieldValue("kabupaten", nama);
    setParam({ ...param, id_kabupaten: e.target.value });
    if (e.target.value === "") {
      setParam({ ...param, id_kabupaten: "" });
      formik.setFieldValue("kabupaten", "");
      formik.setFieldValue("kecamatan", "");
      formik.setFieldValue("kelurahan", "");

      setParam({ ...param, id_kecamatan: "" });
    }
  };

  const handleKecamatan = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nama = selectedOption.text;
    formik.setFieldValue("kecamatan", nama);
    setParam({ ...param, id_kecamatan: e.target.value });
    if (e.target.value === "") {
      setParam({ ...param, id_kecamatan: "" });
      formik.setFieldValue("kecamatan", "");
      formik.setFieldValue("kelurahan", "");
    }
  };
  console.log(update);
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="fixed top-0 left-0 right-0 bottom-0  flex items-center  bg-fixed justify-center text-gray-900"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black  bg-fixed  bg-opacity-50"
    >
      <div className="p-8 bg-white rounded-lg font-index">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          {update ? "update Alamat" : "Buat Alamat Baru"}
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 gap-x-10"
        >
          <div className="flex flex-col mb-3">
            <label htmlFor="">Nama</label>
            <BaseInput
              class="w-96"
              name="nama"
              onChange={formik.handleChange}
              value={formik.values.nama}
              isInvalid={formik.errors.nama && formik.touched.nama}
              errMessage={formik.errors.nama}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Provinsi</label>
            <Select
              name="provinsi"
              onChange={handleProvinsi}
              value={param.id_provinsi}
              isInvalid={formik.errors.provinsi && formik.touched.provinsi}
              errMessage={formik.errors.provinsi}
            >
              <option value="">Provinsi</option>
              {dataProvinsi?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kabupaten</label>

            <Select
              disabled={!formik.values.provinsi}
              name="kabupaten"
              onChange={handleKabupaten}
              value={param.id_kabupaten}
              isInvalid={formik.errors.kabupaten && formik.touched.kabupaten}
              errMessage={formik.errors.kabupaten}
            >
              <option value="">Kabupaten</option>
              {dataKabupten?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kecamatan</label>

            <Select
              name="kecamatan"
              disabled={!formik.values.kabupaten}
              onChange={handleKecamatan}
              value={param.id_kecamatan}
              isInvalid={formik.errors.kecamatan && formik.touched.kecamatan}
              errMessage={formik.errors.kecamatan}
            >
              <option value="">Kecamatan</option>
              {dataKecamatan?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Detail Alamat</label>
            <TextArea
              name="detail_alamat"
              value={formik.values.detail_alamat}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kelurahan</label>

            <Select
              name="kelurahan"
              disabled={!formik.values.kecamatan}
              onChange={formik.handleChange}
              value={formik.values.kelurahan}
              isInvalid={formik.errors.kelurahan && formik.touched.kelurahan}
              errMessage={formik.errors.kelurahan}
            >
              <option value="">Kelurahan</option>
              {dataKelurahan?.map((val) => (
                <option value={val.nama}>{val.nama}</option>
              ))}
            </Select>
          </div>{" "}
          <div className="flex justify-end col-start-2 py-2">
            <BaseButton onClick={() => onHide()} class="b">
              Cancel
            </BaseButton>
            <BaseButton type="submit" class="ml-3">
              Submit
            </BaseButton>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default ModalCreateAlamat;
