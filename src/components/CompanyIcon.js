import React from "react";
// Images
import amazon from "../assets/images/amazon.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import netflix from "../assets/images/netflix.png";
import more from "../assets/images/more.png";

// Material Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmailIcon from "@mui/icons-material/Email";
export default function CompanyIcon({ company, size }) {
  switch (company) {
    // Company iMages
    case "Amazon":
      return <img src={amazon} alt="company" height={size}></img>;
    case "Google":
      return <img src={google} alt="company" height={size}></img>;
    case "Netflix":
      return <img src={netflix} alt="company" height={size}></img>;
    case "Facebook":
      return <img src={facebook} alt="company" height={size}></img>;
    case "more":
      return <img src={more} width="35%" alt="more button"></img>;

    // Icons
    case "Shopping":
      return <ShoppingCartIcon style={{ fontSize: "80px" }} />;
    case "Payments":
      return <AttachMoneyIcon style={{ fontSize: "80px" }} />;
    case "Shipping":
      return <LocalShippingIcon style={{ fontSize: "80px" }} />;
    case "Email":
      return <EmailIcon style={{ fontSize: "80px" }} />;

    default:
      return <img src={more} width="35%" alt="more button"></img>;
  }
}
