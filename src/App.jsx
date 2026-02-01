import { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./App.css";
import Loader from "./Loader";

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
  const [activeTab, setActiveTab] = useState("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab("Home");
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (tab) => {
    const section = document.getElementById(tab.toLowerCase());
    const header = document.getElementById("site-header");
    if (!section || !header) return;
    setLoading(true);
    const headerHeight = header.offsetHeight;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionTop - headerHeight - 20,
      behavior: "smooth",
    });
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 1000);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("site-header");
      if (!header) return;
      const headerHeight = header.offsetHeight;
      const scrollPosition = window.scrollY + headerHeight + 50;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].toLowerCase());
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Header activeTab={activeTab} scrollToSection={scrollToSection} />
      <div style={{ background: "#c3b7b7fe",marginTop:'10px' }}>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects setLoading={setLoading} loading={loading}/></div>
        <div id="certifications"><Certifications setLoading={setLoading} loading={loading} /></div>
        <div id="contact"><Contact setLoading={setLoading} loading={loading} /></div>
      </div>
    </>
  );
}

export default App;