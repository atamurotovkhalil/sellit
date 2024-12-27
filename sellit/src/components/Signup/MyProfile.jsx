import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-lg italic underline">My Profile</h1>
          </div>
          <div className="flex justify-center items-center m-3 p-3">
            <div>
              <div className="flex justify-center ">
                <img
                  
                  alt="User Avatar"
                  className=" border-2 m-3 p-3 border-green rounded-full w-24 h-24"
                />
              </div>
              <p className="flex justify-center text-xs md:text-base">
                UserName: Khalil Atamurotov
              </p>
              <p className="flex justify-center text-xs md:text-base">
                Email: atamurotovkhalil@example.com
              </p>
              <p className="flex justify-center text-xs md:text-base">
                Phone: +821028301155
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex md:flex-row flex-col justify-between ">
              <div className="lg:p-3 p-1 w-full">
                <p className="">Your name*</p>
                <input
                  type="text"
                  className="border px-3 py-1 border-primary rounded-2xl w-full p-2 h-14 text-lg outline-none"
                  placeholder="Khalil Atamurotov"
                />
              </div>
              <div className="lg:p-3 p-1 w-full">
                <p>Phone*</p>
                <input
                  type="text"
                  className="border border-primary px-3 py-1 rounded-2xl w-full p-2 h-14 text-lg outline-none"
                  placeholder="+821028301155"
                />
              </div>
            </div>
            <div className="lg:p-3 p-1">
              <p>Email*</p>
              <input
                type="text"
                className="border px-3 py-1 border-primary rounded-2xl w-full outline-none p-2 h-14 text-lg"
                placeholder="atamurotovkhalil@example.com"
              />
            </div>

            <div className="mx-auto text-center flex items-center justify-center m-2  lg:p-3 md:p-2   ">
              <button className=" w-[200px] sm:w-[150px] border border-primary px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-primary hover:text-white  rounded-sm">
                + Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
