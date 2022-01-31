import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
