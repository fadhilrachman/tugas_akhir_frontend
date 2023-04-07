import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProduks = createAsyncThunk(
  "/get-produk",
  async ({ tag, category }) => {
    const tagFiter = tag.map((val) => `tag=${val}&`);
    const result = await axios.get(
      `${
        process.env.REACT_APP_API
      }/products?category=${category}&${tagFiter.join("")}`,
      {}
    );
    return result;
  }
);

export const createdDataProduk = createAsyncThunk(
  "/create-produk",
  async (param) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/products`,
      param
    );
    return result;
  }
);

const Produks = createSlice({
  name: "produk",
  initialState: {
    data: [],
    status: "",
    category: "",
  },
  extraReducers: {
    [getDataProduks.pending]: (state) => {
      state.status = "loading";
    },
    [getDataProduks.fulfilled]: (state, result) => {
      state.status = "succes";
      state.data = result?.payload?.data;
    },
    [getDataProduks.rejected]: (state) => {
      state.status = "error";
    },
    [createdDataProduk.pending]: (state) => {
      state.status = "loading";
    },
    [createdDataProduk.fulfilled]: (state, result) => {
      state.status = "succes";
    },
    [createdDataProduk.rejected]: (state) => {
      state.status = "error";
    },
  },
});
export default Produks.reducer;
