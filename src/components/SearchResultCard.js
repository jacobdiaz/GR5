import React from "react";
import "../assets/searchcard.css";
import CompanyIcon from "./CompanyIcon";

import { ParaGrey } from "./StyledComponents/textComponents";
import { Link } from "react-router-dom";

export default function SearchResultCard({ title, paragraph, video, company }) {
  return (
    <div className="result">
      <div className="text-result">
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
          <h2>{title}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ParaGrey style={{ paddingRight: "10px" }}> {company}</ParaGrey>
            <CompanyIcon company={company} size="25px" />
          </div>
        </div>{" "}
        <p className="paragraph">{paragraph}</p>
        <div className="buttons-result">
          {/* Pass the variables through the URL as parameters */}
          <Link to={`/tutorial?title=${title}&paragraph=${paragraph}&video=${video}&company=${company}`}>
            <button className="viewBtn">View Transcript</button>
          </Link>
          <Link to={`/tutorial?title=${title}&paragraph=${paragraph}&video=${video}&company=${company}`}>
            <button className="readBtn">Listen to Transcript</button>
          </Link>
        </div>
      </div>
      <div className="video-results">
        <iframe src={video}></iframe>
      </div>
    </div>
  );
}
