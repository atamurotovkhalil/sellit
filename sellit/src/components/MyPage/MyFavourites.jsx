import React, { useReducer } from "react";
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
import { useCartStore } from "./../CartStore/cart-store";
import { IoCloseOutline } from "react-icons/io5";
import { FcEmptyTrash } from "react-icons/fc";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
  }
}

const MyFavourites = () => {
  const [count, dispatcher] = useReducer(reducer, 0);
  const buyNow = useCartStore((state) => state.buyNow);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const popup = useCartStore((state) => state.popup);
  const popupProduct = useCartStore((state) => state.popupProduct);
  const setClosePopup = useCartStore((state) => state.setClosePopup);

  return (
    <div className="container">
      {cart.length > 0 ? (
        cart?.map((product) => (
          <div className="border border-black m-3 p-5">
            <div className=" items-center bold italic text-xl justify-between">
              <div className="border border-black m-2 p-2">
                <h1 className="flex items-center justify-start gap-3 p-2 border-b border-black">
                  <AiOutlineProduct> </AiOutlineProduct> Product: {product.name}
                </h1>
                <p className="flex items-center justify-start gap-3 p-2 text-green-800 border-b border-black">
                  <IoIosPricetags />
                  Price: {product.price}$
                </p>
                <p className=" flex  items-center  justify-start gap-3 p-2 border-b border-black">
                  <CgSmartphoneRam />
                  RAM: {product.RAM}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <MdSdStorage />
                  Storage: {product.storage}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <GiProcessor />
                  Processor: {product.processor}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <MdEventAvailable />
                  Availability:
                  {product.isAvailable ? (
                    <span className="text-green-900 ">"Available"</span>
                  ) : (
                    <span className="text-red-900"> "Unavailable"</span>
                  )}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="border border-black m-2 p-2">
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <FaComment />
                  Comment: "{product.description}"
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <FcRating />
                  Rating: {product.rating}
                </p>
                {/* Add review form and display reviews */}
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <GoCodeReview />
                  Total Reviews: {product.reviews}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <TbBoxModel />
                  Processor Model: {product.processormodel}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <MdScreenshotMonitor />
                  Screen: {product.screen}
                </p>
                <p className=" flex items-center  justify-start gap-3 p-2 border-b border-black">
                  <BiCategory />
                  Category: {product.category}
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <button
                  onClick={() => buyNow(product)}
                  className=" flex items-center  justify-start gap-3 text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                >
                  <MdOutlineAddShoppingCart />
                  Buy now
                </button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-white flex items-center  justify-start gap-3  border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                >
                  <RiArrowGoBackFill /> Delete from Favourites
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[80px] py-[100px] text-center items-center justify-center gap-10">
          Your Cart is Empty now!{" "}
          <div className="flex items-center justify-center">
            <FcEmptyTrash />
          </div>
        </p>
      )}
      {popup && (
        <div
          className="h-screen w-screen fixed top-0 left-0 bg-primary/80 z-50
                backdrop-blur-sm"
        >
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    p-6  shadow-md bg-white  rounded duration-200
                     w-[500px]  h-[500px]"
          >
            <div className="gap-1">
              <div className="flex items-center py-1 justify-between">
                <div className="text-xl">
                  <h1>Number of Items</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer border border-black rounded-md"
                    onClick={setClosePopup}
                  />
                </div>
              </div>
              <ul>
                <li className="border  w-[450px]  h-[400px] overflow-scroll">
                  <div className="w-full  h-full p-1  shadow-xl">
                    <div className="p-1 sm:p-2 border shadow-lg rounded-md flex justify-center">
                      <img
                        className="w-[200px] h-[200px] "
                        src={popupProduct.image}
                        alt="product image"
                      />
                    </div>
                    <div className="text-xs sm:text-xl  sm:p-2">
                      <p>{popupProduct.name}</p>
                    </div>
                    <div className="flex px-1 py-1 sm:gap-1 sm:p-1 items-center justify-between  gap-1">
                      <h1 className="p-1 sm:p-2 text-xs sm:text-xl font-bold">
                        {popupProduct.price * count}$
                      </h1>
                      <button
                        disabled={count <= 1}
                        onClick={() =>
                          dispatcher({
                            type: "DECREMENT",
                          })
                        }
                        className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        onChange={() => {}}
                        className="w-10"
                        value={count}
                      />
                      <button
                        onClick={() =>
                          dispatcher({
                            type: "INCREMENT",
                          })
                        }
                        className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                      >
                        +
                      </button>

                      <div className="flex  items-center justify-center">
                        <button
                          className="bg-gradient-to-r w-20 sm:text-xl text-[10px] from-primary to-secondary
                            hover:scale-105 duration-200 text-white
                            p-1 rounded-xl "
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
