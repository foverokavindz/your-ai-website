import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProjectScope from './components/sections/ProjectScope';
import LiteratureSurvey from './components/sections/LiteratureSurvey';
import ResearchGap from './components/sections/ResearchGap';
import ResearchProblem from './components/sections/ResearchProblem';
import Objectives from './components/sections/Objectives';
import Methodology from './components/sections/Methodology';
import Technologies from './components/sections/Technologies';
import Milestones from './components/sections/Milestones';
import Downloads from './components/sections/Downloads';
import Achievements from './components/sections/Achievements';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <ProjectScope />
        <LiteratureSurvey />
        <ResearchGap />
        <ResearchProblem />
        <Objectives />
        <Methodology />
        <Technologies />
        <Milestones />
        <Downloads />
        {/* <Achievements /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
