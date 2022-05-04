import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import LoginHeader from '../layouts/LoginHeader.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'

const SignUpCard = () => {
 return (
    <div style={{position: "absolute", top: "38vw", left: "46vw"}}>
        <Input text="name"
        />
         <Button  border="none"
                  color="#24AEC0"
                  height = "40px"
                  onClick={() => console.log("You clicked on SIGN IN!")}
                  radius = "15px 15px 15px 15px"
                  width = "85px"
                  classname = "btn"
                  children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> SIGN UP </div>
         />
         <p style={{position: "absolute", width: "250px", top: "5vh", left: "-11.5vh", fontFamily: "Sans Serif, Segoe UI", fontSize:"10px"}}>
                                 Already have an account? <Link to={"/"}>Sign In</Link>
         </p>
    </div>

    );
};

export default SignUpCard;