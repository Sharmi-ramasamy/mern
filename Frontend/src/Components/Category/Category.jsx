import React from "react";
import "./Category.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";
import { Link } from "react-router-dom";

export const Category = () => {
  const [items, setItems] = useState();
  const params = useParams();
  useEffect(() => {
  ecomUrl.get(`/category`).then((response) => {
      setItems(response.data);
    });
  }, [params]);

  return (
    <>
      <div className="container">
        {items &&
          items.map((categoryItem) => (
            <div key={categoryItem._id} className="procard">
              <div>
                <Link to={`/category/${categoryItem.name}`}>
                  <img src={categoryItem.image} alt="" className="product-image" />
                </Link>
              </div>

              <div>
                <h3 className="product-info"> {categoryItem.name} </h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
