import axios from "axios";

const BASE_URL =
  // process.env.REACT_APP_NODE_ENV === "production" ? "https://www.wgsitetest.com" : "http://localhost:4001";
const BASE_URL = "https://www.wgsitetest.com";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
