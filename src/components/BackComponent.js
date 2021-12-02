import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../assets/back.css";

export default function () {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
    >
      <div className="back">
        <ArrowBackIcon className="icon" />
        <h3>Back</h3>
      </div>
    </button>
  );
}
