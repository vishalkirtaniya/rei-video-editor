// app/page.jsx
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <ParticlesBackground />
      <div className="gradient-overlay" />
      <div className="scanlines" />
      <div className="shapes-container">
        <div className="shape shape-circle" />
        <div className="shape shape-triangle" />
        <div className="shape shape-square" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
