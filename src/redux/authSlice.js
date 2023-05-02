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
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});
export const logout = createAsyncThunk("/logout", async () => {
  const result = await axios.post(`${process.env.REACT_APP_API}/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  return result;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    data: [],
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = "loading";
      state.result = false;
    },
    [register.fulfilled]: (state, action) => {
      state.result = action.payload.data;
      state.status = "success";
    },
    [register.rejected]: (state) => {
      state.result = false;
      state.status = "error";
    },
    [login.pending]: (state) => {
      state.status = "loading";
      state.result = false;
    },
    [login.fulfilled]: (state, action) => {
      state.result = action.payload.data;
      state.status = "success";
    },
    [login.rejected]: (state, action) => {
      state.result = false;
      state.status = "error";
    },
    [logout.pending]: (state) => {
      state.status = "loading";

      state.result = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.result = action.payload.data;
      state.status = "success";
    },
    [logout.rejected]: (state) => {
      state.result = false;
      state.status = "error";
    },
    [getUser.pending]: (state) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.status = "success";
    },
    [getUser.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default authSlice.reducer;
