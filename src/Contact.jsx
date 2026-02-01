import React, { useState, useRef, useEffect } from "react";
import { Box, Grid, Typography, Button, IconButton, Modal, TextField } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatIcon from "@mui/icons-material/Chat";

const Contact = ({ loading,setLoading }) => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageIconClicked, setMessageIconClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingSuccess, setPendingSuccess] = useState(false);

  const validateForm = () => {
    setTouched({ name: true, email: true, message: true });
    validateField("name", name);
    validateField("email", email);
    validateField("message", message);
    if (
      name.trim().length < 3 ||
      !emailRegex.test(email) ||
      message.trim().length < 10
    ) {
      nameRef.current?.focus();
      return false;
    }
    return true;
  };
  const handleWhatsAppSend = () => {
    if (!validateForm()) return;
    setLoading(true);
    const text =
      `Hello Kalyan,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;
    setTimeout(() => {
      window.open(`https://wa.me/917097173125?text=${text}`, "_blank");
      setPendingSuccess(true);
      setLoading(false);
    }, 2500);
  };
  const handleEmailSend = () => {
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      window.location.href =
        `mailto:kalyanch692@gmail.com?subject=New Contact Message&body=` +
        `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      setPendingSuccess(true);
      setLoading(false);
    }, 2500);
  };
  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible" && pendingSuccess) {
        setShowSuccess(true);
        setPendingSuccess(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [pendingSuccess]);
  const [closing,setClosing]=useState(false)
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setClosing(true);
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setClosing(false);
      setLoading(false);
    }, 1200);
  };
  const card = {
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#fff",
    p: 5,
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)"
  };
  const cards = {
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#fff",
    height: '320px',
    p: 5,
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)"
  };
  const iconHover = {
    width: 38,
    height: 38,
    transition: "0.2s",
    "&:hover": { transform: "scale(1.5)" }
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:gmail|yahoo|outlook|hotmail|icloud|protonmail)\.(com|in|co\.in)$/;
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const validateField = (field, value) => {
    let error = "";
    if (!value.trim()) {
      error = "* This field is required! *";
    } else {
      if (field === "name") {
        if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "* Name should contain only letters! *";
        } else if (value.trim().length < 3) {
          error = "* Name must be at least 3 characters! *";
        }
      }
      if (field === "email") {
        if (!emailRegex.test(value)) {
          error = "* Enter a valid email (gmail, yahoo, outlook etc.)! *";
        }
      }
      if (field === "message") {
        if (value.trim().length < 10) {
          error = "* Message must be at least 10 characters! *";
        }
      }
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
  const isFormValid =
    name.trim().length >= 3 &&
    emailRegex.test(email) &&
    message.trim().length >= 10 &&
    !errors.name &&
    !errors.email &&
    !errors.message;
  const runWithPageLoader = (action, delay = 1000) => {
    setLoading(true);
    setTimeout(() => {
      action();
      setLoading(false);
    }, delay);
  };
  return (
    <Box className="contact-box">
      <Typography className="about-title">
        Get In Touch
      </Typography>
      <Box className='about-texts'><Typography component="p">
        Have a project in mind or want to discuss React based solutions/projects or any updates? I’d love to hear from you.
      </Typography></Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box className="contact-card" sx={cards}>
            <Typography variant="h6">Contact Information</Typography>
            <Typography mt={2}>
              📧 Email : <a
                className="contact-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  runWithPageLoader(() => {
                    window.location.href = "mailto:kalyanch692@gmail.com";
                  });
                }}
              >
                kalyanch692@gmail.com
              </a>
            </Typography><br />
            <Typography mt={1}>
              👤 LinkedIn : <a
                href="#"
                className="contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  runWithPageLoader(() =>
                    window.open(
                      "https://www.linkedin.com/in/kalyan-chekuru-ba8829156",
                      "_blank"
                    )
                  );
                }}
              >
                View Profile
              </a>
            </Typography><br />
            <Typography mt={1}>🌍 Based In : India</Typography>
            <Typography mt={3}>Connect With Me</Typography>
            <Box mt={3.5} display="flex" gap={2} mb={2}>
              <IconButton
                onClick={() =>
                  runWithPageLoader(() =>
                    window.open(
                      "https://www.linkedin.com/in/kalyan-chekuru-ba8829156",
                      "_blank"
                    )
                  )
                }
                sx={{ ...iconHover, background: "#0A66C2" }}
              >
                <LinkedInIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton
                onClick={() =>
                  runWithPageLoader(() =>
                    window.open("https://wa.me/917097173125", "_blank")
                  )
                }
                sx={{ ...iconHover, background: "#25D366" }}
              >
                <WhatsAppIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton
                onClick={() =>
                  runWithPageLoader(() =>
                    window.open("https://github.com/KalyanCh123", "_blank")
                  )
                }
                sx={{ ...iconHover, background: "#24292e" }}
              >
                <GitHubIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton
                onClick={() =>
                  runWithPageLoader(() => {
                    setMessageIconClicked(true);
                    nameRef.current?.focus();
                  }, 300)
                }
                sx={{
                  ...iconHover,
                  background: messageIconClicked && !name ? "red" : "#38bdf8"
                }}
              >
                <ChatIcon sx={{ color: "#fff" }} />
              </IconButton>

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="message-card" sx={card}>
            <Typography variant="h6">Send a Message to Me</Typography><br />
            <Box className="contact-field">
              <Typography className="contact-label">Name</Typography>
              <input
                ref={nameRef}
                value={name}
                placeholder="Kalyan *** ( Your Name )"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^[A-Za-z\s]+$/.test(value)) {
                    setName(value);
                    if (touched.name) {
                      validateField("name", value);
                    }
                  }
                }}
                onBlur={(e) => {
                  setTouched((t) => ({ ...t, name: true }));
                  validateField("name", e.target.value);
                }}
                className="contact-input"
              />
              {touched.name && errors.name && (
                <div className="contact-error">{errors.name}</div>
              )}            </Box>
            <Box className="contact-field">
              <Typography className="contact-label">Email</Typography>
              <input
                value={email}
                placeholder="Kalyan *** @gmail.com ( Your Email )"
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (touched.email) {
                    validateField("email", value);
                  }
                }}
                onBlur={(e) => {
                  setTouched((t) => ({ ...t, email: true }));
                  validateField("email", e.target.value);
                }}
                className="contact-input"
              />
              {touched.email && errors.email && (
                <div className="contact-error">{errors.email}</div>
              )}            </Box>
            <Box className="contact-field">
              <Typography className="contact-label">Message</Typography>
              <textarea
                value={message}
                placeholder={`I'd like to discuss a React based project...
                  
                ( Your Message )
                  `}
                onChange={(e) => {
                  const value = e.target.value;
                  setMessage(value);
                  if (touched.message) {
                    validateField("message", value);
                  }
                }}
                onBlur={(e) => {
                  setTouched((t) => ({ ...t, message: true }));
                  validateField("message", e.target.value);
                }}
                className="contact-textarea"
                rows={5}
              />
              {touched.message && errors.message && (
                <div className="contact-error">{errors.message}</div>
              )}            </Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  disabled={!isFormValid || loading}
                  onClick={handleWhatsAppSend}
                  sx={{
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    width: "250px",
                    color: "#fff",
                    "&:hover": { transform: "scale(1.15)" }
                  }}
                >
                  Send WhatsApp
                </Button>
              </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  disabled={!isFormValid || loading}
                  onClick={handleEmailSend}
                  sx={{
                    background: "linear-gradient(135deg, #2563eb, #1e40af)",
                    width: "250px",
                    color: "#fff",
                    "&:hover": { transform: "scale(1.15)" }
                  }}
                >
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {<Modal open={showSuccess}>
        <Box className="modal-overlay">
          <Box className="modal-content">
            <Button className="close-btn" onClick={handleCloseSuccess} disabled={closing || loading}>✕</Button>
            <div className="check">✔</div>
            <h2>Thank You! 😊</h2>
            <p>
              Your message has been sent successfully.
              <br />
              <strong>Kalyan</strong> will get back to you shortly.
            </p>
            <Button className="ok-btn" onClick={handleCloseSuccess} disabled={closing || loading}>
              Okay
            </Button>
          </Box>
        </Box>
      </Modal>}
    </Box>
  );
};
export default Contact;
