import React from "react";
import "../assets/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { GreyButton } from "../components/StyledComponents/ReusableComponents";
// Glieb
export default function SearchBar({ placeholder, data }) {
  return (
    <div className="container">
      <div className="searchContainer">
        <div className="searchInputs">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <input type="text" placeholder={placeholder} />
        </div>
        <div className="searchResult"></div>
      </div>
      <div style={{ width: "120px" }}>
        <GreyButton>Search</GreyButton>
      </div>
    </div>
  );
}
