import React from "react";
import BaseButton from "../../../components/BaseButton";
const Alamat = () => {
  return (
    <div>
      <div className="flex justify-end">
        <BaseButton class="w-max px-3 mb-5 font-medium">
          <i class="bi bi-plus-lg text-white"></i>Tambah Alamat Baru
        </BaseButton>
      </div>
      <div className="border p-3 rounded">
        <span className="text-gray-700">Rumah</span>
        <div className="mt-3">
          <p className="text-2xl font-bold text-emerald-600">Fadhil</p>
          <p className="text-sm mt-2">
            Jawa Barat kabupaten Garut kecamatan Sirnajaya Kelurahan Bojong soa
          </p>
          <small>Blok D6 No 12 belakang masjid al-hidayah</small>
          <ul className="mt-6 flex  justify-around text-emerald-600">
            <li>Ubah Alamat</li>
            <li>Hapus Alamat</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alamat;
