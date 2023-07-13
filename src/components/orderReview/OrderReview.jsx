// import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import ReviewItem from "../reviewItem/ReviewItem";
import { useState } from "react";
import {
  deleteCart,
  removeSingleItemFromCart,
} from "../../utilities/localStorage";

import { BanknotesIcon } from "@heroicons/react/24/outline";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderReview = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  // removing a single product from review order page
  const reviewItemDeleteHandler = (id) => {
    const remaining = products.filter((pd) => pd.id != id);
    // removing from state
    setCart(remaining);
    // removing from local storage
    removeSingleItemFromCart(id);

    const item = products.find((pd) => pd.id === id);
    toast.error(`${item.name} removed from Cart`);
  };

  // clear cart handler method
  const clearCartHandler = () => {
    toast.success("Cart Cleared");
    deleteCart();
    setCart([]);
  };
  return (
    <div className="mt-14 flex flex-col md:flex-row gap-8 md:gap-12 justify-evenly items-center mx-8">
      <div className="basis-2/4 h-[400px] overflow-y-scroll">
        <h1 className="text-center font-bold p-3 text-xl">
          Total Ordered item: {cart.length}
        </h1>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            reviewItemDeleteHandler={reviewItemDeleteHandler}
          ></ReviewItem>
        ))}
      </div>
      <div className="w-11/12 md:w-4/12 basis-2/4">
        <Cart cart={cart} clearCartHandler={clearCartHandler}>
          <Link to="/order-review" className="group">
            <button className="btn-review-order group-hover:animate-pulse">
              Proceed Checkout
              <BanknotesIcon className="h-6 w-6 duration-500 text-white  " />
            </button>
          </Link>
        </Cart>
      </div>
      {/* toast notification */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default OrderReview;
