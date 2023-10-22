import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ColoredShape from "../components/ColoredShape";

const Landingpage = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <div className="bg-white text-black h-screen">
          {/* Title Test */}
          <div className="">
            <h1 className="font-opensans"></h1>
          </div>

          {/* Big text and under header */}
          <div className="flex flex-col">
            <h1 className="font-koulen text-6xl flex flex-row justify-center pt-[80px]">
              Find your dream career path.
            </h1>
            <p className="flex flex-row text-center self-center max-h-[80px] max-w-[500px]">
              We know choosing a career is a hard decision. Find a high-paying
              and fulfilling career to plan for your financial future using
              real-world salary data through our free questionnaire.
            </p>
          </div>

          <div className="flex flex-row justify-between px-10 pt-5">
            <div className="w-[305px] h-[270px] border-4 border-black bg-white rounded-lg">
              <h1 className="text-xl">Accelerate Your Finances</h1>
              <ul>
                <li>Find out your earning potential</li>
                <li>Pivot your plans to match your passions</li>
              </ul>
            </div>
            <div className="w-[305px] h-[270px] border-4 border-black bg-white rounded-lg">
              <h1 className="text-xl">Make an informed decision</h1>
              <ul>
                <li>Find out your earning potential</li>
                <li>Pivot your plans to match your passions</li>
              </ul>
            </div>
            <div className="w-[305px] h-[270px] border-4 border-black bg-white rounded-lg">
              <h1 className="text-xl">Learn about what's in demand</h1>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          {/* Register Button */}
          <div className="flex flex-row justify-center pt-10">
            <button className="btn border-solid border-black border-4 bg-buttonlightblue hover:bg-slate-400 text-black text-2xl font-koulen">
              <a href="/RegisterPage">Take The Quiz</a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
