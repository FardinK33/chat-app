import React from "react";
import logo from "../assets/app-logo-cut.png";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/checkbox.component";

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-2 rounded-3xl shadow-md bg-purple-light-bg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="flex justify-center py-5">
          <img src={logo} alt="Talklia" className="absolute h-20 -top-10" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
        </h1>

        <div className="w-4/5 mx-auto py-5 pb-0">
          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
                <MdOutlineDriveFileRenameOutline />
                <input type="text" className="grow" placeholder="Full Name" />
              </label>
            </div>

            <div className="py-2">
              <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
            </div>

            {/* <div className="py-2">
              <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div> */}

            <div className="py-2">
              <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="py-2">
              <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Confirm Password"
                />
              </label>
            </div>

            <GenderCheckbox />

            <button
              className="w-full my-5 bg-purple-600 h-10 rounded-lg text-white hover:bg-purple-700 hover:text-gray-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="text-center mb-5">
          Already Have an Account ?{" "}
          <Link
            to="/login"
            className="text-blue-400 font-semibold underline mx-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
