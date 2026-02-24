import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import LiteratureSurvey from './components/sections/LiteratureSurvey';
import ResearchGap from './components/sections/ResearchGap';
import ResearchProblem from './components/sections/ResearchProblem';
import Objectives from './components/sections/Objectives';
import Methodology from './components/sections/Methodology';
import Technologies from './components/sections/Technologies';
import Milestones from './components/sections/Milestones';
import ResultsAndEvaluation from './components/sections/ResultsAndEvaluation';
import ChallengesFutureConclusion from './components/sections/ChallengesFutureConclusion';
import Downloads from './components/sections/Downloads';
import Achievements from './components/sections/Achievements';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';
import IntroductionAndBackground from './components/sections/IntroductionAndBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <IntroductionAndBackground />
        <ResearchProblem />
        <LiteratureSurvey />
        <Objectives />
        <Methodology />
        <Technologies />
        <Milestones />
        <ResultsAndEvaluation />
        <ChallengesFutureConclusion />
        {/* <ResearchGap /> */}
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
