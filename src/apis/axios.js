import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const instance = new axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default instance;