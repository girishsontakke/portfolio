import "./hero.styles.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import SocialLinks from "../social-links/SocialLinks.component";

function Hero() {
  const myElement = useRef();
  useEffect(() => {
    const skills = [
      "Web Developer",
      "ReactJs Developer",
      "Django Developer",
      "NodeJs Developer",
      "SQL Developer",
      "Open Source Developer",
    ];
    init(myElement.current, { showCursor: true, strings: skills });
  }, []);
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero__left">
          <p className="hero__left__greet">HELLO WORLD, I AM</p>
          <h1 className="hero__left__name">GIRISH SONTAKKE, </h1>
          <h2 className="typewriter">
            <span ref={myElement}></span>
          </h2>
        </div>
        <div className="hero__right">
          <img
            src="./assets/images/hero-section.svg"
            alt="owner"
            className="hero__right__image"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Hero;
