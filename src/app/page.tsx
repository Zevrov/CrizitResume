import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CorporatePattern from '@/components/CorporatePattern';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px]">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <CorporatePattern pattern="dots" color="white" />
        </div>
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <CorporatePattern pattern="circuit" color="white" />
        </div>
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <CorporatePattern pattern="grid" color="white" />
        </div>
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-deep-blue">
        <div className="absolute inset-0 opacity-5">
          <CorporatePattern pattern="squares" color="white" />
        </div>
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
} 