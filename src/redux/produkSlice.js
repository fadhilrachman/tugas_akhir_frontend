import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProduks = createAsyncThunk("/produk", async (param) => {
  const result = await axios.get(
    `${process.env.REACT_APP_API}/products?category=${param.category}`,
    {}
  );
  return result;
});

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
  },
});
export default Produks.reducer;
