import React from "react";
import "../assets/related.css";

export default function RelatedVideos({ video, title, paragraph }) {
  return (
    <div className="related">
      <iframe src={video} title={title}></iframe>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
