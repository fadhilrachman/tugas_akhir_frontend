import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import { getAlamat } from "../../../redux/alamatSlice";
import { useSelector, useDispatch } from "react-redux";
import ModalDelete from "../../../components/modal/ModalDelete";
const Alamat = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const alamat = useSelector((state) => state.Alamat);
  const dataAlamat = alamat.data?.result;
  useEffect(() => {
    dispatch(getAlamat());
  }, [dispatch]);
  console.log(dataAlamat);
  return (
    <div>
      <div className="flex justify-end">
        <BaseButton
          class="w-max px-3 mb-5 font-medium"
          onClick={() => setShow(true)}
        >
          <i class="bi bi-plus-lg text-white"></i>Tambah Alamat Baru
        </BaseButton>
      </div>

      {dataAlamat?.map((val) => (
        <div className="border p-3 rounded">
          <span className="text-gray-700">Rumah</span>
          <div className="mt-3">
            <p className="text-2xl font-bold text-emerald-600">{val.nama}</p>
            <p className="text-sm mt-2">
              {`${val.provinsi} kabupaten ${val.kabupaten} kecamatan ${val.kecamatan} kelurahan ${val.kelurahan}`}
              {/* Jawa Barat kabupaten Garut kecamatan Sirnajaya Kelurahan Bojong
              soa */}
            </p>
            <small>{val.detail_alamat}</small>
            <ul className="mt-6 flex  justify-around text-emerald-600">
              <li>Ubah Alamat</li>
              <li>Hapus Alamat</li>
            </ul>
          </div>
        </div>
      ))}
      <ModalDelete show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Alamat;
