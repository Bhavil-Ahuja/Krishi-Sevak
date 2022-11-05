import "./App.css";
import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Form from "./Login Pages/farmer"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            
            <Route path="/Footer" element={<Footer/>} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
