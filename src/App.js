import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/HomePage/Home";
import SocialArbitrage from "./Components/Social Arbitrage/SocialArbitrage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header /> {/* Use the Header component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<SocialArbitrage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
