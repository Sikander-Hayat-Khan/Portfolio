import BackgroundBlobs from './components/layout/BackgroundBlobs';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import ContactFooter from './components/sections/ContactFooter';
import Education from './components/sections/Education';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { toggleTheme } = useTheme();
  useCustomCursor();

  return (
    <div className="bg-light text-slate-800 dark:bg-dark dark:text-slate-200 transition-colors duration-500 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <CustomCursor />
      <BackgroundBlobs />
      <Navbar onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <ContactFooter />
    </div>
  );
}
