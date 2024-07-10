import Navbar from "../components/NavBar"
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ProjectsHighlight from "../components/ProjectsHighlight";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectsHighlight />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
