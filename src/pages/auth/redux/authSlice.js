import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("/auth-login", async (val) => {
  const result = await axios.post(`${process.env.REACT_APP_API}/register`, val);
  return result;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isError: null,
    isLoading: false,
    isSucces: null,
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
      state.isError = false;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSucces = action.payload.data;
      state.isError = false;
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
      state.isSucces = false;
      state.isError = true;
    },
  },
});

export default authSlice.reducer;
