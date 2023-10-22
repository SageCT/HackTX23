import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landingpage from "./pages/LandingPage";

import { useState } from "react";

function App() {
  return (
    <>
      <div className="mx-auto my-auto h-screen overflow-hidden bg-white text-black">
        <NavBar />
        <Landingpage />
        <Footer />
      </div>
    </>
  );
}

export default App;
