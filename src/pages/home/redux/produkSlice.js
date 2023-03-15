import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProduks = createAsyncThunk("/produk", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/products`);
  return result;
});

const Produks = createSlice({
  name: "produk",
  initialState: {
    data: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: {
    [getDataProduks.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataProduks.fulfilled]: (state, result) => {
      state.isLoading = false;
      state.data = result?.payload?.data;
    },
    [getDataProduks.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default Produks.reducer;
