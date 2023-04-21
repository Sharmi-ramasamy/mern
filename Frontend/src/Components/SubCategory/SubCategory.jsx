import React from "react";
import "./SubCategory.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";
import Toast from "../Toast/Toast";
export const SubCategory = () => {
  const [items, setItems] = useState([]);
  const { id, subcat } = useParams();

  useEffect(() => {
    loaddata();
  }, [id,subcat]);
  const token = sessionStorage.getItem("token")
  const headers = {
  'Authorization': `${token}`,
  'Content-Type': 'application/json'
};

  const loaddata = async () => {
    await ecomUrl.get(`subcategory?category=${id}`,{headers})
    .then(response =>
      setItems(response.data))
    .catch(error => console.error(error));
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
    });
    Toast("Item Added to the Cart Successfully", "success");
  };
 

  const navigate = useNavigate();
  const [getproduct, setGetproduct] = useState([]);
  return (
    <>
      <div className="wrapper">
        <h2> Filter Products: </h2>
        <div>
          {items
            .map((val) => (
              <div key={val._id}>
                <button id="buttons" onClick={() => navigate(`/category/${id}/${val.subcategory}`)}>
                  {val.subcategory}
                </button>
              </div>
            ))}
        </div>

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
                <div>
                  <button className="product-add-button" onClick={() => addProduct(productItem)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

