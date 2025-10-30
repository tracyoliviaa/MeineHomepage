import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./styles/professional-layout.css";

// Components
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";

// Main Pages
import Home from "./pages/home_page/HomePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import ResumePage from "./pages/resume_page/ResumePage";
import ComingSoon from "./pages/comingsoon_page/comingsoon";

// About Sub-Pages
import About from "./components/aboutme/about/About";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import Toolkit from "./components/aboutme/skills/Toolkit";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import Ranking from "./components/aboutme/ranking/Ranking";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          {/* Main Page - MUST BE FIRST */}
          <Route path="/" element={<Home />} />
          
          {/* Main Routes */}
          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/certificatepage" element={<CertificatePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/blogs" element={<ComingSoon />} />

          {/* About Section Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/technicalskill" element={<TechnicalSkill />} />
          <Route path="/personalskill" element={<PersonalSkill />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/educationjourney" element={<EducationJourney />} />
          <Route path="/experiencejourney" element={<ExperienceJourney />} />
          <Route path="/technicaljourney" element={<TechnicalJourney />} />
          <Route path="/projectjourney" element={<ProjectJourney />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/socialmedia" element={<SocialMedia />} />

          {/* 404 Fallback - REDIRECT to HOME instead of showing 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;