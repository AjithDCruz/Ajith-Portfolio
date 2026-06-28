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
    </section>
  );
}

export default Hero;