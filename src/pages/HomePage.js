import React, { Component } from "react";
import SearchResultCard from "../components/SearchResultCard";
import SearchBar from "../components/SearchBar";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SearchBar />
        {/* TODO Search Bar */}
        <SearchResultCard
          title="TItle"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          video="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
        />
        {/*Category Items*/}
        {/* TODO List of tutorial cards */}
      </div>
    );
  }
}
