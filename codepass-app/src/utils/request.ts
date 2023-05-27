import axios from "axios";
import { api } from "../constants/apis";

export async function request({ url = "", method = "GET", data = null }) {
  try {
    const response = await axios({ baseURL: api, url, method, data });
    if (response.status < 300) return response;
  } catch (error) {
    console.error(error);
  }
}
