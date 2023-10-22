import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [affinity, setAffinity] = useState({
    web_dev: 0,
    info_sec: 0,
    database_arc: 0,
  });
  const questions = [
    "I enjoy activities like art, writing, or other creative outlets.",
    "I prefer working alone on important projects.",
    "I want to pursue post-graduate education.",
    "I have a keen eye for details or mistakes.",
    "I find complex systems interesting.",
    "I enjoy making sure everyone is able to stay safe and secure",
  ];

  const handleResponse = (response: number) => {
    const affinityType =
      currentQuestion % 3 === 0
        ? "web_dev"
        : currentQuestion % 3 === 1
        ? "info_sec"
        : "database_arc";
    const newAffinity = { ...affinity };
    if (response === 1) {
      newAffinity[affinityType] += 1;
    } else if (response === 5) {
      newAffinity[affinityType] -= 1;
    }
    setAffinity(newAffinity);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === questions.length - 1) {
      navigate("/FinalPage");
    }
  };

  return (
    <>
      <section
        id="QuestionBox"
        className="mx-auto my-16 p-4 border-4 border-black rounded-lg max-w-3xl text-center"
      >
        <div id="Question" className="mb-4 text-xl font-semibold p-4">
          {questions[currentQuestion]}
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-2 border-black rounded-xl p-2">
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
              onClick={() => handleResponse(1)}
            >
              Strongly agree
            </a>
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
              onClick={() => handleResponse(2)}
            >
              Agree
            </a>
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
              onClick={() => handleResponse(3)}
            >
              Neutral
            </a>
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
              onClick={() => handleResponse(4)}
            >
              Disagree
            </a>
            <a
              href="#"
              className="block p-2 text-left hover:bg-gray-200 hover:border-gray-400"
              onClick={() => handleResponse(5)}
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
