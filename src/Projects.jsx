import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Chip } from "@mui/material";

const Projects = ({loading,setLoading}) => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const handleToggleProject1 = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMore1((prev) => !prev);
      setLoading(false);
    }, 800);
  };
  const handleToggleProject2 = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMore2((prev) => !prev);
      setLoading(false);
    }, 800);
  };

  return (
    <Box className="cert-section" mt={3} mb={3}>
      <Container maxWidth="md">
        <Typography className="about-title">Projects</Typography>
        <Box className="about-texts">
          <Typography component="p">
            A showcase of my technical projects and contributions.
          </Typography>
        </Box>
        <Box className="timeline">
          <Box className="project-card">
            <Box className="timeline-dot" />
            <Typography className="project-title">
              React Project 1: Money Tree
            </Typography>
            <Box className="tech-stack">
              {["React", "Redux", "JavaScript", "HTML/CSS", "REST API"].map(
                (tech) => (
                  <Chip key={tech} label={tech} className="tech-chip" />
                )
              )}
            </Box>
            <Typography className="project-desc">
              Developed a US-based loan management platform called{" "}
              <strong>Money Tree</strong> using React and Redux. Focused on
              reusable components and efficient state management.
            </Typography>
            {showMore1 && (
              <ul className="project-points">
                <li>Dynamic forms using React Hooks & Formik</li>
                <li>REST API integration</li>
                <li>Responsive dashboards</li>
                <li>Performance optimization</li>
                <li>Accessibility support</li>
                <li>React Router navigation</li>
              </ul>
            )}
            <span
              className="show-more"
              onClick={handleToggleProject1}
              style={{
                pointerEvents: loading ? "none" : "auto",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {showMore1 ? "▲ Show Less Details" : "▼ Show More Details"}
            </span>
          </Box>
          <Box className="project-card">
            <Box className="timeline-dot" />
            <Typography className="project-title">
              React Project 2: Qfund11
            </Typography>
            <Box className="tech-stack">
              {["React", "Redux", "HTML5", "CSS3", "REST API"].map((tech) => (
                <Chip key={tech} label={tech} className="tech-chip" />
              ))}
            </Box>
            <Typography className="project-desc">
              Developed a US-based financial platform called{" "}
              <strong>Qfund11</strong> using React and Redux with focus on
              accessibility and responsiveness.
            </Typography>
            {showMore2 && (
              <ul className="project-points">
                <li>Real-time form validation</li>
                <li>Loan & payment APIs</li>
                <li>Responsive dashboards</li>
                <li>Code splitting & optimization</li>
                <li>WCAG accessibility</li>
                <li>Reusable components</li>
              </ul>
            )}
            <span
              className="show-more"
              onClick={handleToggleProject2}
              style={{
                pointerEvents: loading ? "none" : "auto",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {showMore2 ? "▲ Show Less Details" : "▼ Show More Details"}
            </span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Projects;
