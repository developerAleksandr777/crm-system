import axios from "axios";
import { API } from "./config";

export const axiosAPI = axios.create({
  baseURL: API,
});
