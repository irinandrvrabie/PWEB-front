import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../layouts/LoginHeader.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'

const SignInCard = () => {
 return (
    <div style={{position: "absolute", top: "36vw", left: "46.6vw"}}>
    <div className= "welcome-box" style={{position: "absolute", top: "-250px", left: "-157px"}}>
     <div style={{position: "absolute", top: "0px", left: "130px"}}>
      <p style={{fontWeight: "bold", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"28px"}}> WELCOME </p> </div>
      <div style={{position: "absolute", top: "100px", left: "49.5px"}}>
            <Input text="email"
                   width = "300px"
                   height = "30px"
                   id = "email"
                   type = "email"/> </div>
      <div style={{position: "absolute", top: "160px", left: "49.5px"}}>
            <Input text="password"
                   width = "300px"
                   height = "30px"
                   id = "password"
                   type = "password"/> </div>
       <div style={{position: "absolute", top: "250px", left: "160px"}}>
       <Button border="none"
            color="#24AEC0"
            height = "40px"
            onClick={() => console.log("You clicked on SIGN IN!")}
            radius = "10px 10px 10px 10px"
            width = "85px"
            classname = "btn"
            children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> SIGN IN </div>
       />
        <p style={{position: "absolute", width: "250px", top: "5vh", left: "-11.5vh", fontFamily: "Sans Serif, Segoe UI", fontSize:"10px"}}>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link> </p> </div>
        </div>

    </div>

    );
};

export default SignInCard;