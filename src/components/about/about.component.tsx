import "./about.styles.scss";
import GirishImage from "./images/Girish.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <img src={GirishImage} alt="" />
      </div>
      <div className="about__right">
        <h1 className="about__right__heading">About Me</h1>
        <p className="about__right__desc">
          Hi, I am Girish Sontakke. I love to create functional and reactive Web Applications. I am passionate about
          modern web technologies and admire to work on them.
        </p>
      </div>
    </div>
  );
};

export default About;
