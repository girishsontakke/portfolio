import "./socialLink.styles.scss";
const SocialLink = ({ name, icon, link }) => {
  return (
    <div className="badge">
      <a href={link} target="_blank" rel="noreferrer" className="badge__link">
        <img src={icon} alt={`${name} logo`} className="badge__link__image" />
        <span className="badge__link__name">{name}</span>
      </a>
    </div>
  );
};

export default SocialLink;
