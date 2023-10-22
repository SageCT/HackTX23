import React from "react";
import ColoredShape from "../components/ColoredShape";

const Landingpage = () => {
  return (
    <>
      {/* Title Test */}
      <div className="">
        <h1 className="font-opensans">HELLO THIS IS A TESTERINO</h1>
      </div>

      {/* Component Test */}
      <ColoredShape type="circle" color="red" />
    </>
  );
};

export default Landingpage;
