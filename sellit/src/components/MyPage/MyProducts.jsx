import React from "react";
import { useOldStoredProduct } from "./OldPStored/old-stored";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { usePopup } from "../Products/popup-store/popUpStore";
import { FcEmptyTrash } from "react-icons/fc";

const MyProducts = (props) => {
  const removeProduct = useOldStoredProduct((state) => state.removeProduct);
  const oldStoredProduct = useOldStoredProduct(
    (state) => state.oldStoredProduct
  );
  const productStatusChange = useOldStoredProduct(
    (state) => state.productStatusChange
  );
  const addToOldProducts = useOldStoredProduct(
    (state) => state.addToOldProducts
  );
  const buyNow = usePopup((state) => state.buyNow);
  function addToOldProducts1(product) {
    addToOldProducts(product);
    buyNow();
  }
  return (
    <div className="container">
      <div className="flex justify-center items-center"></div>
      <div className="">
        {oldStoredProduct.length > 0 ? (
          oldStoredProduct.map((product, index) => (
            <div key={product?.id} className=" shadow-xl text-xl m-3 p-3  ">
              <div className="flex border-b border-black items-center gap-3 justify-center text-2xl   m-1">
                <img
                  className="w-[200px] border rounded-md h-[200px] object-cover"
                  src={product?.image}
                  alt={product?.name}
                />
              </div>
              <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                <AiOutlineProduct />
                Name of Product:{" "}
                <span className="text-primary my-2">{product?.name}</span>
              </p>
              <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                <IoIosPricetags />
                Price:{" "}
                <span className="text-primary my-2">{product?.price}</span>
              </p>
              <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                <FaComment />
                Description:{" "}
                <span className="text-primary my-2">
                  {product?.description}
                </span>
              </p>
              <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                <BiCategory />
                Category:{" "}
                <span className="text-primary my-2">{product?.category}</span>
              </p>

              {/* <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                <MdEventAvailable />
                Availability:{" "}
                <span className="text-primary my-2">
                  {product?.isAvailable ? (
                    <span className="text-green-800">Avaliable</span>
                  ) : (
                    <span className="text-red-800"> Unavailable</span>
                  )}
                </span>
              </p> */}
              <div className="w-[50%] flex items-center justify-center mx-auto">
                <div className="p-1">
                  <label className="text-2xl   italic text-red-800 m-1">
                    Product Status*
                  </label>
                  <select
                    value={product.status}
                    onChange={(e) => productStatusChange(e.target.value)}
                    className="w-[80%] text-xs sm:text-xl rounded-full p-1 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
                  >
                    <option value="active" className="text-2xl text-green-700 italic  m-1">
                      Active
                    </option>
                    <option value="sold" className="text-2xl text-red-700 italic  m-1">
                      Sold
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-evenly m-3 items-center">
                <div className="w-[20%]">
                  <button
                    onClick={() => removeProduct(product?.id)}
                    className="text-white flex items-center justify-start gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
                <div className="w-[20%] ">
                  <button
                    onClick={() => addToOldProducts1(product)}
                    className="text-white flex items-center w-[250px] justify-center gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    Save and Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[80px] py-[100px] text-center items-center justify-center gap-10">
            No Old Products now!{" "}
            <div className="flex items-center justify-center">
              <FcEmptyTrash />
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
