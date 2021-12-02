import React, { Component } from "react";
import TutorialTextCard from "../components/TutorialTextCard";
import { ParaGrey } from "../components/StyledComponents/textComponents";
import { Container, Row } from "../components/StyledComponents/basicComponents";

import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/CategoryItem";

export default class HomePage extends Component {
  render() {
    return (
      // Container keeps everthing within the nice spaced margins
      <Container>
        {/* Search bar is fixed to the top of the page as you scroll */}
        <SearchBar placeholder="Enter Company Name or Type of Tutorial You Need..." />

        <Row>
          <h2 style={{ paddingRight: "10px" }}>Company</h2>
          <ParaGrey>Please Select a Company</ParaGrey>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <CategoryItem company="Amazon" />
          <CategoryItem company="Facebook" />
          <CategoryItem company="Netflix" />
          <CategoryItem company="Google" />
          <CategoryItem company="more" />
        </Row>

        <Row>
          <h2 style={{ paddingRight: "10px" }}>Category</h2>
          <ParaGrey>Please Select a Category</ParaGrey>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <CategoryItem company="Shopping" />
          <CategoryItem company="Payments" />
          <CategoryItem company="Shipping" />
          <CategoryItem company="Email" />
          <CategoryItem company="more" />
        </Row>

        <h3>Category</h3>
        {/* Todo populate a list of tutorial cards */}
        <TutorialTextCard
          company="google"
          title="What do you have to say to Joe Byron?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Container>
    );
  }
}
