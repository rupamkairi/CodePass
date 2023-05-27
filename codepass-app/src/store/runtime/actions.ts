import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";
import { APIs } from "../../constants/apis";

export const execute = createAsyncThunk(
  "execute",
  async (data: any, thunkAPI) => {
    try {
      data = await request({
        url: APIs.execute,
        method: "POST",
        data,
      });
      console.log(data);
    } catch (error) {}
  }
);
