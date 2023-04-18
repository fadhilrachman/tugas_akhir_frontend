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

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    status: "",
    data: [],
  },
  extraReducers: {
    //   [getAllCart.pending]: (state) => {
    //     state.status = "loading";
    //   },
    //   [getAllCart.fulfilled]: (state, result) => {
    //     state.status = "success";
    //     state.data = result?.payload?.data;
    //   },
    //   [getAllCart.rejected]: (state) => {
    //     state.status = "error";
    //   },
    [createInvoice.pending]: (state) => {
      state.status = "loading";
    },
    [createInvoice.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [createInvoice.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default invoiceSlice.reducer;
