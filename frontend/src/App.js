import React, { useEffect, Fragment, Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Routing from './pages/Routing.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
function App() {
  return (
    <div className="App">
     <Routing />
    </div>
  );
}

export default App;
