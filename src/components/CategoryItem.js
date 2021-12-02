import React from "react";
import "../assets/card.css";
import CompanyIcon from "./CompanyIcon";
export default function CategoryItem({ company }) {
  return (
    <div className="card-div">
      <div className="card-image">
        <CompanyIcon company={company} size="200" />
      </div>
      <div className="card-title">
        <h3>{company}</h3>
      </div>
    </div>
  );
}
