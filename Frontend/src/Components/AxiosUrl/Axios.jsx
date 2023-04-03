import axios from "axios";
const ecomUrl = axios.create({
  baseURL: "http://localhost:8080/api/",
  // baseURL: "http://localhost:4042",
});
export default ecomUrl;