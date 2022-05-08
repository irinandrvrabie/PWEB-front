import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../utils/LoginHeader.jsx'
import Button from './Button.jsx'

const SignUpCard = () => {
    return (
       <div style={{position: "absolute", top: "36vw", left: "46.6vw"}}>
       <div className= "welcome-boxbigger" style={{position: "absolute", top: "-250px", left: "-357px"}}>
        <div style={{position: "absolute", top: "0px", left: "253px"}}>
         <p style={{fontWeight: "bold", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"28px"}}> CREATE AN ACCOUNT </p> </div>
         <div style={{position: "absolute", top: "100px", left: "49.5px"}}>
               <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="email">email </label>
               <input style={{height: "30px", width: "300px"}}
                      type="email" id="email" placeholder=""/>  </div>
         <div style={{position: "absolute", top: "160px", left: "49.5px"}}>
               <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="psswrd">password </label>
               <input style={{height: "30px", width: "300px"}}
                       type="password" id="psswrd" placeholder=""/> </div>
         <div style={{position: "absolute", top: "100px", left: "449.5px"}}>
               <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="fname">first name </label>
               <input style={{height: "30px", width: "300px"}}
                      type="text" id="fname" placeholder=""/> </div>
         <div style={{position: "absolute", top: "160px", left: "449.5px"}}>
                <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="lname">last name </label>
                <input style={{height: "30px", width: "300px"}}
                       type="text" id="lname" placeholder=""/>  </div>
          <div style={{position: "absolute", top: "250px", left: "360px"}}>
          <Button border="none"
               color="#24AEC0"
               height = "40px"
               onClick={() => console.log("You clicked on SIGN IN!")}
               radius = "10px 10px 10px 10px"
               width = "85px"
               classname = "btn"
               children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> SIGN UP </div>
          />
           <p style={{position: "absolute", width: "250px", top: "5vh", left: "-11.5vh", fontFamily: "Sans Serif, Segoe UI", fontSize:"10px"}}>
               Already have an account? <Link to={"/"}>Sign In</Link> </p> </div>
           </div>

       </div>

       );
   };


export default SignUpCard;