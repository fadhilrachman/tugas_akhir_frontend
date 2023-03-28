import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAlamat = createAsyncThunk("/get-alamat", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/address`, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});

export const createAlamat = createAsyncThunk(
  "/create-alamat",
  async (param) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/address`,
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
const alamatSlice = createSlice({
  name: "alamat",
  initialState: {
    status: "",
    data: [],
  },
  extraReducers: {
    [getAlamat.pending]: (state) => {
      state.status = "loading";
    },
    [getAlamat.fulfilled]: (state, result) => {
      state.status = "success";
      state.data = result?.payload?.data;
    },
    [getAlamat.rejected]: (state) => {
      state.status = "error";
    },
    [createAlamat.pending]: (state) => {
      state.status = "loading";
    },
    [createAlamat.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [createAlamat.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default alamatSlice.reducer;
