import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./pages/home/redux/tagSlice";
import produkSlice from "./pages/home/redux/produkSlice";
import categorySlice from "./pages/home/redux/categorySlice";
const store = configureStore({
  reducer: {
    Tag: tagSlice,
    Produk: produkSlice,
    Category: categorySlice,
  },
});

export default store;
