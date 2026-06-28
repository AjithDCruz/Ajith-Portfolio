import "./Hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="hero">
  <div className="container hero-wrapper">
    <HeroContent />
    <HeroImage />
  </div>

  <div className="scroll-indicator">
    <span>Continue Journey</span>
    <div className="scroll-arrow">↓</div>
  </div>
</section>
  );
}

export default Hero;