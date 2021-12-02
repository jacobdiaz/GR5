import React, { Component } from 'react'
import BackComponent from '../components/BackComponent';
import LanguageDropDown from '../components/LanguageDropDown';
import SearchBar from '../components/SearchBar';
import SearchResultCard from "../components/SearchResultCard"
import { Container } from "../components/StyledComponents/basicComponents";

export default class SearchResultPage extends Component {
    render() {
        return (
            <Container>
                <SearchBar/>
                <BackComponent/>
                <LanguageDropDown/>
                <SearchResultCard title = "Creating a New Amazon Account" 
                paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                video = "https://www.youtube.com/embed/P90I9LX7y9Y"/>
                <SearchResultCard title = "Deleting an Amazon Account" 
                paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                video = "https://www.youtube.com/embed/VS8wZP3nvSE"/>
                <SearchResultCard title = "Updating Amazon Payment Information" 
                paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                video = "https://www.youtube.com/embed/af834otv6Tc"/>
            </Container>
        )
    }
}
