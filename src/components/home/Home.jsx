// import React from 'react';
import { Link } from "react-router-dom";
import Model from "../../assets/images/model.png";

const Home = () => {
  return (
    <div className=" flex flex-col mt-10 md:flex-row md:justify-around items-center h-screen gap-10">
      {/* left div */}
      <div className="flex flex-col  items-center md:items-start text-center md:text-start gap-14">
        <p className="text-sm font-semibold text-[#F90]">Sale up to 70% off</p>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            New Collection For Fall
          </h1>
          <p className="font-semibold">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>

        <Link
          className="bg-[#FF9900] hover:bg-green-600 duration-500 font-semibold px-10 py-3 rounded"
          to="/shop"
        >
          Shop Now
        </Link>
      </div>
      {/* right */}
      <div>
        <img className="w-[340px] h-[450px]" src={Model} alt="" />
      </div>
    </div>
  );
};

export default Home;
