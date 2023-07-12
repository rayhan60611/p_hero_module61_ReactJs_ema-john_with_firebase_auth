// import React from "react";

import { useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import ReviewItem from "../reviewItem/ReviewItem";

const OrderReview = () => {
  const cart = useLoaderData();
  return (
    <div className="mt-14 flex flex-col md:flex-row gap-8 md:gap-12 justify-evenly items-center mx-8">
      <div className="basis-2/4 h-[400px] overflow-y-scroll">
        <h1 className="text-center font-bold p-3 text-xl">
          Total Ordered item: {cart.length}
        </h1>
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="w-11/12 md:w-4/12 basis-2/4">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
