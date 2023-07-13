// import React from "react";
// import Product from "../products/Product";
import "./Cart.css";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = ({ cart, clearCartHandler, children }) => {
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
        <button onClick={clearCartHandler} className="btn-clear-cart">
          Clear Cart{" "}
          <TrashIcon className="h-6 w-6 duration-500 text-white group-hover:text-red-700 " />
        </button>
        {/* review odrder button as a react children */}
        {children}
      </div>
    </div>
  );
};

export default Cart;
