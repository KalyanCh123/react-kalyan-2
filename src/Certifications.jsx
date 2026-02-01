import React, { useState } from "react";
import { Box, Grid, Typography, Modal, Button } from "@mui/material";

const certificates = [
  {
    title: "React Certified Developer",
    year: "React 2025",
    description: "Validates skills in developing custom applications using React, including component-based architecture and state management.",
    ribbon: "React - Developer",
    theme: "react",
    instructor: "Jane Smith",
    date: "Dec 20, 2025"
  },
  {
    title: "Web/Front-End Based Certification",
    year: "React 2024",
    description: "Demonstrates foundational React knowledge, including navigating the framework and component basics.",
    ribbon: "Web / Front-End",
    theme: "web",
    instructor: "Mark Taylor",
    date: "Dec 15, 2024"
  },
  {
    title: "Sales Expert Certification",
    year: "Sales 2022-2023",
    description:
      "Validates expertise in sales strategies, CRM, and achieving performance targets.",
    ribbon: "Sales - Specialist",
    theme: "sales",
    instructor: "Sarah Johnson",
    date: "Dec 20, 2023"
  }
];

export default function Certifications({ setLoading, loading }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleOpen = (cert) => {
    setLoading(true);
    setTimeout(() => {
      setActive(cert);
      setOpen(true);
      setLoading(false);
    }, 800);
  };
  const handleClose = () => {
    setClosing(true);
    setLoading(true);
    setTimeout(() => {
      setOpen(false);
      setActive(null);
      setClosing(false);
      setLoading(false);
    }, 800);
  };

  return (
    <Box className="cert-section">
      <Typography className="about-title">Certifications</Typography>
      <Box className="about-texts">
        <Typography component="p">
          Professional credentials that validate my expertise in React and related
          technologies and sales.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, i) => (
          <Grid item key={i}>
            <Box className={`cert-card cert-${cert.theme}`}>
              <Box>
                <Typography className="cert-title">{cert.title}</Typography>
                <Typography className="cert-year">{cert.year}</Typography>
                <Typography className="cert-desc">{cert.description}</Typography>
              </Box>
              <Typography
                className="cert-view"
                onClick={() => handleOpen(cert)}
              >
                View Certificate
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography className="cert-footer">
        * * * Continuously expanding my knowledge and skills through certifications and professional development. * * *
      </Typography>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className={`cert-modal modal-${active?.theme}`}>
          <Box className={`cert-ribbon ribbon-${active?.theme}`}>
            {active?.ribbon}
          </Box>
          <Typography className="modal-title">
            Certificate of Completion
          </Typography>
          <Typography className="modal-sub">
            This certificate is proudly presented to
          </Typography>
          <Typography className="modal-name">
            Chekuru Kalyan
          </Typography>
          <Typography className="modal-desc">
            For successfully completing the{" "}
            <strong>{active?.title}</strong> program.
          </Typography>
          <Grid container className="modal-sign-row">
            <Grid item className="modal-sign-box">
              <div className="modal-line"></div>
              <Typography className="modal-sign">{active?.instructor}</Typography>
              <Typography className="modal-label">Instructor</Typography>
            </Grid>
            <Grid item className="modal-sign-box">
              <div className="modal-line"></div>
              <Typography className="modal-sign">{active?.date}</Typography>
              <Typography className="modal-label">Date</Typography>
            </Grid>
          </Grid>
          <div className="modal-btn-wrap">
            <Button className="modal-close" onClick={handleClose} disabled={closing || loading}>
              CLOSE
            </Button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
