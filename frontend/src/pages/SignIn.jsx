import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import LoginHeader from '../layouts/LoginHeader.jsx'
import SignInCard from '../components/SignInCard.jsx'

const SignIn = () => {
 return (
    <div className="signin">
        <LoginHeader/>
        <SignInCard />
    </div>
  );
};

export default SignIn;