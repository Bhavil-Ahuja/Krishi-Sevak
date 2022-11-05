import "./App.css";
import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Farmerform from "./Login Pages/farmer"
import Buyerform from "./Login Pages/company"
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Farmer" element={<Farmerform/>} />
            <Route path="/Buyer" element={<Buyerform/>} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
