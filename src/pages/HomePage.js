import React, { Component } from "react";
import TutorialTextCard from "../components/TutorialTextCard";
import SearchBar from "../components/SearchBar";
export default class HomePage extends Component {
  render() {
    return (
      <div style={{ marginTop: "5%" }}>
        <SearchBar />
        {/*  */}
        {/* Todo populate a list of tutorial cards */}
        <TutorialTextCard
          company="Amazon"
          title="What do you have to say to Joe Byron?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    );
  }
}
