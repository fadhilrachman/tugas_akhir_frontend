import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataPovinsi = createAsyncThunk("/get-provinsi", async () => {
  const result = await axios.get(
    "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
  );
  return result;
});

export const getDataKabupaten = createAsyncThunk(
  "/get-kabupaten",
  async (param) => {
    const result = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${param}`
    );
    return result;
  }
);

export const getDataKecamatan = createAsyncThunk(
  "/get-kecamatan",
  async (param) => {
    const result = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${param}`
    );
    return result;
  }
);
export const getDataKelurahan = createAsyncThunk(
  "/get-kelurahan",
  async (param) => {
    const result = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${param}`
    );
    return result;
  }
);
const regionSlice = createSlice({
  name: "region",
  initialState: {
    status: "",
    dataProvinsi: [],
    dataKabupaten: [],
    dataKecamatan: [],
    dataKelurahan: [],
  },
  extraReducers: {
    [getDataPovinsi.pending]: (state) => {
      state.status = "loading";
    },
    [getDataPovinsi.fulfilled]: (state, result) => {
      state.status = "success";
      state.dataProvinsi = result?.payload?.data;
    },
    [getDataPovinsi.rejected]: (state) => {
      state.status = "error";
    },
    [getDataKabupaten.pending]: (state) => {
      state.status = "loading";
    },
    [getDataKabupaten.fulfilled]: (state, result) => {
      state.status = "success";
      state.dataKabupaten = result?.payload?.data;
    },
    [getDataKabupaten.rejected]: (state) => {
      state.status = "error";
    },
    [getDataKecamatan.pending]: (state) => {
      state.status = "loading";
    },
    [getDataKecamatan.fulfilled]: (state, result) => {
      state.status = "success";
      state.dataKecamatan = result?.payload?.data;
    },
    [getDataKecamatan.rejected]: (state) => {
      state.status = "error";
    },
    [getDataKelurahan.pending]: (state) => {
      state.status = "loading";
    },
    [getDataKelurahan.fulfilled]: (state, result) => {
      state.status = "success";
      state.dataKelurahan = result?.payload?.data;
    },
    [getDataKelurahan.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default regionSlice.reducer;
