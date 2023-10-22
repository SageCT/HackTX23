import React from "react";
import Footer from "../components/Footer";

const RegisterPage = () => {
  return (<>
  <section id= "registerMain" className= "flex flex-col items-center justify-center m-4">

    <div id= "registerBox" className= "flex flex-col border-2 border-black rounded-xl m-4">

      <a href="#" className="flex items-center justify-center pt-8"><img src="/futuresight.svg" alt="FutureSight Logo"/></a>

      <div id= "registerText" className= "text-center mx-auto w-64">
        Sign up to discover your career path and unlock the future.
      </div>

      <div id= "registerInfo" className= "flex flex-col items-center justify-center space-y-4 p-4">

        <div id="firstLast" className= "flex space-x-2">
          <input type="text" placeholder="First Name" className="input input-bordered input-md w-full max-w-xs flex-grow"/>
          <input type="text" placeholder="Last Name" className="input input-bordered input-md w-full max-w-xs flex-grow"/>
        </div>

        <input type="text" placeholder="Email" className="input input-bordered input-md w-full "/>
        <input type="text" placeholder="Password" className="input input-bordered input-md w-full "/>

        <div className="dropdown">
          <label tabIndex={0} className="btn m-1 w-full max-w-xs normal-case px-48 bg-white border-gray-300">City</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Austin, TX</a></li>
          </ul>

        </div>

        <p id="TOS" className= "text-center mx-auto w-64 text-gray-500">
          By signing up you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.
        </p>

        <button className="btn bg-blue-600 normal-case text-white px-16">Sign up</button>

      </div>
    
      

    </div>
    
      <div id = "login" className= "border-black border-2 rounded-xl py-8 px-32">
        Have an account? <a href="/LoginPage" className="text-blue-600 hover:text-blue-800">Log in</a>
      </div>

  </section>
  <Footer/>
  </>
  );
};

export default RegisterPage;
