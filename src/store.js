import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./pages/home/redux/tagSlice";
import produkSlice from "./pages/home/redux/produkSlice";
const store = configureStore({
  reducer: {
    Tag: tagSlice,
    Produk: produkSlice,
  },
});

export default store;
