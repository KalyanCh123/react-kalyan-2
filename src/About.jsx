import React from "react";
import { Box, Typography } from "@mui/material";

const content = {
  About: `Passionate React Developer with a strong focus on building dynamic, responsive, and high-performance web applications.
Skilled in creating scalable and reusable front-end solutions using modern JavaScript (ES6+),
React.js, Redux, and component-based architecture. Dedicated to delivering high-quality, user-centric applications through clean code,
testing frameworks like Jest and React Testing Library, and best practices in software development.`,
};

const About = () => {
  return (
    <Box id="about" className="about-container">
      <Typography className="about-title">
        About
      </Typography>
      <Box className="about-text">
        {content.About.split("\n").map((line, i) => (
          <Typography component="p" key={i}>
            {line}
          </Typography>
        ))}
      </Box>

      {/* CARDS */}
      <Box className="about-cards">
        {/* PROFESSIONAL */}
        <Box className="about-card professional">
          <Typography component="h3">
            💼 Professional Background
          </Typography>

          <Typography component="p">
            *** Building expertise in front-end development while gaining strong
            skills in sales and client engagement. Experienced in developing
            responsive UI components, integrating REST APIs, and ensuring high
            performance in web applications. ***
          </Typography>

          <Box className="about-lists">
            <Typography>✔️ React Developer at <strong className="company-name">Virinchi Ltd.</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2024 – Present)</Typography><br/>
            <Typography className="job-title">✔️ Inside Sales Specialist at <strong className="company-name">Byju&apos;s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edu.Tech</strong> (2022 – 2023)</Typography><br/>
            <Typography>✔️ Sales Associate at <strong className="company-name">Mind Brink Media &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pvt Ltd</strong> (2020 – 2022)</Typography><br/>
          </Box>
        </Box>

        <Box className="about-card education">
          <Typography component="h3">🎓 Education</Typography>

          <strong className="company-name">
            🎓 GIST – Geethanjali Institute of Science & Technology
          </strong><br/><br/>
          <Typography>
            • B.Tech (EEE) | 2015 – 2019 | GPA: 8.3
          </Typography><br/>

          <Typography className="about-muted">
            *** Studied core EEE subjects including Circuit Analysis, Power
            Systems, Control Systems, Electrical Machines, and Power Electronics. ***
          </Typography><br/>

          <strong className="company-name">
            🏫 Sasikanth Reddy Jr College
          </strong><br/><br/>
          <Typography>
            • Intermediate (MPC) | 2013 – 2015 | GPA: 9.1
          </Typography><br/>

          <strong className="company-name">
            🏫 New Little Flowers EM High School
          </strong><br/><br/>
          <Typography>
            • Secondary School (10th) | 2012 – 2013 | &nbsp;&nbsp;&nbsp;&nbsp;GPA: 9.2
          </Typography>
        </Box>

        <Box className="about-card specialization">
          <Typography component="h3">⚡ Specializations</Typography>
          <Typography>
            *** I specialize in modern front-end development with React,
            focusing on building scalable, maintainable, and high-performance
            web applications. ***
          </Typography><br/>

          <Box className="about-list">
            <Typography>✔️ Building reusable components using &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React, Hooks & Context API</Typography><br/>
            <Typography>✔️ State management with Redux and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;integration of RESTful APIs</Typography><br/>
            <Typography>✔️ Testing with Jest & React Testing Library</Typography><br/>
            <Typography>✔️ Developing responsive and accessible UI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for cross-browser compatibility</Typography><br/>
            <Typography>✔️ Optimizing performance, code quality, and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; user experience in web applications</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
