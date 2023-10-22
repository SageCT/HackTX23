import React from "react";

const GITHUBS = {
  SAGE: "https://github.com/SageCT",
  ALTON: "https://github.com/altonph",
  UJWAL: "https://github.com/ujwal2003",
  KEVIN: "https://github.com/KevinZheng14815",
};

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center bottom-0 h-12 w-screen text-black bg-navgray">
        <p className="text-sm">{"Created for HackTX 2023 | "}</p>

        <div className= "flex flex-row space-x-2 px-2 text-sm">
          <a href={GITHUBS.ALTON}>@altonph</a>
          <a href={GITHUBS.SAGE}>@SageCT</a>
          <a href={GITHUBS.UJWAL}>@ujwal2003</a>
          <a href={GITHUBS.KEVIN}>@KevinZheng14815</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
