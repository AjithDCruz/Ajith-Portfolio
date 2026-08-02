import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Story from "./components/sections/Story/Story";
import Experience from "./components/sections/Experience/Experience";
import Automation from "./components/sections/Automation/Automation";
import Skills from "./components/sections/Skills/Skills";
import Certifications from "./components/sections/Certifications/Certifications";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Experience />
      <Automation />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}

export default App;