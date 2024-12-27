import React from "react";
import MainPage1 from "./../../public/images/MainPage1.png";
import MainPage2 from "./../../public/images/MainPage2.png";
import MainImage3 from "./../../public/images/MainImage3.png";
import { Link } from "react-router";
import OldStarred from "./OldStarred";
import Testimonial from "./Testimonial";
import HighlyRec from "./HighlyRec";
import StayUpdated from "./StayUpdated";

const MainPage = () => {
  return (
    <div className="">
      <div className="container">
        <div className="grid grid-cols-2 ">
          <div className=" bg-white  m-3 p-3  shadow-2xl">
            <div className="my-[10px] ">
              <div className="flex items-center border border-black rounded-3xl bg-white px-3 w-[450px] justify-between my-[50px]">
                <h1 className="text-4xl  text-black">
                  {" "}
                  2500+ products for sale
                </h1>
              </div>
              <p className="text-xl my-[20px] bold text-gray-600">
                {" "}
                - For Office Workers
              </p>
              <div className="">
                <div>
                  <p className="text-xl my-[10px] text-primary italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Lorem ipsum dolor sit amet, consectetur <br />{" "}
                    adipiscing elit. Lorem ipsum dolor
                    <br /> sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link
                    to="/products"
                    className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    Shop now
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={MainPage1}
                    alt="product-image"
                    className="w-[300px] h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-[10px]  bg-white m-3 p-3  shadow-2xl ">
              <div className="flex items-center justify-between my-[20px]">
                <h1 className="text-4xl  text-black">
                  {" "}
                  1000+ products for sale
                </h1>
              </div>
              <p className="text-xl my-[10px] bold text-gray-600">
                {" "}
                - For Programmers
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl my-[10px] text-primary italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Lorem ipsum dolor sit amet, consectetur <br />{" "}
                    adipiscing elit.
                  </p>
                  <Link
                    to="/products"
                    className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    Shop now
                  </Link>
                </div>
                <div>
                  <img src={MainPage2} alt="product-image" />
                </div>
              </div>
            </div>
            <div className="my-[10px] bg-white  m-3 p-3  shadow-2xl ">
              <div className="flex items-center justify-between my-[20px]">
                <h1 className="text-4xl  text-black">
                  {" "}
                  1500+ products for sale
                </h1>
              </div>
              <p className="text-xl my-[10px] bold text-gray-600">
                {" "}
                - For Gamers
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl my-[10px] text-primary italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Lorem ipsum dolor sit amet, consectetur <br />{" "}
                    adipiscing elit.
                  </p>
                  <Link
                    to="/products"
                    className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    Shop now
                  </Link>
                </div>
                <div>
                  <img src={MainImage3} alt="product-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OldStarred/>
      <Testimonial/>
      <HighlyRec/>
      <StayUpdated/>
    </div>
  );
};

export default MainPage;
