import React from "react";

import logo from "../assets/app-logo-cut.png";
import { Link, redirect } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    redirect("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-2 rounded-3xl shadow-md bg-purple-light-bg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="flex justify-center py-5">
          <img src={logo} alt="Talklia" className="absolute h-20 -top-10" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
        </h1>

        <div className="w-4/5 mx-auto pt-7">
          <form onSubmit={handleSubmit}>
            <div className="py-3">
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

            <div className="py-3">
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
                  placeholder="********"
                />
              </label>
            </div>

            <button
              className="w-full my-5 bg-purple-600 h-10 rounded-lg text-white hover:bg-purple-700 hover:text-gray-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="text-center mb-5">
          New to <span className="text-sky-400 font-semibold">Talkia</span> ?{" "}
          <Link
            to="/signup"
            className="text-blue-400 font-semibold underline mx-2"
          >
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*
return (
  // <div className=" bg-login-background h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center mx-auto">
    //   <div className=" bg-purple-light-bg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 text-center w-96 min-h-96 rounded-3xl flex flex-col items-center py-6">
    //     <div className="absolute">
    //       <img src={logo} alt="Talkia" className=" h-20 relative -top-16" />
    //     </div>
    //     <div className="my-6">
    //       <p className=" text-3xl font-semibold">Login</p>
    //     </div>
    //     <form className="" onSubmit={handleSubmit}>
    //       <div className="w-full flex flex-col gap-6 my-5 ">
    //         <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 16 16"
    //             fill="currentColor"
    //             className="w-4 h-4 opacity-70"
    //           >
    //             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    //           </svg>
    //           <input type="text" className="grow " placeholder="Username" />
    //         </label>
    //         <label className="input flex items-center gap-2 bg-dark-purple bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 16 16"
    //             fill="currentColor"
    //             className="w-4 h-4 opacity-70"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <input
    //             type="password"
    //             className="grow outline-none"
    //             placeholder="********"
    //           />
    //         </label>
    //         <button
    //           className="w-full bg-purple-600 h-10 rounded-lg text-white hover:bg-purple-700 hover:text-gray-300"
    //           type="submit"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>

    //     <div>
    //       New to <span className="text-sky-400 font-semibold">Talkia</span> ?{" "}
    //       <Link
    //         to="/signup"
    //         className="text-blue-400 font-semibold underline mx-2"
    //       >
    //         Sign-up
    //       </Link>
    //     </div>
    //   </div>
    // </div>
);
*/
