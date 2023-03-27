import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./redux/tagSlice";
import produkSlice from "./redux/produkSlice";
import categorySlice from "./redux/categorySlice";
import authSlice from "./redux/authSlice";
import alamatSlice from "./redux/alamatSlice";
import regionSlice from "./redux/regionSlice";
const store = configureStore({
  reducer: {
    Tag: tagSlice,
    Produk: produkSlice,
    Category: categorySlice,
    Auth: authSlice,
    Alamat: alamatSlice,
    Region: regionSlice,
  },
});

export default store;
