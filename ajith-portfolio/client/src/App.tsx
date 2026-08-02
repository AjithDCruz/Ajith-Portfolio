import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Story from "./components/sections/Story/Story";
import Experience from "./components/sections/Experience/Experience";
import Automation from "./components/sections/Automation/Automation";
import Skills from "./components/sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Experience />
      <Automation />
      <Skills />
    </>
  );
}

export default App;