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
const ModalDelete = ({ show, onHide, destroy }) => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.Region);
  const dataProvinsi = region.dataProvinsi?.provinsi;
  const formik = useFormik({
    initialValues: {
      nama: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      detai_alamat: "",
      user: "",
    },
    validationSchema: Yup.object({
      nama: Yup.string().required("nama tidak boleh kosong"),
      provinsi: Yup.string().required("provinsi tidak boleh kosong"),
      kabupaten: Yup.string().required("kabupaten tidak boleh kosong"),
      kecamatan: Yup.string().required("kecamatan tidak boleh kosong"),
      kelurahan: Yup.string().required("kelurahan tidak boleh kosong"),
      detai_alamat: Yup.string().required("detail tidak boleh kosong"),
      user: Yup.string().required("user tidak boleh kosong"),
    }),
  });

  useEffect(() => {
    dispatch(getDataPovinsi());
  }, [dispatch]);
  console.log(dataProvinsi);
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="absolute top-0 left-0 right-0 bottom-0  flex items-center  bg-fixed justify-center text-gray-500"
      overlayClassName="absolute top-0 left-0 right-0 bottom-0 bg-black  bg-fixed  bg-opacity-50"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Buat Alamat Baru
        </h2>
        <form action="" className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col mb-3">
            <label htmlFor="">Nama</label>
            <BaseInput class="w-96" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Provinsi</label>
            <Select>
              <option value="">Provinsi</option>
              {dataProvinsi?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kabupaten</label>

            <Select disabled={true}>
              <option value="">Kabupaten</option>
              {dataProvinsi?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kecamatan</label>

            <Select>
              <option value="">Kecamatan</option>
              {dataProvinsi?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Detail Alamat</label>
            <TextArea />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kelurahan</label>

            <Select>
              <option value="">Kelurahan</option>
              {dataProvinsi?.map((val) => (
                <option value={val.id}>{val.nama}</option>
              ))}
            </Select>
          </div>{" "}
          <div className="flex justify-end copx-3 py-2">
            <BaseButton onClick={() => onHide()} class="b">
              Cancel
            </BaseButton>
            <BaseButton class="ml-3" onClick={destroy}>
              Submit
            </BaseButton>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default ModalDelete;
