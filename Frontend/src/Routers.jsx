import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Cart } from "./Components/Cart/Cart";
import { Category } from "./Components/Category/Category";
import { Checkout } from "./Components/Checkout/Checkout";
import { Successpage } from "./Components/Checkout/Successpage";
import { Error } from "./Components/Error/Error";
import { Navbar } from "./Components/Navbar/Navbar";
import { Product } from "./Components/SubCategory/Product";
import { SubCategory } from "./Components/SubCategory/SubCategory";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import { ChangePassword } from "./Pages/Signup/ChangePassword";
import { Signup } from "./Pages/Signup/Signup";
import { ProtectedLogin } from "./ProtectedLogin/ProtectedLogin";

export const Routing = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <Login />
            </ProtectedLogin>
          }
        />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<SubCategory />} />
        <Route path="/category/:id/:subcat" element={<SubCategory />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/successpage" element={<Successpage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/:subcat" element={<Product/>} />  */}
      </Routes>
    </>
  );
};
