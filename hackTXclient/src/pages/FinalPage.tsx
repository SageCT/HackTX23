import React from "react";
import Footer from "../components/Footer";

const FinalPage = () => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center border border-black rounded-xl p-8 m-4 max-w-4xl">
        <div className="font-koulen text-4xl text-center">
          Sage Turner, Your Options Are Ready!
        </div>

        <div id="jobBox" className="flex flex-col items-center mt-4">
          <div
            id="WebDev"
            className="border border-black rounded-2xl p-4 mb-4 w-full max-w-xl flex justify-between items-center"
          >
            <div>
              <h2 className="font-koulen text-xl">Web Developer</h2>
              <ul className="list-disc ml-8">
                <li>
                  Develop and maintain web applications and websites using
                  various web tools.
                </li>
                <li>
                  Ensure responsive design and cross-browser compatibility.
                </li>
                <li>
                  Collaborate with designers and other team members to create
                  user-friendly interfaces.
                </li>
              </ul>
            </div>
            <div className="text-xl font-koulen mt-4">
              Estimated Salary: $88,030
            </div>
          </div>

          <div
            id="InfoSec"
            className="border border-black rounded-2xl p-4 mb-4 w-full max-w-xl flex justify-between items-center"
          >
            <div>
              <h2 className="font-koulen text-xl">Info. Security Analyst</h2>
              <ul className="list-disc ml-8">
                <li>
                  Monitor and assess an organization's information security
                  systems.
                </li>
                <li>
                  Identify vulnerabilities and potential security threats.
                </li>
                <li>
                  Develop and implement security policies and procedures to
                  safeguard data and systems.
                </li>
              </ul>
            </div>
            <div className="text-xl font-koulen mt-4">
              Estimated Salary: $107,950
            </div>
          </div>

          <div
            id="DataBase"
            className="border border-black rounded-2xl p-4 w-full max-w-xl flex justify-between items-center"
          >
            <div>
              <h2 className="font-koulen text-xl">Database Architect</h2>
              <ul className="list-disc ml-8">
                <li>
                  Design, plan, and develop database systems for efficient data
                  storage and retrieval.
                </li>
                <li>
                  Ensure data integrity, security, and compliance with data
                  regulations.
                </li>
                <li>
                  Optimize database performance and scalability while selecting
                  appropriate database management systems.
                </li>
              </ul>
            </div>
            <div className="text-xl font-koulen mt-4">
              Estimated Salary: $169,960
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FinalPage;
