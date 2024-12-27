import React, { useEffect, useReducer, useState } from "react";
import { FcAddressBook, FcGoogle } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { SiApple } from "react-icons/si";
import { Link } from "react-router";
import { SiSellfy } from "react-icons/si";

const userDetail = {
  username: "",
  password: "",
  email: "",
  usernameIsValid: undefined,
  passwordIsValid: undefined,
  emailIsValid: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case "USERNAME_INPUT":
      return {
        ...state,
        username: action.payload,
        usernameIsValid: action.payload.length >= 6,
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.payload,
        passwordIsValid:
          action.payload.length >= 6 && action.payload.includes("_" || "-"),
      };
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.payload,
        emailIsValid:
          action.payload.includes("@") && action.payload.includes("."),
      };
  }
}

const Signup = () => {
  const [user, dispatcher] = useReducer(reducer, userDetail);
  const [addInput, setAddInput] = useState(false);
  const [inputs, setInputs] = useState({
    username: user.username,
    password: user.password,
    email: user.email,
  });

  if (user.usernameIsValid === false) {
    alert("Username must be at least 6 characters long");
  } else if (user.passwordIsValid === false) {
    alert(
      "Password must be at least 6 characters long and contain at least one underscore or hyphen"
    );
  } else if (user.emailIsValid === false) {
    alert("Email must include '@' and '.'");
  } else console.log(user);

  function handleSubmit(event) {
    event.preventDefault();

    if (user.usernameIsValid && user.passwordIsValid && user.emailIsValid) {
      setInputs({
        username: user.username,
        password: user.password,
        email: user.email,
      });
      alert("Form submitted successfully!");
    } else {
      alert("Form validation failed!");
      // Clear inputs
      setInputs({
        username: "",
        password: "",
        email: "",
      });
    }
  }
  console.log(inputs);

  return (
    <div>
      <div>
        <div className="lg:container mt-[90px] md:px-10 sm:px-5 px-1">
          <div className="  rounded-xl border-black">
            <div className="h-full w-full">
              <div className=" items-center justify-center">
                <div className="flex items-center py-8 justify-center">
                  <div className="bg-yellow text-green  rounded-full">
                    <SiSellfy className="p-3 text-8xl" />
                  </div>
                </div>
                <p className="flex py-5 items-center justify-center text-3xl">
                  Signup
                </p>
                <form onSubmit={handleSubmit}>
                  <div data-aos="fade-up" className="container p-4">
                    <div className="">
                      <div className="flex justify-center">
                        <input
                          id="username"
                          type="text"
                          //value={inputs.username}
                          onBlur={(e) =>
                            dispatcher({
                              type: "USERNAME_INPUT",
                              payload: e.target.value,
                            })
                          }
                          placeholder="Username"
                          className={
                            user.usernameIsValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                      <div className="flex justify-center">
                        <input
                          id="password"
                          type="password"
                          //value={inputs.password}
                          onBlur={(e) =>
                            dispatcher({
                              type: "PASSWORD_INPUT",
                              payload: e.target.value,
                            })
                          }
                          placeholder="Password"
                          className={
                            user.passwordIsValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                      <div className="flex justify-center">
                        <input
                          id="email"
                          type="email"
                          //value={inputs.email}
                          onBlur={(e) =>
                            dispatcher({
                              type: "EMAIL_INPUT",
                              payload: e.target.value,
                            })
                          }
                          placeholder="Email"
                          className={
                            user.emailIsValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-center text-center items-center py-2">
                      <button
                        type="submit"
                        className="flex items-center justify-between shadow-xl border   py-1 px-[30px] text-lg hover:bg-primary hover:text-white bg-secondary rounded-md"
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="flex justify-center text-center items-center py-2">
                      <Link
                        to=""
                        className="flex items-center justify-between shadow-xl border   py-1 px-[40px] text-lg hover:bg-primary hover:text-white bg-secondary rounded-md"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>

                <div className="flex py-3 items-center justify-center">
                  <button
                    type="submit"
                    className="border-black flex items-center justify-around border hover:bg-slate-100 text-center text-xs sm:text-sm font-bold 
          sm:w-4/5 md:w-2/5 base:w-3/5 lg:w-1/5 cursor-pointer bg-white text-black
                    py-1 p-5 rounded-full"
                  >
                    <FcGoogle />
                    <span> Continue with Google </span>
                  </button>
                </div>
                <div>
                  <div className="flex py-3 items-center justify-center">
                    <button className="text-sky-800">
                      {" "}
                      Continue with email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
