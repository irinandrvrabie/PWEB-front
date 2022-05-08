import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../utils/LoginHeader.jsx'
import SignInCard from '../components/SignInCard.jsx'
import Sign from '../images/sign.png';

const SignIn = () => {
 return (
    <div className="signin">
        <LoginHeader/>
        <SignInCard />
        <img style={{position: "absolute",height: "320px", width: "160px", top: "400px", left: "1300px"
                                                   }} src={Sign} alt="Sign" />
    </div>
  );
};

export default SignIn;