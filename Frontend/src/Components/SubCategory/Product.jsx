import React from "react";
import "./SubCategory.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";
import Toast from "../Toast/Toast";

export const Product = () => {
  const {subcat } = useParams();
  const navigate = useNavigate();
  const [getproduct, setGetproduct] = useState([]);

  useEffect(() => {
    loadData();
  }, [subcat])

  
  const loadData = async () => {
  const response = await ecomUrl.get(`product?SubCategory=${subcat}`);
    setGetproduct(response.data);
  };

  const addProduct = (productItem) => {
    ecomUrl.post("cart", {
      productid: productItem._id,
      category: productItem.category,
      SubCategory: productItem.SubCategory,
      name: productItem.name,
      price: productItem.price,
      desc: productItem.desc,
      image: productItem.image,
      email: sessionStorage.getItem("email"),
      quantity: 1,
      value: productItem.price,
    })
    .then((res)=>{
      Toast("Item Added to the Cart Successfully", "success");
    }).catch((err)=>{ 
      Toast("Please Login to Add Items to the Cart", "error");
      navigate('/login');
    }) 
  };

  return (
    <>

        <div className="products">

          {getproduct
            .map((productItem) => (
              <div key={productItem._id} className="productcards">
                <div>
                  <img className="products-images" src={productItem.image} alt={productItem.name} />
                </div>
                <div>
                  <h3 className="product-name"> {productItem.name} </h3>
                </div>
                <div className="product-price"> {'\u20B9'} {productItem.price} </div>

                <div className="product-details"> {productItem.desc} </div>
                <br />
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className>
                  <button className="product-add-button" onClick={() => addProduct(productItem)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
    </>
  );
};



