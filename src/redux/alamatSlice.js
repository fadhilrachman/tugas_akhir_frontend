import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAlamat = createAsyncThunk("/get-alamat", async (param) => {
  const result = await axios.get(
    `${process.env.REACT_APP_API}/address?user=${param.user}`,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
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

export const updateAlamat = createAsyncThunk(
  "/update-alamat",
  async (param) => {
    const {
      id,
      nama,
      provinsi,
      kabupaten,
      kecamatan,
      kelurahan,
      detail_alamat,
      user,
    } = param;
    console.log(param);
    const result = await axios.put(
      `${process.env.REACT_APP_API}/address/${id}`,
      {
        nama,
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
        detail_alamat,
        user,
      },
      {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    return result;
  }
);
export const deleteAlamat = createAsyncThunk("/delete-alamat", async (id) => {
  const result = await axios.delete(
    `${process.env.REACT_APP_API}/address/${id}`,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});
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
    [deleteAlamat.pending]: (state) => {
      state.status = "loading";
    },
    [deleteAlamat.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [deleteAlamat.rejected]: (state) => {
      state.status = "error";
    },
    [updateAlamat.pending]: (state) => {
      state.status = "loading";
    },
    [updateAlamat.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [updateAlamat.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default alamatSlice.reducer;
