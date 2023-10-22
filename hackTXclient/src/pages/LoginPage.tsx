import React from "react";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (<>
  <div className="w-sreen h-screen flex flex-row item-center justify-center max-h-sm">

    <section id= "LoginMain" className= "flex flex-col items-center justify-center m-16 p-16 border-2 border-black rounded-xl max-w-sm">

            <a href="/LandingPage" className="flex items-center justify-center pt-8"><img src="/futuresight.svg" alt="FutureSight Logo"/></a>

            <div id= "LoginText" className= "text-center mx-auto w-64 pt-4">
                Log in here.
            </div>

            <div id= "LoginInfo" className= "flex flex-col items-center justify-center space-y-4 p-4">

                <input type="text" placeholder="Email" className="input input-bordered input-md w-64"/>
                <input type="text" placeholder="Password" className="input input-bordered input-md w-64 "/>

            </div>

            <div id= "ForgetPassword">
                <a href="#" className="text-blue-500">Forgot password?</a>
            </div>

            <button className="btn bg-blue-600 normal-case text-white px-16 m-4">Log in</button>

            <div id= "Signup">
                Don't have an account? <a href="/RegisterPage" className="text-blue-500">Sign up</a>
            </div>

    </section>
    </div>
  
  <Footer/>
  </>
  );
};

export default LandingPage;
