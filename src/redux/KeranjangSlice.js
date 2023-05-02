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

export const createCart = createAsyncThunk(
  "/create-keranjang",
  async (param) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/cart`,
      param,
      {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    return result;
  }
);

export const deleteCart = createAsyncThunk(
  "/delete-keranjang",
  async (param) => {
    const result = await axios.delete(`${process.env.REACT_APP_API}/cart`, {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
      data: param,
    });
    return result;
  }
);
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
    [createCart.pending]: (state) => {
      state.status = "loading";
    },
    [createCart.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [createCart.rejected]: (state) => {
      state.status = "error";
    },
    [deleteCart.pending]: (state) => {
      state.status = "loading";
    },
    [deleteCart.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [deleteCart.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default keranjangSlice.reducer;
