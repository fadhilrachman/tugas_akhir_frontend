import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataCategory = createAsyncThunk("/category", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/categories`);
  return result;
});

const Category = createSlice({
  name: "category",
  initialState: {
    data: [],
    isLoading: false,
    isError: null,
    category: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [getDataCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataCategory.fulfilled]: (state, result) => {
      state.isLoading = false;
      state.data = result?.payload?.data;
    },
    [getDataCategory.pending]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const { setCategory } = Category.actions;

export default Category.reducer;
