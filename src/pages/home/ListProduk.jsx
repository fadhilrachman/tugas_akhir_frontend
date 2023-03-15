import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataTags } from "./redux/tagSlice";
import { getDataProduks } from "./redux/produkSlice";
import { getDataCategory } from "./redux/categorySlice";
import { FormatRupiah } from "@arismun/format-rupiah";
const ListProduk = () => {
  const dispatch = useDispatch();
  const Tags = useSelector((state) => state.Tag);
  const Produk = useSelector((state) => state.Produk);
  const dataProduk = Produk?.data.result;
  const dataTags = Tags?.data.result;
  const [tag, setTag] = React.useState([]);

  useEffect(() => {
    dispatch(getDataTags());
    dispatch(getDataProduks());
  }, [dispatch]);

  const handleTag = (val) => {
    if (tag.includes(val)) {
      const filter = tag.filter((item) => item != val);
      return setTag(filter);
      // return console.log("cuy");
    }
    setTag([...tag, val]);
  };
  // console.log(tag);
  return (
    <div>
      <div className="h-36 bg-no-repeat bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/1016/29/154/fresh-fruit-hd-wallpaper-preview.jpg')]">
        <div className=" h-full bg-black w-full bg-opacity-50  top-24 text-white font-bold flex flex-col justify-center items-center">
          <span className="text-3xl">Organi Shop</span>
          <span>Home-Shop</span>
        </div>
      </div>
      <div className=" mt-14 px-20 grid grid-cols-4 gap-4 font-light">
        <div>
          <h1 className="text-3xl font-bold">Tags</h1>
          {dataTags?.map((val) => (
            <p
              className={`my-5 hover:cursor-pointer hover:text-emerald-600 ${
                tag.includes(val.name) ? "text-emerald-600" : ""
              }`}
              onClick={() => handleTag(val.name)}
            >
              {val.name}
            </p>
          ))}
        </div>

        <div className="col-span-3 ">
          <h1 className="text-4xl pb-3 font-bold border-b-4 w-min border-emerald-600 b">
            Produk
          </h1>
          <div className="mt-8 grid grid-cols-3 gap-10 gap-y-28">
            {dataProduk?.map((val) => (
              <div className="relative group ">
                <div className="w-full h-56 rounded-t bg-slate-100  ">
                  <span className="opacity-0">ddd</span>
                  <img
                    // src="https://img.freepik.com/premium-photo/longkong-fruit-lansium-parasiticum-is-tropical-fruit-white_38013-711.jpg?w=740"
                    src={`${process.env.REACT_APP_API}/` + val.image_url}
                    // src="https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870264.jpg?size=626&ext=jpg&ga=GA1.2.1056913818.1672935173&semt=sph"
                    alt=""
                    srcset=""
                    className="h-30  w-full"
                  />
                  <div className="border rounded-full  bg-white hover:text-white  h-12 w-12 mx-auto flex mt-20 items-center group-hover:relative justify-center group-hover:mt-0 group-hover:mb-20  transition-all duration-500 ease-in-out    hover:transform  hover:cursor-pointer hover:rotate-[360deg] hover:bg-emerald-600 ">
                    <i class="bi bi-cart-fill "></i>
                  </div>
                </div>
                <div className="flex h-22   justify-center py-4 flex-col items-center  absolute w-full  bg-white">
                  <span className="mb-2">{val.name}</span>
                  <span className="font-bold">
                    <FormatRupiah value={val.price} />
                    {/* {rupiahFormat.convert(val.price)} */}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduk;
