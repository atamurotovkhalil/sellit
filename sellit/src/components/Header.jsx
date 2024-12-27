import React from "react";
import MainImage from "./../../public/images/MainImage.png";
import { FaLaptop } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import OurProducts from "./OurProducts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainImage2 from "./../../public/images/ASUS.webp";
import MainImage3 from "./../../public/images/DELL.webp";
import MainImage4 from "./../../public/images/HP.jpg";
import MainImage5 from "./../../public/images/Macbook.jpg";
import Popup from "./Products/PopUp/Popup";
import { Link } from "react-router";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Header = (props) => {
  return (
    <div
      className="bg-cover  h-[530px] w-full"
      style={{
        backgroundImage:
          "url(https://rog.asus.com/media/1672746442210.jpg)",
      }}
    >
      <div className="">
        <div className="container grid grid-cols-2 gap-3">
          <div className="my-[20px] ">
            <div className="flex items-center justify-between my-[50px]">
              <FaLaptop className="text-4xl text-secondary" />
              <h1 className="text-4xl   text-secondary">
                {" "}
                The best selling online platform
              </h1>
            </div>
            <p className="text-xl bg-primary/80 my-[50px] w-[75%] rounded-md mb-[180px]  bold text-white">
              {" "}
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Link
              to="/products"
              className="text-white border border-primary hover:bg-white hover:text-black bg-secondary/80 px-8 py-2 rounded"
            >
              Shop now
            </Link>
          </div>
          {/* <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={"desktop" !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="my-[20px]">
                <img
                  className="bg_cover w-[600px] h-[500px]"
                  src={MainImage}
                  alt="header-image"
                />
              </div>
            </div>

            <div>
              <div className="my-[20px]">
                <img
                  className="bg_cover w-[600px] h-[500px]"
                  src={MainImage3}
                  alt="header-image"
                />
              </div>
            </div>
            <div>
              <div className="my-[20px]">
                <img
                  className="bg_cover w-[600px] h-[500px]"
                  src={MainImage4}
                  alt="header-image"
                />
              </div>
            </div>
          </Carousel> */}
        </div>
        <div className="container grid grid-cols-3">
          <div className="gap-4 border   border-secondary bg-secondary/40">
            <div className="flex items-center justify-around">
              <FaShippingFast className="text-5xl text-white" />
              <h2 className="text-3xl text-white">Free Shipping</h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl text-white italic">
                Free Shipping for above 500$
              </p>
            </div>
          </div>
          <div className="gap-4 border  border-secondary bg-secondary/40">
            <div className="flex items-center justify-around">
              <MdOutlinePayment className="text-5xl text-white" />
              <h2 className="text-3xl text-white">Flexible Payment</h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl text-white italic">
                Multiple secure payment options
              </p>
            </div>
          </div>
          <div className="gap-4 border  border-secondary bg-secondary/40">
            <div className="flex items-center justify-around">
              <BiSupport className="text-5xl text-white" />
              <h2 className="text-3xl text-white">24x7 Support</h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl text-white italic">
                We support online all days
              </p>
            </div>
          </div>
        </div>

        {/* <OurProducts /> */}
      </div>
    </div>
  );
};

export default Header;
