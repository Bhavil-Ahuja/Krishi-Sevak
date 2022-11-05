import React from "react";
import '../Login Pages/company.scss';
const Company =() =>{

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your details were submitted`)
    
  }
    
    return (
       < div className="bgimage">
        <div className="bgpic">
            <img className="bg-pic" src="/b3.jpg" alt="none"/>
        </div>
        <div className="user">
                    
        <div className="form2">
            <h4>COMPANY</h4>
            <form onSubmit={handleSubmit}>
                
                <div className="aa">
                    <label>Company Name: </label>
                    <br/>
                    <input type ='text'  placeholder="Company Name" required/>
                </div>
                <div className="aa">
                    <label>Owner's Name: </label><br/>
                    <input type ='text'  placeholder="Owner's Name" required/>
                </div>
                <div className="aa">
                    <label>GST Number: </label><br/>
                    <input type ='text'  placeholder="GST Number" required/>
                </div>
                <div className="aa">
                    <label>Phone Number: </label><br/>
                    <input type ='phone number'  placeholder="Phone Number" required/>
                </div>
                <div className="aa">
                    <label>Email ID: </label><br/>
                    <input type ='email'  placeholder="Email ID" required/>
                </div>
                
                <div className="aa">
                    <label>Choose Password: </label><br/>
                    <input type ='password'  placeholder="Choose Password" required/>
                </div>
                <div className="aa">
                    <label>Confirm Password: </label><br/>
                    <input type ='password'  placeholder="Confirm Password" required/>
                </div>
                <button className="but" >
                    SUBMIT
                </button>
            </form>
        </div>
        
       </div>
       </div>
    )
}



export default Company;

