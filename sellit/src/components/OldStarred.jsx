import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs"; //

const OldStarred = () => {
  return (
    <div className="bg-primary">
      <div className="container text-white">
        <div>
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-full flex flex-col gap-2 text-center lg:text-left">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-white">
                -Your Products In Sale -
              </p>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl ml-4 text-xl font-medium">
                <span className="text-green">Here Other Services</span>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-1 base:grid-cols-1 lg:grid-cols-2 gap-5 cursor-pointer">
            <div className="w-full md:flex base:flex justify-center items-center">
              <div className="realtive w-full flex items-end justify-center p-2">
                <img
                  src="https://media.istockphoto.com/id/1400570369/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.jpg?s=612x612&w=0&k=20&c=hTH7vKZphyeXnT-MM484pS_54GH6j9O7Ev2QyMkxzTQ="
                  alt="VideContent"
                  className="border-black object-cover rounded-xl"
                />
                <div className="absolute sm:hidden hidden base:hidden md:hidden lg:block gap-2 mb-3">
                  <div className="md:flex items-center justify-between gap-2">
                    <div className="gap-2 p-1 text-white">
                      <p className="text-lg border p-1 px-2 rounded-xl hover:bg-primary bg-secondary/50 hover:scale-105 hover:transition-all duration-300">
                        Desktops
                      </p>
                    </div>
                    <div className="gap-2 p-1 text-white">
                      <p className="text-lg border p-1 px-2 rounded-xl hover:bg-primary bg-secondary/50 hover:scale-105 hover:transition-all duration-300">
                        Earphones
                      </p>
                    </div>
                    <div className="gap-2 p-1 text-white">
                      <p className="text-lg border p-1 px-2 rounded-xl hover:bg-primary bg-secondary/50 hover:scale-105 hover:transition-all duration-300">
                        Clothes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="gap-2 p-1 text-white ">
                      <p className="text-lg border p-1 px-2 rounded-xl hover:bg-primary bg-secondary/50 hover:scale-105 hover:transition-all duration-300">
                        Tablets
                      </p>
                    </div>
                    <div className="gap-2 p-1 text-white ">
                      <p className="text-lg border p-1 px-2 rounded-xl hover:bg-primary bg-secondary/50 hover:scale-105 hover:transition-all duration-300">
                        Electronics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 p-2 gap-2">
              <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
                <div className="">
                  <IoIosPricetags className="lg:text-6xl text-2xl md:text-5xl text-secondary" />
                </div>
                <p className="text-md md:text-lg font-bold text-center mt-4 text-blue">
                  Affordable Price
                </p>
                <p className="text-md md:text-base bold text-center p-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <BiLogoMicrosoftTeams className="lg:text-5xl text-2xl md:text-3xl text-secondary" />
                  </div>
                  <p className="text-md md:text-lg font-bold text-center mt-4 text-red">
                    Qualified Team
                  </p>
                  <p className="text-md md:text-base bold text-center p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <FaBagShopping className="lg:text-5xl text-2xl md:text-3xl text-secondary" />
                  </div>
                  <p className="text-md md:text-lg font-bold text-center mt-4 text-green">
                    High Sale Rating
                  </p>
                  <p className="text-md md:text-base bold text-center p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center hover:rounded-xl hover:shadow-xl p-2 transition-all duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div className="">
                    <BsAwardFill className="lg:text-5xl text-2xl md:text-3xl text-secondary" />
                  </div>
                  <p className="text-md md:text-lg font-bold text-center mt-4 text-yellow">
                    Most Visited
                  </p>
                  <p className="text-md md:text-base bold text-center p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldStarred;
