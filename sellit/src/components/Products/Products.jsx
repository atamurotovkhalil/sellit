import React from "react";
import ProductsOf from "./Products.json";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { Link } from "react-router";
import Product from "./Product";
import { Route, Routes } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiDell } from "react-icons/si";
import { SiAcer } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { GrHp } from "react-icons/gr";
import { SiAsus } from "react-icons/si";

const Products = () => {
  let [brand, setBrand] = useState("all");
  let [ram, setRam] = useState("all");
  let [storage, setStorage] = useState("all");
  let [availability, setAvailability] = useState("all");
  let [processor, setProcessor] = useState("all");
  console.log(brand);

  const filteredProducts = ProductsOf.filter((product) => {
    switch (brand) {
      case "all":
        return true;
      case "hp":
        return product.brand === "HP";
      case "asus":
        return product.brand === "ASUS";
      case "apple":
        return product.brand === "APPLE";
      case "dell":
        return product.brand === "DELL";
      case "acer":
        return product.brand === "ACER";
      default:
        return false;
    }
  });

  const filteredProducts1 = filteredProducts.filter((product) => {
    switch (ram) {
      case "all":
        return true;
      case "8gb":
        return product.RAM === "8GB";
      case "16gb":
        return product.RAM === "16GB";
      default:
        return false;
    }
  });

  const filteredProducts2 = filteredProducts1.filter((product) => {
    switch (storage) {
      case "all":
        return true;
      case "256gb":
        return product.storage === "256GB";
      case "512gb":
        return product.storage === "512GB";
      default:
        return false;
    }
  });

  const filteredProducts3 = filteredProducts2.filter((product) => {
    switch (availability) {
      case "all":
        return true;
      case "available":
        return product.isAvailable === true;
      case "unavailable":
        return product.isAvailable === false;
      default:
        return false;
    }
  });

  const filteredProducts4 = filteredProducts3.filter((product) => {
    switch (processor) {
      case "all":
        return true;
      case "i5":
        return product.processor === "I5";
      case "i7":
        return product.processor === "I7";
      case "amd5":
        return product.processor === "AMD5";
      case "amd7":
        return product.processor === "AMD7";
      case "m1":
        return product.processor === "M1";
      case "m2":
        return product.processor === "M2";
      default:
        return false;
    }
  });
  

  return (
    <div className="container">
      <div className=" m-3 p-3 grid grid-cols-4">
        <div className="col-span-1  shadow-2xl  h-[500px] m-3 p-3">
          <div>
            <p className="text-xl m-2 italic">Sorting:</p>
          </div>
          <div>
            <p className="text-xl italic m-2">*By Brand</p>
            <select
              onChange={(e) => setBrand(e.target.value)}
              className="w-[200px] border border-black rounded-md"
            >
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="asus">ASUS</option>
              <option value="apple">APPLE</option>
              <option value="dell">DELL</option>
              <option value="acer">ACER</option>
            </select>
          </div>
          <div>
            <p className="text-xl italic m-2">*By RAM</p>
            <select
              onChange={(e) => setRam(e.target.value)}
              className="w-[200px] border border-black rounded-md"
            >
              <option value="all">All</option>
              <option value="8gb">8GB</option>
              <option value="16gb">16GB</option>
            </select>
          </div>
          <div>
            <p className="text-xl italic m-2">*By ROM</p>
            <select
              onChange={(e) => setStorage(e.target.value)}
              className="w-[200px] border border-black rounded-md"
            >
              <option value="all">All</option>
              <option value="256gb">256GB</option>
              <option value="512gb">512GB</option>
            </select>
          </div>
          <div>
            <p className="text-xl italic m-2">*By Availability</p>
            <select
              onChange={(e) => setAvailability(e.target.value)}
              className="w-[200px] border border-black rounded-md"
            >
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <div>
            <p className="text-xl italic m-2">*By Processor</p>
            <select
              onChange={(e) => setProcessor(e.target.value)}
              className="w-[200px] border border-black rounded-md"
            >
              <option value="all">All</option>
              <option value="i7">I7</option>
              <option value="i5">I5</option>
              <option value="amd5">AMD5</option>
              <option value="amd7">AMD7</option>
              <option value="m1">M1</option>
              <option value="m2">M2</option>
            </select>
          </div>
        </div>
        <div className="col-span-3">
          <ul className="grid grid-cols-3">
            {filteredProducts4.map((product) => (
              <li
                className=" p-3 m-3 shadow-2xl hover:translate-x-2 hover:-translate-y-2 duration-75"
                key={product.id}
              >
                <div>
                  <div className="flex justify-start items-center gap-4">
                    {product.brand === "APPLE" ? (
                      <FaApple className="text-2xl" />
                    ) : product.brand === "ACER" ? (
                      <SiAcer className="text-2xl" />
                    ) : product.brand === "SAMSUNG" ? (
                      <SiSamsung className="text-2xl" />
                    ) : product.brand === "HP" ? (
                      <GrHp className="text-2xl" />
                    ) : product.brand === "DELL" ? (
                      <SiDell className="text-2xl" />
                    ) : (
                      <SiAsus className="text-2xl" />
                    )}
                    <h2 className="italic border-b-2 border-primary">
                      {product.brand}
                    </h2>
                  </div>
                  <p>{product.description}</p>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[200px] h-[150px]"
                  />
                </div>
                <div className="m-1">
                  <span className="float-right text-green-800">
                    {product.price}$
                  </span>
                  <div className="flex items-center justify-start gap-1">
                    <FaStar className="text-center text-secondary" />
                    <span className="text-center">Rating {product.rating}</span>
                  </div>
                </div>
                <div>
                  
                </div>
                <div className="flex items-end justify-end">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
                  >
                    See in Detail
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
