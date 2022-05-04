import React, { useEffect, Fragment, Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'

function Routing() {
  return (
       <BrowserRouter>
         <Routes>
             <Route exact path='/' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
         </Routes>
       </BrowserRouter>
  );
};

export default Routing;
