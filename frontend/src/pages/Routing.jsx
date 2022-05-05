import React, { useEffect, Fragment, Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import AllJobsEmployee from './AllJobsEmployee.jsx'
import ListedJobsEmployer from './ListedJobsEmployer.jsx'
import AllCandidates from './AllCandidates.jsx'

function Routing() {
  return (
       <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/employee/alljobs' element={<AllJobsEmployee />} />
            <Route exact path='/employer/alljobs' element={<ListedJobsEmployer />} />
            <Route exact path='/employer/allcandidates' element={<AllCandidates />} />
         </Routes>
       </BrowserRouter>
  );
};

export default Routing;
