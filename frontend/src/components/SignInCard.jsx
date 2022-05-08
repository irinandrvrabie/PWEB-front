import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../utils/LoginHeader.jsx'
import Button from './Button.jsx'
import { useAuth0 } from "@auth0/auth0-react";

const SignInCard = () => {
 const { loginWithRedirect } = useAuth0();
 return (
    <div style={{position: "absolute", top: "36vw", left: "46.6vw"}}>
    <div className= "welcome-box" style={{position: "absolute", top: "-250px", left: "-157px"}}>
     <div style={{position: "absolute", top: "0px", left: "130px"}}>
      <p style={{fontWeight: "bold", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"28px"}}> WELCOME </p> </div>
      <div style={{position: "absolute", top: "80px", left: "0px"}}>
            <p style={{fontWeight: "medium", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"14px", padding:"15px"}}>
             This platform is dedicated to the ukrainian people who were brutally forced to leave their country, their lives and their jobs.
              <br/>
              All open positions are reserved for those in need!
              <br/><br/>
              #stopthewar</p>
              </div>
       <div style={{position: "absolute", top: "260px", left: "158px"}}>
            <Button border="none"
                color="#24AEC0"
                height = "40px"
                onClick={() => loginWithRedirect()}
                radius = "10px 10px 10px 10px"
                width = "85px"
                classname = "btn"
                children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> SIGN IN </div>
            /> </div>

</div>

    </div>

    );
};

export default SignInCard;