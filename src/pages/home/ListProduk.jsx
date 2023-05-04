import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataTags } from "../../redux/tagSlice";
import { getDataProduks } from "../../redux/produkSlice";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { createCart } from "../../redux/KeranjangSlice";
import { FormatRupiah } from "@arismun/format-rupiah";
import { getAllCart } from "../../redux/KeranjangSlice";
const ListProduk = () => {
  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.Tag);
  const Category = useSelector((state) => state.Category);
  const Produk = useSelector((state) => state.Produk);
  const dataProduk = Produk?.data.result;
  const user = useSelector((state) => state.Auth);
  const idUser = user.data?.result?._id;
  const dataTags = Tags?.data.result;
  const [param, setParam] = useState({
    category: Category.category,
    tag: [],
  });

  console.log(idUser);
  useEffect(() => {
    dispatch(getDataTags());
    dispatch(getDataProduks(param));
  }, [dispatch]);

  useEffect(() => {
    setParam({ ...param, category: Category.category });
  }, [Category.category]);

  useEffect(() => {
    dispatch(getDataProduks(param));
  }, [param]);

  const handleTag = (val) => {
    if (param.tag.includes(val)) {
      const filter = param.tag.filter((item) => item != val);
      return setParam({ ...param, tag: filter });
    }
    return setParam({ ...param, tag: [...param.tag, val] });
  };

  const handleChart = async (produk) => {
    const cart = { produk: produk._id, user: idUser };
    await dispatch(createCart(cart));
    await dispatch(getAllCart(idUser));

    toast.success("Success Message");
  };

  return (
    <div className="font-index text-gray-900">
      <Navbar />
      <div className="h-36 bg-no-repeat bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/1016/29/154/fresh-fruit-hd-wallpaper-preview.jpg')]">
        <div className=" h-full bg-black w-full bg-opacity-50  top-24 text-white font-bold flex flex-col justify-center items-center">
          <span className="text-3xl">Organi Shop</span>
          <span>Home-Shop</span>
        </div>
      </div>
      <div className=" mt-14 px-20 grid grid-cols-4 gap-4 ">
        <div>
          <h1 className="text-3xl font-bold text-emerald-600">Tags</h1>
          {dataTags?.map((val) => (
            <p
              className={`my-5 hover:cursor-pointer hover:text-emerald-600 ${
                param.tag.includes(val._id) ? "text-emerald-600" : ""
              }`}
              onClick={() => handleTag(val._id)}
            >
              #{val.name}
            </p>
          ))}
        </div>

        <div className="col-span-3 ">
          <h1 className="text-4xl pb-3 font-bold border-b-4 w-min border-emerald-600 text-emerald-600">
            Produk
          </h1>

          <div className="mt-8 grid  grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 gap-x-28 gap-y-28">
            {Produk.status == "loading" ? (
              <div className="h-10 w-10 col-start-2  rounded-full border-emerald-600 border-2 border-b-white animate-spin"></div>
            ) : dataProduk?.length != 0 ? (
              dataProduk?.map((val) => (
                <div className="mt-4 shadow-md rounded relative">
                  <img
                    // src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMN2HtLKerGA71nhLcStkDIk4u52H5CtwNcrFhLy0oMg&s"
                    alt=""
                    className="w-full h-44 rounded-t"
                    srcset=""
                  />
                  <div className="px-2 py-2 pb-5">
                    <div className="w-full flex   ">
                      {val?.tag.map((itemTag) => (
                        <small className="bg-emerald-600 text-white py-1 px-2 mr-1  rounded">
                          #{itemTag.name}
                        </small>
                      ))}
                    </div>
                    <small className="text-neutral-400">
                      {val?.category?.name}
                    </small>
                    <div className="mt-2">
                      <p className="text-sm">{val.name}</p>
                      <p className="text-emerald-600 mt-2">
                        <FormatRupiah value={val.price} />
                      </p>
                      <small className=" mt-2">{val?.description}</small>
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-end p-2 bg-neutral-100 hover:bg-neutral-200 hover:cursor-pointer"
                    onClick={() => handleChart(val)}
                  >
                    <i class="bi bi-cart-fill text-emerald-600 "></i>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-start-2  w-72 ">
                <span className="text-3xl  font-bold text-neutral-300">
                  Tidak ada produk
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ListProduk;

// {Produk.status == "loading" ? (
//   <div className="h-10 w-10 col-start-2  rounded-full border-netext-neutral-300 border-2 border-b-white animate-spin"></div>
// ) : dataProduk?.length != 0 ? (
//   dataProduk?.map((val) => (
//     <div className="relative group ">
//       <div className="w-full h-56 rounded-t bg-slate-100  ">
//         <span className="opacity-0">ddd</span>
//         <img
//           // src="https://img.freepik.com/premium-photo/longkong-fruit-lansium-parasiticum-is-tropical-fruit-white_38013-711.jpg?w=740"
//           src={`${process.env.REACT_APP_API}/` + val.image_url}
//           // src="https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870264.jpg?size=626&ext=jpg&ga=GA1.2.1056913818.1672935173&semt=sph"
//           alt=""
//           srcset=""
//           className="h-30  w-full"
//         />
//         <div className="border rounded-full  bg-white hover:text-white  h-12 w-12 mx-auto flex mt-20 items-center group-hover:relative justify-center group-hover:mt-0 group-hover:mb-20  transition-all duration-500 ease-in-out    hover:transform  hover:cursor-pointer hover:rotate-[360deg] hover:bg-emerald-600 ">
//           <i class="bi bi-cart-fill "></i>
//         </div>
//       </div>
//       <div className="flex h-22   justify-center py-4 flex-col items-center  absolute w-full  bg-white">
//         <span className="mb-2">{val.name}</span>
//         <span className="font-bold text-emerald-600">
//           <FormatRupiah value={val.price} />
//           {/* {rupiahFormat.convert(val.price)} */}
//         </span>
//       </div>
//     </div>
//   ))
// ) : (
//   <div className="col-start-2  w-72 ">
//     <img
//       // src="https://cdn-icons-png.flaticon.com/512/2877/2877699.png"
//       src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
//       alt=""
//       className=" w-52"
//     />
//     <span className="text-3xl  font-bold">produk tidak ada</span>
//   </div>
// )}
