import "./socialLink.styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Iprops {
  name: string;
  icon: string;
  link: string;
}
const SocialLink: React.FC<Iprops> = ({ name, icon, link }) => {
  return (
    <div className="badge">
      <a href={link} target="_blank" rel="noreferrer" className="badge__link">
        <LazyLoadImage src={icon} alt={`${name} logo`} className="badge__link__image" />
        <span className="badge__link__name">{name}</span>
      </a>
    </div>
  );
};

export default SocialLink;
