import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { useState } from "react";

function App() {
  return (
    <>
      <div className="mx-auto my-auto h-screen overflow-hidden bg-white text-black">
        <NavBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
