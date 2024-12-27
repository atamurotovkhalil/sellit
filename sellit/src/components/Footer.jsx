import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary text-white">
        <div className=" container">
          <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-10">
            <div className="col-span-2 gap-4">
              <div className="flex lg:justify-start justify-center items-center gap-2 p-3">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow">
                  <SiSellfy className="text-xl text-green1" />
                </div>
                <p className="text-2xl">Sell It</p>
              </div>
              <p className="p-3 text-center lg:text-left">
                Follow us on Social Network
              </p>
              <div className="sm:flex flex justify-evenly items-center gap-1 p-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaFacebook className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaTwitter className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaPinterest className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaInstagramSquare className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaYoutube className="text-xl text-white" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="lg:flex justify-between items-center">
                <div className=" text-center lg:text-left mb-4">
                  <p className="text-2xl py-3">Computer Shop</p>
                  <div className=" cursor-pointer">
                    <div className="p-2">
                      <Link
                        to="/"
                        className=" text-center hover:text-[18px] hover:text-yellow"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/products"
                        className=" text-center hover:text-[18px] hover:text-yellow"
                      >
                        New-Products
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/old-products"
                        className=" hover:text-[18px] hover:text-yellow"
                      >
                        Old-Products
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/mypage"
                        className=" hover:text-[18px] hover:text-yellow"
                      >
                        My Page
                      </Link>
                    </div>
                  </div>
                </div>

                <div className=" text-center lg:text-left">
                  <p className="text-2xl p-3">Contact Us</p>
                  <ul className="inline-block">
                    <li className="p-2">+821028301155</li>
                    <li className="p-2">atamurotovkhalil@gmail.com</li>
                    <li className="p-2">123456, Royal, Messey, New Jersey</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-3 col-span-2">
              <p className="p-3 w-full text-xl lg:text-2xl text-center lg:text-left">
                Get Notified
              </p>
              <div className="flex items-center p-3 ">
                <input
                  className="rounded-l-md w-full h-10 px-3 text-lg text-black outline-none"
                  type="text"
                  placeholder="Say something..."
                />
                <IoSend className="text-2xl text-green1 size-10 mx-3 rounded-r-md bg-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container">
          <div className="flex justify-between items-center ">
            <div className="flex justify-between items-center gap-3 p-1">
              <p className="text-black flex justify-center items-center">
                Copyright <FaRegCopyright className="mx-3" /> 2024 Jeonbuk
                Korean Learning Center. All rights Reserved.
              </p>
            </div>
            <div>
              <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                <p className="text-black">
                  User Terms & Conditions | Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
