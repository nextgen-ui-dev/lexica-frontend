import axios from "axios";

export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Lexica-Api-Key": process.env.NEXT_PUBLIC_LEXICA_API_KEY,
  },
});

export default axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Lexica-Api-Key": process.env.NEXT_PUBLIC_LEXICA_API_KEY,
  },
});