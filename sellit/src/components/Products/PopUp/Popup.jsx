import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Popup = () => {
  return (
    <div>
      <div
        className="h-screen w-screen fixed top-0 left-0 bg-primary/50 z-50
                backdrop-blur-xs"
      >
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    p-0  shadow-md bg-primary/80  rounded-full duration-200
                     w-[400px]  h-[400px]"
        >
          <div className="flex text-white w-full h-full items-center justify-center">
            <FaCartPlus className="text-[300px]" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
