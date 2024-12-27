import React, { useState, useRef } from "react";
import { useOldStoredProduct } from "./../MyPage/OldPStored/old-stored";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FcEmptyTrash } from "react-icons/fc";

const OldProducts = () => {
  const [commentPopup, setCommentPopup] = useState(false);
  const [newComment, setNewComment] = useState([]);

  const comment = useRef();

  const newOldStoredProduct = useOldStoredProduct(
    (state) => state.newOldStoredProduct
  );
  console.log(newOldStoredProduct);
  const removeOldProduct = useOldStoredProduct(
    (state) => state.removeOldProduct
  );

  function comments() {
    setCommentPopup(true);
  }
  function setClosePopup() {
    setCommentPopup(false);
  }
  function commenting() {
    setNewComment([
      ...newComment,
      {
        id: newComment?.length,
        comment: comment?.current.value,
      },
    ]);
  }

  function deleteComment(id) {
    setNewComment(newComment.filter((comment) => comment.id !== id));
  }
  console.log(newComment);

  return (
    <div className="container">
      <div className="">
        {newOldStoredProduct.length < 1 ? (
          <p className=" text-[80px] py-[100px] text-center items-center justify-center gap-10">
            No Old Products now!{" "}
            <div className="flex items-center justify-center">
              <FcEmptyTrash />
            </div>
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-1">
            {newOldStoredProduct.map((product, index) => (
              <div
                key={product?.id}
                className="border shadow-2xl text-xl m-3 p-3  w-[100%] "
              >
                <div className="flex border-b border-black items-center gap-3 justify-center text-2xl   m-1">
                  <img
                    className="w-[200px] border rounded-md h-[200px] object-cover"
                    src={product?.image}
                    alt={product?.name}
                  />
                  <div className="flex absolute mr-[150px] mt-[150px] gap-4 text-white w-[200px] justify-end items-center bg-primary rounded-full text-base px-0">
                    <div className="absolute pl-6 w-[200px]">
                      <FaStar className="  text-secondary text-4xl" />
                    </div>
                    <p className="pr-8">Used product</p>
                  </div>
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

                <p className="flex border-b border-black justify-start gap-3 items-center text-2xl   m-1">
                  <MdEventAvailable />
                  Product Status:{" "}
                  <span className="text-primary my-2">
                    {product?.productStatus === "sold" ? (
                      <span className="text-red-800"> Sold</span>
                    ) : (
                      <span className="text-green-800">Active</span>
                    )}
                  </span>
                </p>
                <div className="flex justify-evenly m-3 items-center">
                  <div className="w-[20%]">
                    <button
                      onClick={() => removeOldProduct(product.id)}
                      className="text-white flex items-center justify-start gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="w-[20%]">
                    <button
                      onClick={() => comments()}
                      className="text-white flex items-center justify-start gap-3 border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                    >
                      Comment
                    </button>
                  </div>
                </div>
                {commentPopup && (
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
                            <h1>Leave Your Comment here*</h1>
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
                            <div className="w-full  h-full p-1 ">
                              <div className="p-1 sm:p-2 border shadow-lg rounded-md flex justify-center">
                                <img
                                  className="w-[200px] h-[180px] "
                                  src={product.image}
                                  alt="product image"
                                />
                              </div>
                              <div className="text-xs sm:text-xl  sm:p-2">
                                <p>{product.name}</p>
                              </div>
                              <p>Leave your comment here*</p>
                              <div className="flex px-1 py-1 sm:gap-1 sm:p-1 items-center justify-between  gap-1">
                                <h1 className="p-1 sm:p-2 text-xs sm:text-xl font-bold">
                                  <FaComment />
                                </h1>

                                <input
                                  placeholder="Your Comment..."
                                  value={newComment.comment}
                                  ref={comment}
                                  type="text"
                                  className="border border-black w-[300px]"
                                />

                                <div className="flex  items-center justify-center">
                                  <button
                                    onClick={commenting}
                                    className="w-20 sm:text-xl text-[10px] bg-primary
                            hover:scale-105 duration-200 text-white
                            p-1 rounded-xl "
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                              <div className="">
                                <div>
                                  {newComment?.map((comment, id) => (
                                    <div
                                      key={comment.id}
                                      className="p-1 shadow-lg flex justify-between items-center sm:p-2"
                                    >
                                      <p className="overflow-y-scroll">{comment.comment}</p>
                                      <button
                                        onClick={() =>
                                          deleteComment(comment.id)
                                        }
                                        className="flex justify-end"
                                      >
                                        <MdDeleteForever className="text-2xl" />
                                      </button>
                                    </div>
                                  ))}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OldProducts;
