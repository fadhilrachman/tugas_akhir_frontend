import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./redux/tagSlice";
import produkSlice from "./redux/produkSlice";
import categorySlice from "./redux/categorySlice";
import authSlice from "./redux/authSlice";
import alamatSlice from "./redux/alamatSlice";
import regionSlice from "./redux/regionSlice";
import KeranjangSlice from "./redux/KeranjangSlice";

const store = configureStore({
  reducer: {
    Tag: tagSlice,
    Produk: produkSlice,
    Category: categorySlice,
    Auth: authSlice,
    Alamat: alamatSlice,
    Region: regionSlice,
    Keranjang: KeranjangSlice,
  },
});

export default store;
