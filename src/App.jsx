import { useState, useEffect } from 'react';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import './App.css';

const tabs = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Certifications",
  "Contact",
];
function App() {
  const [activeTab, setActiveTab] = useState('Home');
  useEffect(() => {
    const onScroll = () => {
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.toLowerCase());
        const top = section.getBoundingClientRect().top;
        if (top <= 120 && top >= -120) setActiveTab(tab);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToSection = (tab) => {
    setActiveTab(tab);
    document
      .getElementById(tab.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.toLowerCase());
        if (!section) return;

        const top = section.getBoundingClientRect().top;
        if (top <= 120 && top >= -120) {
          setActiveTab(tab);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Header activeTab={activeTab} scrollToSection={scrollToSection} />
      <div style={{ padding: "30px", background: "#c3b7b7fe" }}>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="contact"><Contact /></div>
      </div>
    </>
  );
}
export default App;
