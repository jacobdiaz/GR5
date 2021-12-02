import React from "react";
import amazon from "../assets/images/amazon.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import netflix from "../assets/images/netflix.png";

export default function CompanyIcon({ company, size }) {
  switch (company) {
    case "amazon":
      return <img src={amazon} alt="company" width={size} height={size}></img>;
    case "google":
      return <img src={google} alt="company" width={size} height={size}></img>;
    case "netflix":
      return <img src={netflix} alt="company" width={size} height={size}></img>;
    case "facebook":
      return <img src={facebook} alt="company" width={size} height={size}></img>;
    default:
      return <img src={amazon} alt="company" width={size} height={size}></img>;
  }
}
