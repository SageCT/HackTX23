import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ColoredShape from "../components/ColoredShape";

const Landingpage = () => {
  return (
    <>
      <NavBar />
      <a href="/QuestionPage">Question Page</a>
      <div className="bg-white h-screen">
        {/* Title Test */}
        <div className="">
          <h1 className="font-opensans">HELLO THIS IS A TESTERINO</h1>
        </div>

        {/* Component Test */}
        <ColoredShape type="circle" color="red" />
      </div>
      <Footer />
    </>
  );
};

export default Landingpage;
