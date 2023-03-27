import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("/auth-login", async (val) => {
  const result = await axios.post(`${process.env.REACT_APP_API}/register`, val);
  return result;
});
export const login = createAsyncThunk("/auth-login", async (val) => {
  const result = await axios.post(`${process.env.REACT_APP_API}/login`, val);
  return result;
});
export const getUser = createAsyncThunk("/get-user", async (param) => {
  const result = await axios.get(
    `${process.env.REACT_APP_API}/user?isLogin=${param.isLogin}`,
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});
export const logout = createAsyncThunk("/logout", async (req, res) => {
  const result = await axios.post(`${process.env.REACT_APP_API}/logout`, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isError: null,
    isLoading: false,
    isSucces: null,
    data: [],
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
    [login.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
      state.isError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSucces = action.payload.data;
      state.isError = false;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.isSucces = false;
      state.isError = true;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
      state.isSucces = false;
      state.isError = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSucces = action.payload.data;
      state.isError = false;
    },
    [logout.rejected]: (state) => {
      state.isLoading = false;
      state.isSucces = false;
      state.isError = true;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.isError = false;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default authSlice.reducer;
