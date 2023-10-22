import React from "react";

const GITHUBS = {
  SAGE: "https://github.com/SageCT",
  ALTON: "https://github.com/SageCT",
  UJWAL: "https://github.com/SageCT",
  KEVIN: "https://github.com/SageCT",
};

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center bottom-0 h-12 w-screen text-black bg-navgray">
        <p className="text-sm">{"Created for HackTX 2023 | "}</p>

        <p>
          {" "}
          <a href={GITHUBS.ALTON}>
            <u>@altonp</u>
          </a>{" "}
        </p>

        <p>
          {" "}
          <a href={GITHUBS.SAGE}>
            <u>@SageCT</u>
          </a>{" "}
        </p>

        <p>
          <a href={GITHUBS.UJWAL}>
            <u> @UJWAL </u>
          </a>
        </p>

        <p>
          {" "}
          <a href={GITHUBS.KEVIN}>
            <u>@KEVIN</u>
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
