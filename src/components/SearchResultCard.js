import React from "react";
import "../assets/searchcard.css"

export default function SearchResultCard({title, paragraph, video}){
    return(
        <div className = "result">
            <div className = "text-result">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <div className = "buttons-result"> 
                    <button className = "view">View Transcript</button>
                    <button className = "read">Listen to Transcript</button>
                </div>
            </div>
            <div className = "video-results">
                <iframe src = {video}></iframe>
            </div>
        </div>
    );
}
