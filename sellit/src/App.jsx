import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import MyPage from "./components/MyPage/MyPage";
import OldProducts from "./components/OldProducts/OldProducts";
import MainPage from "./components/MainPage";
import Products from "./components/Products/Products";
import Index1 from "./components/Products/Index1";
import Product from "./components/Products/Product";
import Signup from "./components/Signup/Signup";
import Login from "./components/Signup/Login";
import MyFavourites from "./components/MyPage/MyFavourites";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/old-products" element={<OldProducts />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/myfavourites" element={<MyFavourites />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
