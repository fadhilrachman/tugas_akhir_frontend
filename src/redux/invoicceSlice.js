import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createInvoice = createAsyncThunk("/invoice", async (param) => {
  const result = await axios.post(
    `${process.env.REACT_APP_API}/invoices`,
    param,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});

export const getInvoice = createAsyncThunk("/invoice-get", async (param) => {
  const result = await axios.get(
    `${process.env.REACT_APP_API}/invoices/?user=${param}`,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});
const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    status: "",
    data: [],
  },
  extraReducers: {
    [createInvoice.pending]: (state) => {
      state.status = "loading";
    },
    [createInvoice.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [createInvoice.rejected]: (state) => {
      state.status = "error";
    },
    [getInvoice.pending]: (state) => {
      state.status = "loading";
    },
    [getInvoice.fulfilled]: (state, result) => {
      state.status = "success";
      state.data = result?.payload?.data;
    },
    [getInvoice.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default invoiceSlice.reducer;
