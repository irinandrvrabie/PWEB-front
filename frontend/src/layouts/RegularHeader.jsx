import React from "react";
import { Link } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import logo from '../images/logo22.png';
import '../styles/style.css';

const RegularHeader = ({ children }) => {
 // const { logout, user } = useAuth0();

  return (
    <div className="header">
        <div className="rectanglebottomsmall">
        <div className="rectangletopsmall"/>
        </div>
        <img style={{position: "absolute", height: "4.5vw", width: "9.5vw", top: "0.25vw", left: "0.25vw"
                                           }} src={logo} alt="Logo" />
    </div>
  );
};

export default RegularHeader;
