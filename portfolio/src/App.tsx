import Header from "./components/Header.tsx";
import React from "react";
import Home from "./pages/HomePage.tsx";
import About from "./pages/AboutPage.tsx";
import Contact from "./pages/ContactPage.tsx";
import Projects from "./pages/ProjectsPage.tsx";
import Skills from "./pages/SkillsPage.tsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
       <Footer />
    </Router>
  );
};

export default App
