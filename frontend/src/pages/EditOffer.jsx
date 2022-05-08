import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../styles/style.css';
import RegularHeader from '../utils/RegularHeader.jsx'
import Button from '../components/Button.jsx'
import { MultilineInput } from 'react-input-multiline';

const EditOffer = () => {
 const navigate = useNavigate();
 return (
    <div className="profile">
        <RegularHeader/>
        <div style={{position: "absolute", top: "8vw", left: "6vw"}}>
            <p style={{fontWeight: "500", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"28px"}}> Job offer </p>
            <div style={{position: "absolute", top: "110px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="company">company </label>
                 <input style={{height: "37px", width: "420px"}}
                         type="text" id="company" placeholder=""/> </div>
            <div style={{position: "absolute", top: "180px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="title">job title </label>
                 <input style={{height: "37px", width: "420px"}}
                        type="text" id="title" placeholder=""/> </div>
            <div style={{position: "absolute", top: "250px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="location">location </label>
                 <input style={{height: "37px", width: "420px"}}
                        type="text" id="location" placeholder=""/> </div>
            <div style={{position: "absolute", top: "320px", left: "65px"}}>
                  <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="min">minimum years of experience </label>
                  <input style={{height: "37px", width: "420px"}}
                  type="text" id="min" placeholder=""/> </div>

            <div style={{position: "absolute", top: "110px", left: "730px"}}>
                  <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="reqskills">required skills </label>
                  <input style={{height: "37px", width: "500px"}}
                         type="text" id="reqskills" placeholder=""/> </div>
            <div style={{position: "absolute", top: "180px", left: "730px"}}>
                   <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="jdesc">job description </label>
                   <input style={{height: "110px", width: "500px"}}
                          type="textarea" id="jdesc" placeholder=""/> </div>
            <div style={{position: "absolute", top: "350px", left: "870px"}}>
                   <Button border="none"
                        color="#24AEC0"
                        height = "30px"
                        onClick={() => navigate('/employer/alljobs')}
                        radius = "10px 10px 10px 10px"
                        width = "100px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Save </div>
                   /> </div>
            <div style={{position: "absolute", top: "350px", left: "1010px"}}>
                   <Button border="none"
                        color="#EF4343"
                        height = "30px"
                        onClick={() => navigate('/employer/alljobs')}
                        radius = "10px 10px 10px 10px"
                        width = "100px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Cancel </div>
                   /> </div>
        </div>
    </div>
  );
};

export default EditOffer;