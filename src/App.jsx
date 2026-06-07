import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--global-mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--global-mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-brand-dark min-h-screen text-zinc-800 dark:text-zinc-100 font-sans selection:bg-brand-primary/20 selection:text-brand-primary relative overflow-hidden bg-grid transition-colors duration-300">
      {/* Global Interactive mouse spotlight light effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-60 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(700px circle at var(--global-mouse-x, -1000px) var(--global-mouse-y, -1000px), rgba(139, 92, 246, 0.045), transparent 80%)'
        }}
      />
      
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Capabilities />
        {/* <Projects /> */}
        {/* <Experience /> */}
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
