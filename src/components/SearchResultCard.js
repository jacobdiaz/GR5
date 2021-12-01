import React from "react";
import "../assets/searchcard.css";
import { Container } from "../components/StyledComponents/ReusableComponents";

export default function SearchResultCard({ title, paragraph, video }) {
  return (
    <Container>
      <div className="result">
        <div className="text-result">
          <h2>{title}</h2>
          <p className="paragraph">{paragraph}</p>
          <div className="buttons-result">
            <button className="viewBtn">View Transcript</button>
            <button className="readBtn">Listen to Transcript</button>
          </div>
        </div>
        <div className="video-results">
          <iframe src={video}></iframe>
        </div>
      </div>
    </Container>
  );
}
