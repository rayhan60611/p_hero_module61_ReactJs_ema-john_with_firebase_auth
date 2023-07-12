// import React from "react";
import { deleteCart } from "../../utilities/localStorage";
// import Product from "../products/Product";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShippingPrice = 0;
  let quantity = 0;
  for (const item of cart) {
    // item.quantity = item.quantity || 1;
    totalPrice += item.price * item.quantity;
    totalShippingPrice += item.shipping;
    quantity = quantity + item.quantity;
  }
  const tax = ((totalPrice + totalShippingPrice) * 7) / 100;
  const grandTotal = totalPrice + totalShippingPrice + tax;

  return (
    <div className="card-div">
      <div className="cart-bill-container">
        <h4 className="cart-bill-h4">Order Summary</h4>
        <p className="cart-bill-p">Selected Items: {quantity}</p>
        <p className="cart-bill-p">Total Price: ${totalPrice}</p>
        <p className="cart-bill-p">
          Total Shipping Charge: ${totalShippingPrice}
        </p>
        <p className="cart-bill-p">Tax: ${tax.toFixed(2)}</p>
        <h4 className="cart-bill-h4 grand-total-h4">
          Grand Total: ${grandTotal.toFixed(2)}
        </h4>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            deleteCart();
          }}
          className="btn-clear-cart"
        >
          Clear Cart <ion-icon name="trash-outline"></ion-icon>
        </button>
        <button className="btn-review-order">
          Review Order <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Cart;
