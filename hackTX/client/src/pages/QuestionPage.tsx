import React from "react";
import Footer from "../components/Footer";

const QuestionPage = () => {
  return (
    <>
      <section
        id="QuestionBox"
        className="mx-auto my-16 p-4 border-4 border-black rounded-lg max-w-3xl text-center"
      >
        <div id="Question" className="mb-4 text-xl font-semibold p-4">
          I enjoy activities like art, writing, or other creative outlets.
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
            >
              Strongly agree
            </a>
          </div>
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
            >
              Agree
            </a>
          </div>
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
            >
              Neither agree nor disagree
            </a>
          </div>
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
            >
              Disagree
            </a>
          </div>
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
            >
              Strongly disagree
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QuestionPage;
