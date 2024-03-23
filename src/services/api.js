import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axiosInstance = axios.create({
  baseURL: "https://65fa94923909a9a65b1ac703.mockapi.io/task-app",
});

export const fetchAdverts = createAsyncThunk(
  "cards/fetchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
