import React from "react";
import "../assets/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { GreyButton } from "./StyledComponents/basicComponents";

import { Link } from "react-router-dom";

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
        <Link to="/search">
        <GreyButton to="/search">Search</GreyButton>
        </Link>
      </div>
    </div>
  );
}
