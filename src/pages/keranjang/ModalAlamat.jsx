import React from "react";
import ReactModal from "react-modal";
import BaseButton from "../../components/BaseButton";
const ModalAlamat = ({ show, onHide, destroy, data, alamat, setKey }) => {
  console.log(alamat);
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => onHide()}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center font-display justify-center text-gray-900 font-index"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      contentLabel="Example Modal"
    >
      <div className="p-8 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">
          Pilih Alamat
        </h2>

        <div className="mb-4">
          {data &&
            data.map((val, key) => (
              <div
                className={`border py-2 px-3 rounded mb-3 hover:bg-neutral-100 cursor-pointer ${
                  key == alamat ? "border-emerald-600" : ""
                }`}
                onClick={() => setKey(key)}
              >
                <div className="mt-3 text-sm flex justify-between items-center px-3 ">
                  <div>
                    <p className="font-medium text-emerald-600 mb-2">
                      {val?.nama}
                    </p>
                    <p>
                      Provinsi {val?.provinsi} Kabupaten {val?.kabupaten}{" "}
                      Kelurahan {val?.kelurahan}{" "}
                    </p>
                    <small>{val.detail_alamat}</small>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-end">
          <BaseButton variant="" class="ml-3" onClick={onHide}>
            Oke
          </BaseButton>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalAlamat;
