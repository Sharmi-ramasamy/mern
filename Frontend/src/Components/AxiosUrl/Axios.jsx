// import axios from "axios";
// const ecomUrl = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });
// export default ecomUrl;


import axios from "axios";
console.log(process.env.REACT_APP_ECOMMERCE);
const ecomUrl = axios.create({
  baseURL: process.env.REACT_APP_ECOMMERCE,
});
export default ecomUrl;