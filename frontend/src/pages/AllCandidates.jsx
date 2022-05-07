import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../styles/style.css';
import RegularHeader from '../layouts/RegularHeader.jsx'
import Candidates from '../components/Candidates.jsx'
import Button from '../components/Button.jsx'

const AllCandidates = () => {
 const navigate = useNavigate();
 return (
    <div className="allcandidates">
        <RegularHeader/>
        <div style={{position: "absolute", top: "5vw", left: "0"}}>
             <div style={{position: "absolute", top: "20px", left: "1300px"}}>
                   <Button border="none"
                        color="#24AEC0"
                        height = "37px"
                        onClick={() => navigate('/employer/alljobs')}
                        radius = "10px 10px 10px 10px"
                        width = "155px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> See job offers </div>
                   /> </div>
            <div style={{position: "absolute", top: "20px", left: "1100px"}}>
                   <Button border="none"
                        color="#24AEC0"
                        height = "37px"
                        onClick={() => navigate('/employer/offer')}
                        radius = "10px 10px 10px 10px"
                        width = "155px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Add job offer </div>
                   /> </div>
             <p style={{position: "absolute", fontWeight: "500", width: "250px", top: "50px", left: "45px", fontFamily: "Sans Serif, Segoe UI", fontSize:"25px"}}>
                         Candidates: </p>
             <div style={{position: "absolute", top: "110px", left: "100px"}}>
                <Candidates /> </div>
    </div> </div>
  );
};

export default AllCandidates;