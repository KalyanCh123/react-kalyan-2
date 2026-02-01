import React from "react";
import { Box, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box id="experience" className="cert-section" mt={3}>
      <Typography className="about-title">
        Experience
      </Typography>
      <Box className='about-texts'><Typography component="p">
        My journey developing technical, communication, and problem-solving
        skills across front-end development and sales roles.
      </Typography></Box>
      <Box className="experience-timeline">
        <Box className="experience-card">
          <Box className="timeline-dot" />
          <Typography component="h3">
            React Developer (Web / Frontend)
          </Typography>
          <Typography className="experience-company">
            <a
              href="https://www.virinchi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <span className="company-names">
                Virinchi Ltd.
              </span>
              &nbsp;<span className="company-profile-text badge">View Company Profile ↗</span>
            </a>
          </Typography>
          <Typography className="experience-duration">
            2024 – 2026 (Present)
          </Typography>
          <ul>
            <li>Developing scalable, high-performance front-end applications using React and Redux.</li>
            <li>Built reusable UI components and integrated REST APIs.</li>
            <li>Optimized performance, accessibility, and cross-browser compatibility.</li>
            <li>Collaborated with design and backend teams.</li>
          </ul>
          <Typography className="experience-company"><strong>Technologies:</strong></Typography>
          <Box className="chip-container">
            {["React", "Redux", "JavaScript", "HTML5/CSS3", "APIs", "Formik"].map(
              (tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              )
            )}
          </Box>
        </Box>
        <Box className="experience-card">
          <Box className="timeline-dot" />
          <Typography component="h3">Inside Sales Specialist</Typography>
          <Typography className="experience-company">
            <a
              href="https://byjus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <span className="company-names">
                Byju&apos;s Edu.Tech
              </span>&nbsp;<span className="company-profile-text badge">View Company Profile ↗</span>
            </a>
          </Typography>
          <Typography className="experience-duration">
            2022 – 2023
          </Typography>
          <ul>
            <li>Managed inbound and outbound sales calls.</li>
            <li>Demonstrated products to potential customers.</li>
            <li>Achieved monthly sales targets consistently.</li>
            <li>Maintained CRM records.</li>
          </ul>
          <Typography className="experience-company"><strong>Skills:</strong></Typography>
          <Box className="chip-container">
            {["Lead Generation", "CRM", "Customer Engagement", "Communication", "Sales Target"].map(
              (skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              )
            )}
          </Box>
        </Box>
        <Box className="experience-card">
          <Box className="timeline-dot" />
          <Typography component="h3">Sales Associate</Typography>
          <Typography className="experience-company">
            <a
              href="https://www.ambitionbox.com/overview/mind-brink-media-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <span className="company-names">
                Mind Brink Media Pulse Pvt Ltd.
              </span>
              &nbsp;<span className="company-profile-text badge">View Company Profile ↗</span>
            </a>
          </Typography>
          <Typography className="experience-duration">
            2020 – 2022
          </Typography>
          <ul>
            <li>Handled customer inquiries and product explanations.</li>
            <li>Maintained strong client relationships.</li>
            <li>Assisted in sales reporting and lead generation.</li>
            <li>Worked with marketing teams on promotions.</li>
          </ul>
          <Typography className="experience-company"><strong>Skills:</strong></Typography>
          <Box className="chip-container">
            {["Client Management", "Lead Generation", "Sales Reporting", "Customer Service", "Communication"].map(
              (skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Experience;
