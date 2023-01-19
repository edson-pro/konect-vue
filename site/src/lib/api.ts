import axios from "axios";

const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const API_URL: string = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
