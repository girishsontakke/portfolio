import SocialLink from "../socialLink/socialLink.component";
import data from "./socialLinks.data";
import "./socialLinks.styles.scss";

const SocialLinks = () => (
  <div className="links">
    {data.map(({ name, link, icon }) => (
      <SocialLink name={name} link={link} icon={icon} />
    ))}
  </div>
);

export default SocialLinks;
