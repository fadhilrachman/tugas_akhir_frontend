import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataTags = createAsyncThunk("/tag", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/tags`);
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
  },
});

export default Tags.reducer;
