import React from "react";
import ReactModal from "react-modal";
import BaseButton from "../BaseButton";
const odalDelete = ({ show, onHide, destroy }) => {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center font-display justify-center text-gray-500"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      contentLabel="Example Modal"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Create Data
        </h2>
        <p className=" mb-6 font-display">
          Anda yakin ingin menghapus data ini?
        </p>
        <div className="flex justify-end">
          <BaseButton onClick={() => onHide()}>Cancel</BaseButton>
          <BaseButton class="ml-3" onClick={destroy}>
            Delete
          </BaseButton>
        </div>
      </div>
    </ReactModal>
  );
};

export default odalDelete;
