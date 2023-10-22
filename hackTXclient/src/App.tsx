import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import QuestionPage from "./pages/QuestionPage";
import FinalPage from "./pages/FinalPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div className="mx-auto my-auto h-screen bg-white text-black">
        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/QuestionPage" element={<QuestionPage />} />
            <Route path="/FinalPage" element={<FinalPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
