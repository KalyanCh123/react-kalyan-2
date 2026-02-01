import React from "react";
import { Box, Typography } from "@mui/material";

const reactSkills = [
  { name: "React.js", value: "90%" },
  { name: "JavaScript (ES6+)", value: "85%" },
  { name: "React Hooks", value: "85%" },
  { name: "Redux Toolkit", value: "80%" },
  { name: "HTML5 & CSS3", value: "85%" },
  { name: "Testing (Jest & RTL)", value: "75%" },
  { name: "Git", value: "80%" },
];

const uiSkills = [
  { name: "Material UI (MUI) & Icons", value: "80%" },
  { name: "Formik", value: "85%" },
  { name: "REST API Integration", value: "80%" },
  { name: "Responsive Design", value: "85%" },
  { name: "Flexbox & CSS Grid", value: "85%" },
  { name: "Browser DevTools", value: "78%" },
  { name: "UI Debugging", value: "75%" },
];

const Skills = () => {
  return (
    <Box id="skills" className="cert-section skills-section">
      <Typography className="about-title">Technical Skills</Typography>
      <Typography className="skills-subtitle">
        A showcase of my expertise in React development and related technologies.
      </Typography>

      <Box className="skills-container">
        <Box className="skill-card">
          <Typography className="skills-card-title">React Ecosystem</Typography>
          {reactSkills.map((skill) => (
            <Box key={skill.name} className="skill-row">
              <Typography className="skill-name">{skill.name}</Typography>
              <Box className="skill-bar">
                <Box
                  className="skill-progress"
                  style={{ width: skill.value }}
                />
              </Box>
              <Typography className="skill-value">{skill.value}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="skill-card">
          <Typography className="skills-card-title">
            Frontend UI & Tools
          </Typography>
          {uiSkills.map((skill) => (
            <Box key={skill.name} className="skill-row">
              <Typography className="skill-name">{skill.name}</Typography>
              <Box className="skill-bar">
                <Box
                  className="skill-progress"
                  style={{ width: skill.value }}
                />
              </Box>
              <Typography className="skill-value">{skill.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Typography className="about-title">Soft Skills</Typography>
      <Typography className="skills-subtitle">
        Key interpersonal skills that support effective frontend development.
      </Typography>

      <Box className="soft-skills-container">
        {[
          {
            title: "UI Problem Solving",
            text: "Strong ability to analyze UI issues, debug frontend bugs, and implement clean, user-friendly solutions using React and modern web practices.",
          },
          {
            title: "Communication & Requirement Understanding",
            text: "Effective at understanding UI requirements, discussing features with team members, and translating designs into functional and responsive interfaces.",
          },
          {
            title: "Team Collaboration",
            text: "Comfortable working with designers, backend developers, and QA teams to build consistent, scalable, and maintainable frontend solutions.",
          },
          {
            title: "Time Management & Code Discipline",
            text: "Skilled at managing tasks efficiently, meeting deadlines, and maintaining clean, readable code with proper structure and documentation.",
          },
        ].map((skill) => (
          <Box key={skill.title} className="skill-card soft-card">
            <Typography className="soft-title">{skill.title}</Typography>
            <Typography className="soft-text">{skill.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
