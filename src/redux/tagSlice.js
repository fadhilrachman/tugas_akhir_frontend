import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataTags = createAsyncThunk("/tag", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/tags`, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});
export const createDataTag = createAsyncThunk("/create-tag", async (param) => {
  const result = await axios.post(`${process.env.REACT_APP_API}/tags`, param, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});
export const updateDatatag = createAsyncThunk("/update-tag", async (param) => {
  const { id, name } = param;
  const result = await axios.put(
    `${process.env.REACT_APP_API}/tags/${id}`,
    { name },
    {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },
    }
  );
  return result;
});

export const deleteDataTag = createAsyncThunk("/delete-tag", async (id) => {
  const result = await axios.delete(`${process.env.REACT_APP_API}/tags/${id}`, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});

const Tags = createSlice({
  name: "tags",
  initialState: {
    data: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: {
    [getDataTags.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataTags.fulfilled]: (state, result) => {
      state.isLoading = false;
      state.data = result?.payload?.data;
    },
    [getDataTags.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [createDataTag.pending]: (state) => {
      state.isLoading = true;
    },
    [createDataTag.fulfilled]: (state, result) => {
      state.isLoading = false;
    },
    [createDataTag.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [updateDatatag.pending]: (state) => {
      state.isLoading = true;
    },
    [updateDatatag.fulfilled]: (state, result) => {
      state.isLoading = false;
    },
    [updateDatatag.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteDataTag.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteDataTag.fulfilled]: (state, result) => {
      state.isLoading = false;
    },
    [deleteDataTag.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default Tags.reducer;
