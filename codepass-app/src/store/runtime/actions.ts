import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";
import { APIs } from "../../constants/apis";
import { setResult } from "./execution";

export const execute = createAsyncThunk(
  "execute",
  async (data: any, thunkAPI) => {
    try {
      const response = await request({
        url: APIs.execute,
        method: "POST",
        data,
      });
      thunkAPI.dispatch(setResult(response?.data));
    } catch (error) {}
  }
);
