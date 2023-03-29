import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataCategory = createAsyncThunk("/category", async () => {
  const result = await axios.get(`${process.env.REACT_APP_API}/categories`, {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  });
  return result;
});

export const createDataCategory = createAsyncThunk(
  "/create-category",
  async (param) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/categories`,
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

const Category = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: "",
    category: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [getDataCategory.pending]: (state) => {
      state.status = "loading";
    },
    [getDataCategory.fulfilled]: (state, result) => {
      state.status = "success";
      state.data = result?.payload?.data;
    },
    [getDataCategory.pending]: (state) => {
      state.status = "error";
    },
    [createDataCategory.pending]: (state) => {
      state.status = "loading";
    },
    [createDataCategory.fulfilled]: (state, result) => {
      state.status = "success";
    },
    [createDataCategory.pending]: (state) => {
      state.status = "error";
    },
  },
});
export const { setCategory } = Category.actions;

export default Category.reducer;
