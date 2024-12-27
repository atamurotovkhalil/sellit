import React from "react";
import { FcContacts } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container">
      <div>
        <div className="flex justify-center items-center">
          <FcContacts className="text-9xl mt-8  text-primary" />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl m-4 p-4 underline italic text-primary hover:no-underline">
            Login
          </h1>
        </div>
        <form className="p-5 m-5 w-[70%] mx-auto">
          <div className="mx-[200px] border border-secondary rounded-xl p-5 bg-gradient-to-tr from-secondary to-primary shadow-2xl">
            <div>
              <div className="flex justify-start items-center">
                <label className="text-xl m-1 italic">Username*</label>
              </div>
              <div className="flex m-2  items-center justify-center">
                <input
                  className="border border-black w-[320px] rounded-xl p-3"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center">
                <label className="text-xl m-1 italic">Password*</label>
              </div>
              <div className="flex m-2  items-center justify-center">
                <input
                  className="border border-black w-[320px] rounded-xl p-3 "
                  type="text"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center">
                <label className="text-xl m-1 italic">Confirm Password*</label>
              </div>
              <div className="flex m-2  items-center justify-center">
                <input
                  className="border border-black w-[320px] rounded-xl p-3 "
                  type="text"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                value="signup"
                className="border border-black rounded-xl px-4 py-2 m-2 hover:bg-primary hover:text-white"
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
