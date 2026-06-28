import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="hero-content">

      <span className="hero-tag">
        👋 Welcome to My Journey
      </span>

      <h1>
        I'm <br />
        <span>Ajith R</span>
      </h1>

      <h2>
        Engineering Reliable Test Automation
        for Modern Banking Systems.
      </h2>

      <p>
        Passionate Automation Test Engineer with experience
        in Java, Selenium, Playwright, Azure and AI.
        I love building scalable automation solutions
        that improve software quality.
      </p>

      <div className="tech-stack">

        <span>Java</span>

        <span>Selenium</span>

        <span>Playwright</span>

        <span>Azure</span>

        <span>AI</span>

      </div>

      <HeroButtons />

    </div>
  );
}

export default HeroContent;