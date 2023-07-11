import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Lexica-Api-Key": process.env.NEXT_PUBLIC_LEXICA_API_KEY,
  },
});
