import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../styles/style.css';
import RegularHeader from '../utils/RegularHeader.jsx'
import Button from '../components/Button.jsx'
import { MultilineInput } from 'react-input-multiline';
import { useAuth0 } from "@auth0/auth0-react";

const EditProfile = () => {
 const navigate = useNavigate();
 const { user, isAuthenticated, isLoading } = useAuth0();
 if (isLoading) {
    return <div>Loading ...</div>;
 }
 return (
    isAuthenticated && (
    <div className="profile">
        <RegularHeader/>
        <div style={{position: "absolute", top: "8vw", left: "6vw"}}>
            <p style={{fontWeight: "500", color: "black", fontFamily: "Sans Serif, Segoe UI", fontSize:"28px"}}> Edit profile </p>
            <div style={{position: "absolute", top: "110px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="firstname">first name </label>
                 <input style={{height: "37px", width: "420px"}}
                         type="text" id="firstname" placeholder={user.given_name}/> </div>
            <div style={{position: "absolute", top: "180px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="lastname">last name </label>
                 <input style={{height: "37px", width: "420px"}}
                        type="text" id="lastname" placeholder={user.family_name}/> </div>
            <div style={{position: "absolute", top: "250px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="email">email </label>
                 <input style={{height: "37px", width: "420px"}}
                        type="email" id="email" placeholder={user.email}/> </div>
            <div style={{position: "absolute", top: "390px", left: "65px"}}>
                 <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="dateofbirth">date of birth </label>
                 <input style={{height: "37px", width: "420px"}}
                        type="date" id="dateofbirth" placeholder=""/> </div>
            <div style={{position: "absolute", top: "320px", left: "65px"}}>
                  <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="phn">phone number </label>
                  <input style={{height: "37px", width: "420px"}}
                  type="text" id="phn" placeholder={user.phone_number}/> </div>

            <div style={{position: "absolute", top: "110px", left: "730px"}}>
                  <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="education">education </label>
                  <input style={{height: "37px", width: "500px"}}
                         type="text" id="education" placeholder=""/></div>
            <div style={{position: "absolute", top: "180px", left: "730px"}}>
                  <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="skills">skills </label>
                  <input style={{height: "37px", width: "500px"}}
                         type="text" id="skills" placeholder=""/> </div>
            <div style={{position: "absolute", top: "250px", left: "730px"}}>
                   <label style={{fontFamily: "Sans Serif, Segoe UI"}} for="exp">experience </label>
                   <input style={{height: "110px", width: "500px"}}
                          type="textarea" id="exp" placeholder=""/> </div>
            <div style={{position: "absolute", top: "412px", left: "870px"}}>
                   <Button border="none"
                        color="#24AEC0"
                        height = "30px"
                        onClick={() => navigate('/employee/alljobs')}
                        radius = "10px 10px 10px 10px"
                        width = "100px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Save </div>
                   /> </div>
            <div style={{position: "absolute", top: "412px", left: "1010px"}}>
                   <Button border="none"
                        color="#EF4343"
                        height = "30px"
                        onClick={() => navigate('/employee/alljobs')}
                        radius = "10px 10px 10px 10px"
                        width = "100px"
                        classname = "btn"
                        children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Cancel </div>
                   /> </div>
        </div>
    </div>
    )
  );
};

export default EditProfile;