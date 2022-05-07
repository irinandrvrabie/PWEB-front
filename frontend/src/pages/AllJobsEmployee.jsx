import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../styles/style.css';
import RegularHeader from '../layouts/RegularHeader.jsx'
import AvailableJobs from '../components/AvailableJobs.jsx'
import Button from '../components/Button.jsx'

const AllJobsEmployee = () => {
 const navigate = useNavigate();
 return (
    <div className="alljobs">
        <RegularHeader/>
        <div style={{position: "absolute", top: "5vw", left: "0"}}>
             <div style={{position: "absolute", top: "20px", left: "1350px"}}>
                   <Button border="none"
                        color="#24AEC0"
                        height = "37px"
                        onClick={() => navigate('/employee/profile')}
                        radius = "10px 10px 10px 10px"
                        width = "105px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Edit profile </div>
                   /> </div>
             <p style={{position: "absolute", fontWeight: "500", width: "250px", top: "50px", left: "45px", fontFamily: "Sans Serif, Segoe UI", fontSize:"25px"}}>
                         Available jobs: </p>
             <div style={{position: "absolute", top: "110px", left: "100px"}}>
                <AvailableJobs /> </div>
    </div> </div>
  );
};

export default AllJobsEmployee;