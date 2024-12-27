import React from "react";
import { IoIosClose } from "react-icons/io";
import { SiSellfy } from "react-icons/si";
import NavbarLinks from "./Navbar.json";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Header from "./Header";
import { Link } from "react-router";
import { useCartStore } from "./CartStore/cart-store";
import Popup from "./Products/PopUp/Popup";
import { usePopup } from "./Products/popup-store/popUpStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  const popup = usePopup((state) => state.popup);

  return (
    <div className="">
      <div className="bg-primary text-white">
        <div className="container flex items-center mx-auto justify-between">
          <div>
            <p>Support +82101234567</p>
          </div>
          <div className="flex items-center justify-between mx-2">
            <p>Sign up and GET 10% OFF for your first order</p>
            <Link
              to="/signup"
              className=" text-secondary underline px-4 py-2 rounded"
            >
              Sign up
            </Link>
          </div>
          <div>
            <IoIosClose />
          </div>
        </div>
      </div>
      <div className=" border-b-2 border-black ">
        <div className="container mx-auto flex items-center shadow-lg justify-between">
          <div className="flex items-center justify-between gap-4">
            <SiSellfy className="text-secondary text-2xl" />
            <p className="text-2xl">
              Sell It <span className="text-secondary">|</span>Your E-Shop
            </p>
          </div>
          <div className="text-xl gap-5">
            {NavbarLinks.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="hover:text-white bold text-primary hover:bg-primary border-primary  px-8 py-3"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-between items-center gap-10 p-1">
            <Link className="relative flex" to="/myfavourites">
              <FaShoppingCart className="text-2xl m-2" />
              <p className="bg-secondary text-xs w-5 h-5 absolute rounded-full text-center">
                {cart.length ? cart.length : 0}
              </p>
            </Link>
            <Link to="/signup">
              <IoPerson className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      {popup && <Popup />}
      <Header />
    </div>
  );
};

export default Navbar;
