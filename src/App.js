<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./App.css";
import "./style.css";
import "./styles/professional-layout.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";

// Main Pages
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";

// About Sub-Pages
=======
import "./App.css";
import './styles/professional-layout.css'; 
import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
>>>>>>> origin/main
import About from "./components/aboutme/about/About";
import Ranking from "./components/aboutme/ranking/Ranking";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
<<<<<<< HEAD
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import Toolkit from "./components/aboutme/skills/Toolkit";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
=======
import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
// import Zoom from 'react-reveal/Zoom';
import Toolkit from "./components/aboutme/skills/Toolkit";
>>>>>>> origin/main

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
<<<<<<< HEAD
    }, 3000);
=======
    }, 4000);
>>>>>>> origin/main

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
<<<<<<< HEAD
          {/* Main Home Route with Nested About Routes */}
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
=======
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}></Route>
>>>>>>> origin/main
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            <Route path="projectjourney" element={<ProjectJourney />} />
<<<<<<< HEAD
            <Route path="educationjourney" element={<EducationJourney />} />
            <Route path="experiencejourney" element={<ExperienceJourney />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="toolkit" element={<Toolkit />} />
          </Route>

          {/* Other Main Routes */}
=======
            <Route
              path="educationjourney"
              element={<EducationJourney />}
            ></Route>
            <Route
              path="experiencejourney"
              element={<ExperienceJourney />}
            ></Route>
            <Route path="ranking" element={<Ranking />}></Route>
            <Route path="socialmedia" element={<SocialMedia />}></Route>
            <Route path="toolkit" element={<Toolkit />}></Route>
          </Route>
>>>>>>> origin/main
          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/certificatepage" element={<CertificatePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<ComingSoon />} />
<<<<<<< HEAD

          {/* 404 Fallback */}
=======
>>>>>>> origin/main
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/main
