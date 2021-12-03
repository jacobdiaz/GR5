import { React, useState } from "react";
import "../assets/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { GreyButton } from "./StyledComponents/basicComponents";
import { Link } from "react-router-dom";

export default function SearchBar({ placeholder }) {
  const [searchInput, setSearch] = useState("");
  let stringUrl = `/search?input=${searchInput}`;
  return (
    <div className="container">
      <div className="searchName">
        <h2 style={{ marginRight: '.8rem' }} > OnlineAssist &nbsp;</h2>
      </div>
      <div className="searchContainer">
        <div className="searchInputs">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
        </div>
        <div className="searchResult"></div>
      </div>
      <div style={{ width: "120px" }}>
        <Link to={stringUrl}>
          <GreyButton to="/search">Search</GreyButton>
        </Link>
      </div>
    </div>
  );
}
