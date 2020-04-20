import React from "react";
import "./Card.scss";

const Card = ({ size, imgURL, category }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      />
      <div className="content">
        <div className="title">{category}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Card;
