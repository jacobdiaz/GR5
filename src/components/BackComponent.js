import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../assets/back.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Link to="/GR5/">
      <div className="back">
        <h3>
          <ArrowBackIcon className="icon" /> Back To Home
        </h3>
      </div>
    </Link>
  );
}
