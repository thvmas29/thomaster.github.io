import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Presentation } from './components/Presentation';
import { Skills } from './components/Skills';
import { Internships } from './components/Internships';
import { Projects } from './components/Projects';
import { TechWatch } from './components/TechWatch';
import { LegalWatch } from './components/LegalWatch';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Presentation />
        <Skills />
        <Internships />
        <Projects />
        <TechWatch />
        <LegalWatch />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}