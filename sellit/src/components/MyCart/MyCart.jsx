import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdSdStorage } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { GoCodeReview } from "react-icons/go";
import { TbBoxModel } from "react-icons/tb";
import { MdScreenshotMonitor } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useCartStore } from "../CartStore/cart-store";

const MyCart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  console.log(cart)

  return (
    <div className="container">
      <div>
        <button
          onClick={() => clearCart()}
          className="text-white flex items-center justify-start gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
        >
          <RiArrowGoBackFill /> Clear Cart
        </button>
      </div>
      <ul className="border border-black m-3 p-5">
        {cart?.map((product) => (
          <li  
            key={product.id}
            className="items-center bold italic text-xl justify-between"
          >
            <div className="border border-black m-2 p-2">
              <h1 className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <AiOutlineProduct /> Product: {product.name}
              </h1>
              <p className="flex items-center justify-start gap-3 p-2 text-green-800 border-b border-black">
                <IoIosPricetags /> Price: {product.price}$
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <CgSmartphoneRam /> RAM: {product.RAM}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <MdSdStorage /> Storage: {product.storage}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <GiProcessor /> Processor: {product.processor}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <MdEventAvailable /> Availability:{" "}
                {product.isAvailable ? (
                  <span className="text-green-900">Available</span>
                ) : (
                  <span className="text-red-900">Unavailable</span>
                )}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="border border-black m-2 p-2">
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <FaComment /> Comment: "{product.description}"
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <FcRating /> Rating: {product.rating}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <GoCodeReview /> Total Reviews: {product.reviews}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <TbBoxModel /> Processor Model: {product.processormodel}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <MdScreenshotMonitor /> Screen: {product.screen}
              </p>
              <p className="flex items-center justify-start gap-3 p-2 border-b border-black">
                <BiCategory /> Category: {product.category}
              </p>
            </div>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-white flex items-center justify-start gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
              >
                <RiArrowGoBackFill /> Remove Product
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
