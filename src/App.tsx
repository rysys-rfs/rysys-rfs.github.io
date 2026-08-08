import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ResumeViewer } from './components/ResumeViewer';
import { MusicPlayer } from './components/MusicPlayer';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div id="portfolio-app" className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FFD100] selection:text-slate-950">
      <Navbar />
      <main className="bg-white text-slate-900">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ResumeViewer />
        <MusicPlayer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
