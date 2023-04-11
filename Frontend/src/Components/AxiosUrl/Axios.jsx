import axios from "axios";
const ecomUrl = axios.create({
  baseURL: "http://localhost:8080/api/",
});
export default ecomUrl;