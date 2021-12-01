import React from "react";
import "../assets/card.css";

export default function CategoryItem({ logoImage, title }) {
  return (
    <div className="card-div">
      <div className="card-image">
        <img src={logoImage} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
