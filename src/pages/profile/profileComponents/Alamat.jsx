import React, { useEffect, useState } from "react";
import BaseButton from "../../../components/BaseButton";
import ModalCreateAlamat from "../../../components/modal/ModalCreateAlamat";
import { getAlamat, deleteAlamat } from "../../../redux/alamatSlice";
import { useSelector, useDispatch } from "react-redux";

const Alamat = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState({
    create: false,
    update: false,
    data: "",
  });
  const alamat = useSelector((state) => state.Alamat);
  const user = useSelector((state) => state.Auth);
  const idUser = user.result?.result?._id;
  const dataAlamat = alamat.data?.result;
  useEffect(() => {
    dispatch(getAlamat({ user: idUser && idUser }));
  }, [dispatch, show]);

  return (
    <div>
      {alamat.status === "ladoing" ? (
        <div className="h-10 w-10 col-start-2  rounded-full border-emerald-600 border-2 border-b-white animate-spin"></div>
      ) : dataAlamat?.length !== 0 ? (
        <>
          <div className="flex justify-end">
            <BaseButton
              class="w-max px-3 mb-5 font-medium"
              onClick={() => setShow({ ...show, create: true })}
            >
              <i class="bi bi-plus-lg text-white"></i>Tambah Alamat Baru
            </BaseButton>
          </div>

          {dataAlamat?.map((val) => (
            <div className="border p-3 rounded mt-6">
              <span className="text-gray-700">Rumah</span>
              <div className="mt-3">
                <p className="text-2xl font-bold text-emerald-600">
                  {val.nama}
                </p>
                <p className="text-sm mt-2">
                  {`${val.provinsi} kabupaten ${val.kabupaten} kecamatan ${val.kecamatan} kelurahan ${val.kelurahan}`}
                  {/* Jawa Barat kabupaten Garut kecamatan Sirnajaya Kelurahan Bojong
              soa */}
                </p>
                <small>{val.detail_alamat}</small>
                <ul className="mt-6 flex  justify-around text-emerald-600">
                  {/* <li>Ubah Alamat</li> */}
                  <li
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setShow({ ...show, update: true, data: val });
                    }}
                  >
                    Ubah Alamat
                  </li>
                  <li
                    className="hover:cursor-pointer"
                    onClick={() => {
                      dispatch(deleteAlamat(val._id));
                      dispatch(getAlamat({ user: idUser && idUser }));
                    }}
                  >
                    Hapus Alamat
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <img
            // src="https://cdn-icons-png.flaticon.com/512/2877/2877699.png"
            src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
            alt=""
            className=" w-52"
          />
          Tidak ada alamat tersimpan
          <BaseButton
            class="w-max px-3 mb-5 font-medium mt-4"
            onClick={() => setShow({ create: true })}
          >
            <i class="bi bi-plus-lg text-white"></i>Tambah Alamat
          </BaseButton>
        </div>
      )}

      <ModalCreateAlamat
        show={show.create}
        onHide={() => setShow({ ...show, create: false })}
      />
      <ModalCreateAlamat
        show={show.update}
        update={show.data}
        onHide={() => setShow({ ...show, update: false })}
      />
    </div>
  );
};

export default Alamat;
