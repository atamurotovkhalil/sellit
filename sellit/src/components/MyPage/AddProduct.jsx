import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { useOldStoredProduct } from "./../MyPage/OldPStored/old-stored";

const productDetail = {
  id: 0,
  name: "",
  price: "",
  description: "",
  category: "other",
  isAvailable: false,
  image: "",
  nameIsValid: undefined,
  priceIsValid: undefined,
  descriptionIsValid: undefined,
  categoryIsValid: undefined,
  imageIsValid: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME_CHANGE":
      return {
        ...state,
        name: action.payload,
        nameIsValid: action.payload.length >= 6,
      };
    case "PRICE_CHANGE":
      return {
        ...state,
        price: action.payload,
        priceIsValid: action.payload.match(/^[0-9]+(\.[0-9]{1,2})?$/) !== null,
      };
    case "DESCRIPTION_CHANGE":
      return {
        ...state,
        description: action.payload,
        descriptionIsValid: action.payload.length >= 10,
      };
    case "CATEGORY_CHANGE":
      return {
        ...state,
        category: action.payload,
        categoryIsValid: action.payload.length >= 2,
      };
    case "IMAGE_CHANGE":
      return {
        ...state,
        image: action.payload,
        imageIsValid: action.payload,
      };
    case "AVAILABLE_CHANGE":
      return {
        ...state,
        isAvailable: action.payload,
      };
    default:
  }
}

const AddProduct = (props) => {
  const [createProduct, dispatcher] = useReducer(reducer, productDetail);

  let [oldProduct, setOldProduct] = useState({});

  const addOldStoredProduct = useOldStoredProduct(
    (state) => state.addOldStoredProduct
  );

  function nameValidation(e) {
    if (e.target.value.length >= 6) {
      createProduct.nameIsValid === true;
    } else {
      alert("Name must be at least 6 characters long");
    }
  }
  function priceValidation(e) {
    if (e.target.value.length > 0) {
      createProduct.priceIsValid === true;
    } else {
      alert("Price must be at least 1 number character long");
    }
  }
  function descriptionValidation(e) {
    if (e.target.value.length >= 10) {
      createProduct.descriptionIsValid === true;
    } else {
      alert("Description must be at least 10 characters long");
    }
  }
  function categoryValidation(e) {
    if (e.target.value.length > 0) {
      createProduct.categoryIsValid === true;
    } else {
      alert("Select a category");
    }
  }
  function imageValidation(e) {
    if (e.target.value.length > 0) {
      createProduct.imageIsValid === true;
    } else {
      alert("Please input your product picture");
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      createProduct.nameIsValid &&
      createProduct.priceIsValid  &&
      createProduct.descriptionIsValid &&
      createProduct.imageIsValid
    ) {
      let newProduct = {
        id: createProduct?.id + 1,
        name: createProduct.name,
        price: Number(createProduct.price),
        description: createProduct.description,
        category: createProduct.category,
        image: createProduct.image,
        isAvailable: Boolean(createProduct.isAvailable),
      };
      setOldProduct(newProduct);
      addOldStoredProduct(newProduct);
      
      
    } else {
      alert("Please fill all required fields correctly");
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container  p-3 shadow-xl border  sm:grid-cols-2  border-green my-1 sm:my-2 gap-2 sm:gap-3 justify-around">
          <div className="p-1 ">
            <label className="text-xs sm:text-xl">Product</label>
            <input
              type="text"
              value={createProduct.name}
              onBlur={(e) => nameValidation(e)}
              onChange={(e) =>
                dispatcher({
                  type: "NAME_CHANGE",
                  payload: e.target.value,
                })
              }
              placeholder="Name of Product"
              className="sm:w-full w-[100%] text-xs sm:text-xl rounded-full p-1 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
            />
          </div>
          <div className="p-1 ">
            <label className="text-xs sm:text-xl">Product Price</label>
            <input
              type="number"
              value={createProduct.price}
              onBlur={(e) => priceValidation(e)}
              onChange={(e) =>
                dispatcher({
                  type: "PRICE_CHANGE",
                  payload: e.target.value,
                })
              }
              placeholder="Price of Product"
              className="sm:w-full w-[100%] text-xs sm:text-xl rounded-full p-1 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
            />
          </div>
          <div className="flex">
            <div className="p-1 w-[50%]">
              <label className="text-xs sm:text-xl">Description</label>
              <input
                type="text"
                value={createProduct.description}
                onBlur={(e) => descriptionValidation(e)}
                onChange={(e) =>
                  dispatcher({
                    type: "DESCRIPTION_CHANGE",
                    payload: e.target.value,
                  })
                }
                placeholder="Description of Product"
                className="sm:w-full w-[100%] text-xs sm:text-xl rounded-full p-1 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
              />
            </div>
            <div className="p-1 w-[50%]">
              <label className="text-xs sm:text-xl">Category</label>
              <select
                value={createProduct.category}
                onBlur={(e) => categoryValidation(e)}
                onChange={(e) =>
                  dispatcher({
                    type: "CATEGORY_CHANGE",
                    payload: e.target.value,
                  })
                }
                className="sm:w-full w-[100%] text-xs sm:text-xl rounded-full p-1 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
              >
                <option value="other">Other</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
          </div>
          <div className="p-1">
            <label className="text-xs sm:text-xl">File</label>
            <input
              type="file"
              placeholder="Product Image"
              value={createProduct.image}
              onBlur={(e) => imageValidation(e)}
              onChange={(e) =>
                dispatcher({
                  type: "IMAGE_CHANGE",
                  payload: e.target.value,
                })
              }
              className="sm:w-full w-[100%] text-xs sm:text-xl rounded-full p-1 px-3 border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
            />
          </div>
          {/* <div className="flex items-center justify-center gap-5">
            <label className="text-xs sm:text-xl">Availibility</label>
            <input
              role="switch"
              id="isAvailable"
              checked={createProduct.isAvailable}
              onChange={(e) =>
                dispatcher({
                  type: "AVAILABLE_CHANGE",
                  payload: e.target.checked,
                })
              }
              className="sm:w-5 sm:h-5 w-4 h-4"
              type="checkbox"
            ></input>
          </div> */}
          <div className="mx-auto text-center flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
            <button
              type="submit"
              className="text-white border border-primary hover:bg-white hover:text-black bg-primary px-8 py-2 rounded"
            >
              + Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
