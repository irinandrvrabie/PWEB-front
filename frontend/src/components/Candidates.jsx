import React, { useMemo, useState } from "react";
import '../styles/style.css';
import Button from './Button.jsx'

const Candidates = () => {
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstname",
      },
      {
        Header: "Last Name",
        accessor: "lastname",
      },
      {
        Header: "Birthday",
        accessor: "birthday",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phonenumber",
      },
      {
        Header: "Education",
        accessor: "education",
      },
      {
       Header: "Skills",
       accessor: "skills",
       },
       {
        Header: "Experience",
        accessor: "experience",
       },
       {
        Header: "Position",
        accessor: "position",
       },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        firstname: "Anna",
        lastname: "Borysko",
        birthday: "07/10/1985",
        email: "annabor@gmail.com",
        phonenumber: "0743568871",
        education: "University of Kiev, Computer Science",
        skills: "Linux, C++, SQL Server, C#",
        experience: "Backend developer at Kuyshka, march 2014 - february 2022",
        position: "Full stack developer"
      },
      {
        firstname: "Vladyslava",
        lastname: "Mykhailo",
        birthday: "27/03/1996",
        email: "vmyky@gmail.com",
        phonenumber: "074497171",
        education: "University of Odessa, System engineering",
        skills: "Linux, C++, SQL Server, Python, Perl",
        experience: "System engineer at Innovations SRL, june 2020 - february 2022",
        position: "Full stack developer"
      },
    ],
    []
  );

  return (
    <div className="gallery">
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstname} {val.lastname} <br/> <br/> {val.birthday} <br/> {val.email} <br/> {val.phonenumber} </td>
              <td>{val.education} <br/><br/> {val.skills} <br/><br/> {val.experience}</td>
              <td> {val.position}
              <br/> <br/>
              <Button border="none"
                           color="#EF4343"
                           height = "40px"
                           radius = "10px 10px 10px 10px"
                           width = "150px"
                           classname = "btn"
                           children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> Delete candidate </div>
                   />
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  );
};

export default Candidates;