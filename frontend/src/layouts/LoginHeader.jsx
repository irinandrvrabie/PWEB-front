import React from "react";
import { Link } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import logo from '../images/logo21.png';
import '../style.css';

const LoginHeader = ({ children }) => {
 // const { logout, user } = useAuth0();

  return (
    <div className="header">
        <div className="rectanglebottom">
        <div className="rectangletop"/>
        </div>
        <img style={{position: "absolute", height: "10vw", top: "1.75vw", left: "38.6vw"
                                           }} src={logo} alt="Logo" />
    </div>
  );
};

export default LoginHeader;
