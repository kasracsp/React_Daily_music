import React from "react";
import { Link } from "react-router-dom";

const Card = ({ categoryTitle, image, title, name, id }) => {
  return (
    <div className="slide-insider">
      <div className="image-container">
        <Link to={`/${categoryTitle}/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <span className="material-icons">play_arrow</span>
        <div className="overlay"></div>
      </div>
      <Link to={`/${categoryTitle}/${id}`} className="slide-title">
        {title}
      </Link>
      {name && <p className="slide-artist">{name}</p>}
    </div>
  );
};

export default Card;
