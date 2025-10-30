// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/professional-layout.css";

import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";
import HomeLayout from "./components/layout/HomeLayout";

// Pages
import Home from "./pages/home_page/HomePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import ResumePage from "./pages/resume_page/ResumePage";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";

// About pieces
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
      <MyNav />
      <Routes>
        {/* HomeLayout = wrapper mit <Outlet /> */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technicalskill" element={<TechnicalSkill />} />
          <Route path="personalskill" element={<PersonalSkill />} />
          <Route path="toolkit" element={<Toolkit />} />
          <Route path="educationjourney" element={<EducationJourney />} />
          <Route path="experiencejourney" element={<ExperienceJourney />} />
          <Route path="technicaljourney" element={<TechnicalJourney />} />
          <Route path="projectjourney" element={<ProjectJourney />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="socialmedia" element={<SocialMedia />} />
        </Route>

        {/* Andere Hauptseiten */}
        <Route path="/projectspage" element={<ProjectPage />} />
        <Route path="/certificatepage" element={<CertificatePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/blogs" element={<ComingSoon />} />

        {/* Fallback 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
