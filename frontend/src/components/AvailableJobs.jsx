import React, { useMemo, useState } from "react";
import '../styles/style.css';
import Button from './Button.jsx'

const AvailableJobs = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Job Title",
        accessor: "jobtitle",
      },
      {
        Header: "Company Name",
        accessor: "companyname",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Job Description",
        accessor: "description",
      },
      {
        Header: "Requirements",
        accessor: "requirements",
      },
      {
        Header: "Minimum experience",
        accessor: "experience",
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        jobtitle: "System engineer",
        companyname: "Infosys",
        location: "Bucharest / remote",
        description: "In the role of Systems Engineer you will play a pivotal role implementing SDLC activities such as development, testing, implementation, warranty and support activities; participate in Knowledge Management activities, and interface with internal team to ensure high quality deliverables.",
        requirements: "Bachelor's degree in computer science, information systems, or related field; Experience creating scripts (e.g. using Perl, Ruby, Python) and setting up software for automation",
        experience: "Minimum experience: 2+ years"
      },
      {
        jobtitle: "Full stack developer",
        companyname: "Deloitte",
        location: "Bucharest",
        description: "A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application. In this sense, they provide an end-to-end service, and can be involved in projects that involve databases and building user-facing websites.",
        requirements: "Bachelor's degree in computer science; Fluent in CSS (Foundation or Bootstrap), JavaScript and HTML; Strong knowledge of Linux, PHP and MySQL, with working understanding of MongoDB, PostgreSQL, AngularJS, Express. js, Oracle, React, Ember and Node.",
        experience: "Minimum experience: 5+ years"
      },
      {
        jobtitle: "Full stack developer",
        companyname: "Deloitte",
        location: "Bucharest",
        description: "A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application. In this sense, they provide an end-to-end service, and can be involved in projects that involve databases and building user-facing websites.",
        requirements: "Bachelor's degree in computer science; Fluent in CSS (Foundation or Bootstrap), JavaScript and HTML; Strong knowledge of Linux, PHP and MySQL, with working understanding of MongoDB, PostgreSQL, AngularJS, Express. js, Oracle, React, Ember and Node.",
        experience: "Minimum experience: 5+ years"
      },
      {
        jobtitle: "Full stack developer",
        companyname: "Deloitte",
        location: "Bucharest",
        description: "A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application. In this sense, they provide an end-to-end service, and can be involved in projects that involve databases and building user-facing websites.",
        requirements: "Bachelor's degree in computer science; Fluent in CSS (Foundation or Bootstrap), JavaScript and HTML; Strong knowledge of Linux, PHP and MySQL, with working understanding of MongoDB, PostgreSQL, AngularJS, Express. js, Oracle, React, Ember and Node.",
        experience: "Minimum experience: 5+ years"
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
              <td>{val.jobtitle} <br/> <br/> {val.companyname} <br/> {val.location} </td>
              <td>{val.description} <br/><br/> {val.requirements} <br/><br/> {val.experience}</td>
              <td> <Button border="none"
                              color="#24AEC0"
                              height = "40px"
                              radius = "10px 10px 10px 10px"
                              width = "85px"
                              classname = "btn"
                              children = <div style={{color: "white", fontSize: "18px", fontFamily: "Sans Serif, Segoe UI", alignSelf:"center"}}> APPLY </div>
              /></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
};

export default AvailableJobs;