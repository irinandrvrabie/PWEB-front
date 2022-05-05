import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../layouts/LoginHeader.jsx'
import SignUpCard from '../components/SignUpCard.jsx'

const SignUp = () => {
 return (
    <div className="signup">
        <LoginHeader/>
        <SignUpCard/>
    </div>
  );
};

export default SignUp;