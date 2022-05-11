import React from "react";
import "./RotatingCard.styles.scss";

interface Iprops {
  frontComponent: JSX.Element;
  backComponent: JSX.Element;
}

const RotatingCard: React.FC<Iprops> = ({ frontComponent, backComponent }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__card">
        <div className="wrapper__card__frontComponent">{frontComponent}</div>
        <div className="wrapper__card__backComponent">{backComponent}</div>
      </div>
    </div>
  );
};

export default RotatingCard;
