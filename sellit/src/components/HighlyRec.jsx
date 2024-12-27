import React from "react";
import { Link } from "react-router";

const HighlyRec = () => {
  return (
    <div>
      <div className="bg-primary">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="lg:ml-5 lg:pl-5 ml-1 pl-1 pb-5 lg:text-9xl md:text-4xl sm:text-4xl text-4xl lg:p-5 md:p-2 p-1 text-secondary">
                  |
                </p>
              </div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-0  text-white ">
                <span className="text-yellow flex items-center justify-center">
                  Highly Recommended
                </span>
                E-commerce web app
              </p>
            </div>
            <div className=" lg:mt-[200px] flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <Link
                to="/products"
                className="text-white border border-primary hover:bg-white hover:text-black bg-secondary px-8 py-2 rounded"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlyRec;
