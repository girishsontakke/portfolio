import SocialLink from "../socialLink/socialLink.component";
import data from "./socialLinks.data";
import "./socialLinks.styles.scss";

const SocialLinks = () => (
  <div className="links">
    {data.map(({ name, link, icon }, index) => (
      <SocialLink name={name} link={link} icon={icon} key={index} />
    ))}
  </div>
);

export default SocialLinks;
