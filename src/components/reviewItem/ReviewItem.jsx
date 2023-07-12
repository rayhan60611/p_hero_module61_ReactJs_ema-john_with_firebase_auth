// import React from "react";

import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const ReviewItem = ({ product }) => {
  return (
    <div className="border border-gray-600 flex items-center justify-between mt-3 rounded gap-2 p-1 pr-2">
      <img className="w-[70px] h-[70px] rounded" src={product.img} alt="" />
      <div className="flex-1">
        <h1 className="text-[12px]">{product.name}</h1>
        <p className="text-[10px]">Price: ${product.price}</p>
        <p className="text-[10px]">Shipping Price: ${product.shipping}</p>
        <p className="text-[10px]">Quantity: ${product.quantity}</p>
      </div>

      <Link className="drop-shadow-2xl bg-green-200 hover:bg-red-100 p-2 rounded-full flex justify-center items-center duration-500 group ">
        <TrashIcon className="h-6 w-6 duration-500 text-green-700 group-hover:text-red-700 " />
      </Link>
    </div>
  );
};

export default ReviewItem;
