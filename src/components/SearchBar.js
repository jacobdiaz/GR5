import React from 'react';
import "../assets/searchbar.css";
import SearchIcon from '@mui/icons-material/Search';

// Glieb
export default function SearchBar({placeholder, data}) {
    return (
        <div className = "search">
            <div className = "searchInputs">
                <div className = "searchIcon">
                    <SearchIcon/>
                </div>
                <input type= "text" placeholder = {placeholder}/>
            </div>
            <div className = "searchResult"></div>
        </div>
    )
}
