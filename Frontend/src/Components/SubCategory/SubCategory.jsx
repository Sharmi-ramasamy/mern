import React from "react";
import "./SubCategory.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";
import { Product } from "./Product";

export const SubCategory = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams();
  const [flag, setFlag] = useState(false)
  const navigate = useNavigate();
 
  useEffect(() => {
    loadData();
  }, [id])

  const loadData = async () => {
    await ecomUrl.get(`subcategory?category=${id}`)
    .then(response =>
      setItems(response.data))
    .catch(error => console.log(error));
  };
 
  return (
    <>
      <div className="wrapper">
        <h2 className="subcat_head"> Products: </h2>
        <div>
          {items
            .map((val) => (
              <div key={val._id}>
                <button id="buttons" onClick={() => {navigate(`/category/${id}/${val.subcategory}`);setFlag(true)}}>
                  {val.subcategory}
                </button>
              </div>
            ))}
        </div>
            {flag === true ? <Product/> : ""}
      </div>
    </>
  );
};