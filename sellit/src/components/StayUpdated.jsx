import React from "react";
import { IoSend } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const StayUpdated = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center justify-center text-center">
            <p className=" md:text-4xl text-2xl font-medium  p-2">
             Stay Updated <br />
              <span className="text-green1">
                With our Newsletter<br />
              </span>
            </p>
          </div>

          <div className="flex justify-center gap-5 items-center m-10 p-3 ">
            <FaEnvelope className="size-12 bg-secondary shadow-xl text-primary p-3 rounded-full cursor-pointer hover:bg-white hidden md:block" />
            <input
              className="rounded-full border-2 border-primary px-3 text-lg w-[350px] h-[50px] bg-white"
              type="text"
              placeholder=" Enter Email address"
            ></input>
            <IoSend className="size-8 p-2.5 text-primary w-[90px] h-[50px] shadow-xl  rounded-full hover:bg-white bg-secondary cursor-pointer hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
