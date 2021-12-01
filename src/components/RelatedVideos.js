import React from 'react';
import "../assets/related.css"

export default function({video, title, paragraph}){
   return (
   <div className = "related">
        <iframe src = {video}></iframe>
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </div>
    );
}