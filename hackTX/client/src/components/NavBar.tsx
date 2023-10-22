import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row h-20 text-lg max-w-screen flex-wrap justify-between pl-10 pr-16 py-5 bg-navgray">
        <a href="/" className="flex flex-row">
          <img src="./futuresight.svg" alt="FutureSight Logo" />
        </a>

        <div className="flex flex-row gap-5 content-center">
          <div className="flex flex-row mt-2"><a href="/LoginPage">Login</a></div>
          <button className="btn bg-buttonlightblue hover:bg-slate-400 text-black flex flex-row">
            <a href="/RegisterPage">Register</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
