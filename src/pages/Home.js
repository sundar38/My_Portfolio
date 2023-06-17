import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sundara Krishna</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating new things.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,Java,C</span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>Git, Azure DevOps, VS Code, Postman </span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>Data Structures and Algorithms, Core Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;