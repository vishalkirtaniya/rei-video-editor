// app/page.jsx
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Collaborations from "../components/Collaborations";
import CreatorServices from "../components/CreatorServices";
import ImageGallery from "../components/ImageGallery";

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
        <ImageGallery />
        <Features />
        <CreatorServices />
        <About />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
