
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import QRMenu from './components/QRMenu';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden font-sans">
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>

      <Navbar isScrolled={isScrolled} />
      
      <main className="relative z-10 flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>

        <section id="qr-menu" className="relative z-20 border-t border-white/5">
          <QRMenu />
        </section>

        <section id="services" className="border-t border-white/5 bg-[#030303] relative z-20">
          <Services />
        </section>

        <section id="about" className="border-t border-white/5 bg-[#050505] relative z-20">
          <About />
        </section>

        <section id="skills" className="border-t border-white/5 bg-[#030303] relative z-20">
          <Skills />
        </section>

        <section id="why-choose-us" className="border-t border-white/5 bg-[#050505] relative z-20">
          <WhyChooseUs />
        </section>

        <section id="testimonials" className="border-t border-white/5 bg-[#030303] relative z-20">
          <Testimonials />
        </section>

        <section id="contact" className="border-t border-white/5 bg-[#030303] relative z-20">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
      </div>
    </div>
  );
};

export default App;