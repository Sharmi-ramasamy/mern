import React from "react";
import "./HomeCategory.css";
import { Link,useNavigate } from "react-router-dom";

export const HomeCategory = () => {
  const data = [
    {
      catImg: "./Assets/HomeCategory/Jewels.png",
      catName: "Jewels",
    },
    {
      catImg: "./Assets/HomeCategory/Mobiles.png",
      catName: "Mobiles",
    },
    {
      catImg: "./Assets/HomeCategory/Dress.png",
      catName: "Dress",
    },
    {
      catImg: "./Assets/HomeCategory/Shoes.png",
      catName: "Shoes",
    },
    // {
    //   catImg: "./Assets/HomeCategory/Watch.png",
    //   catName: "Watch",
    // },
    // {
    //   catImg: "./Assets/HomeCategory/Grocery.png",
    //   catName: "Grocery",
    // },
    // {
    //   catImg: "./Assets/HomeCategory/Electronics.png",
    //   catName: "Electronics",
    // },
    // {
    //   catImg: "./Assets/HomeCategory/Toys.png",
    //   catName: "Two Wheelers",
    // },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
             <Link to={`/category/${value.catName}`}>
                  <img src={value.catImg} alt="Categories" />
                  <span> {value.catName} </span>
             </Link>
            </div>
            
          );
        })}
         <button id="slider_btn" onClick={() => navigate(`/category`)}> More Items </button>
      </div>
    </>
  );
};
