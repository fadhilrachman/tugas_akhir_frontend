import React from "react";
import ReactModal from "react-modal";
import BaseButton from "../BaseButton";
import BaseInput from "../input/BaseInput";
import TextArea from "../input/TextArea";
const ModalDelete = ({ show, onHide, destroy }) => {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="absolute top-0 left-0 right-0 bottom-0  flex items-center  bg-fixed justify-center text-gray-500"
      overlayClassName="absolute top-0 left-0 right-0 bottom-0 bg-black  bg-fixed  bg-opacity-50"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Create Data
        </h2>
        <form action="">
          <div className="flex flex-col mb-3">
            <label htmlFor="">Nama</label>
            <BaseInput class="w-96" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Provinsi</label>
            <BaseInput class="w-96" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kabupaten</label>
            <BaseInput class="w-96" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kecamatan</label>
            <BaseInput class="w-96" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Kelurahan</label>
            <BaseInput class="w-96" />
          </div>{" "}
          <div className="flex flex-col mb-3">
            <label htmlFor="">Detail Alamat</label>
            <TextArea />
          </div>
          <div className="flex justify-end">
            <BaseButton onClick={() => onHide()} class="b">
              Cancel
            </BaseButton>
            <BaseButton class="ml-3" onClick={destroy}>
              Create
            </BaseButton>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default ModalDelete;
