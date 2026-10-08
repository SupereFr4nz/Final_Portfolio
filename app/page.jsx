import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import timeline from "@/data/timeline";
import certificates from "@/data/certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {timeline.length > 0 && <Journey />}
        {certificates.length > 0 && <Certificates />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
