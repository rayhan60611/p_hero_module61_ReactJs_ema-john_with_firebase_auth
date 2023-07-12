// import React from "react";
import "./Product.css";
import noImage from "../../assets/images/NoImageFound.jpg.png";
import { useEffect, useState } from "react";

const Product = (props) => {
  console.log(props.product);
  const { name, price, ratings, img, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  // checking falty image link
  const [status, setStatus] = useState(0);
  useEffect(() => {
    fetch(img)
      .then((res) => setStatus(res.status))
      .catch((err) => {
        console.log("catch", err);
      });
  }, [img]);

  return (
    <div className="product-parent-div">
      <div className="product-inner-div">
        <div className="product-img-div">
          <img src={status == 200 ? img : noImage} alt="" />
        </div>
        <div className="product-title-div">
          <h4>{name}</h4>
          <p>
            Price: $<span>{price}</span>
          </p>
        </div>
        <div className="product-Manufacturer-div">
          <h4>
            Manufacturer : <span>{seller}</span>
          </h4>
          <p>
            Rating: <span>3</span> {ratings}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          handleAddToCart(props.product);
        }}
        className="btn-add-to-cart"
      >
        Add to Cart <ion-icon name="cart"></ion-icon>
      </button>
    </div>
  );
};

export default Product;
