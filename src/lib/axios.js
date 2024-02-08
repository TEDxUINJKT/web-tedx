import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-tedxuinjakarta.vercel.app",
  // baseURL: "http://localhost:8000",
});
