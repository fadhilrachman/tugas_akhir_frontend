import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCart = createAsyncThunk("/get-keranjang", async (id) => {
  const result = await axios.get(
    `${process.env.REACT_APP_API}/cart?user=${id}`,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});

const keranjangSlice = createSlice({
  name: "keranjang",
  initialState: {
    status: "",
    data: [],
  },
  extraReducers: {
    [getAllCart.pending]: (state) => {
      state.status = "loading";
    },
    [getAllCart.fulfilled]: (state, result) => {
      state.status = "success";
      state.data = result?.payload?.data;
    },
    [getAllCart.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default keranjangSlice.reducer;
