import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { PiArticleNyTimes } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { SiSellfy } from "react-icons/si";
import AddProduct from "../MyPage/AddProduct";
import MyProducts from "../MyPage/MyProducts";
import MyFavourites from "../MyPage/MyFavourites";
import { useState } from "react";
import MyProducts1 from "../MyPage/MyProducts1.json";
import MyProfile from "../Signup/MyProfile";

const MyPage = () => {
  const [showComponent, setShowComponent] = useState(1);
  const [product, setProduct] = useState(MyProducts1);
  function setProductList(newProduct) {
    newProduct.id = Number(product.length + 1);
    setProduct([newProduct, ...product]);
  }

  const RenderComponent = () => {
    switch (showComponent) {
      case 1:
        return <AddProduct setProductList={setProductList} />;
      case 2:
        return <MyProducts product={product} />;
      case 3:
        return <MyFavourites />;
      case 4:
        return <MyProfile />;
      default:
    }
  };

  return (
    <div className="container">
      <div>
        <div className="grid grid-cols-4 ">
          <div className="flex items-start justify-center">
            <div className="col-span-1   w-[300px]  py-5  m-2 shadow-2xl">
              <div className="flex  mx-auto items-center justify-center rounded-full size-10 bg-yellow">
                <div>
                  <SiSellfy className="text-5xl mb-2 text-primary" />
                </div>
              </div>
              <p className="md:text-2xl text-center text-xl sm:text-xl">
                Sell It
              </p>

              <div>
                <p className="md:text-2xl pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                  Manage Listing:
                </p>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-primary bg-primary text-white px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-white hover:text-black  rounded-sm"
                  >
                    <MdOutlinePlayLesson />
                    Add Product
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(2)}
                    className=" w-[90%] border border-primary bg-primary text-white px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-white hover:text-black  rounded-sm"
                  >
                    <MdPlayLesson />
                    My Products
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(3)}
                    className=" w-[90%] border border-primary bg-primary text-white px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-white hover:text-black  rounded-sm"
                  >
                    <FaHeart />
                    My Favourites
                  </button>
                </div>
              </div>

              <div>
                <p className="md:text-2xl pt-4 pl-2 flex text-center lg:text-xl sm:text-xl italic">
                  Manage Account:
                </p>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(4)}
                    className=" w-[90%] border border-primary bg-primary text-white px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-white hover:text-black  rounded-sm"
                  >
                    <CgProfile />
                    My Profile
                  </button>
                </div>
                <div className="mx-auto text-center sm:py-1 py-1 flex items-center justify-center lg:p-3 md:p-2 text-xs md:text-base  ">
                  <button
                    onClick={() => setShowComponent(1)}
                    className=" w-[90%] border border-primary bg-primary text-white px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-white hover:text-black  rounded-sm"
                  >
                    <IoMdLogOut />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <RenderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
