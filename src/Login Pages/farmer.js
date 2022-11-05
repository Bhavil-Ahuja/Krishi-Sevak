import React from "react";
import "../Login Pages/farmer.css";
import Footer from "../Footer/Footer" 
const Backg = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your details were submitted`);
  };

  return (
    <>
    <div className="bgimage">
      <div className="bgpic">
        <img className="bg-pic" src="/b3.jpg" alt="none" />
      </div>
      <div className="form1">
        <h4 className="form-button">FARMER</h4>
        <form onSubmit={handleSubmit}>
          <div className="aa">
            <label>First Name: </label>
            <br />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="aa">
            <label>Last Name: </label>
            <br />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="ab">
            <label>Date of Birth: </label>
            <br />
            <input type="date" placeholder="Date Of Birth" required />
          </div>
          <div className="aa">
            <label>Phone Number: </label>
            <br />
            <input type="number" placeholder="Phone Number" required />
          </div>
          <div className="aa">
            <label>Aadhar Number: </label>
            <br />
            <input type="number" placeholder="Aadhar" required />
          </div>
          <div className="aa">
            <label>Email ID: </label>
            <br />
            <input type="email" placeholder="Email ID" required />
          </div>
          <div className="aa">
            <label>Choose Password: </label>
            <br />
            <input type="password" placeholder="Choose Password" required />
          </div>
          <div className="aa">
            <label>Confirm Password: </label>
            <br />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button className="but">SUBMIT</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Backg;
