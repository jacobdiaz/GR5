import React, { Component } from "react";
import TutorialTextCard from "../components/TutorialTextCard";
import styled from "styled-components";
import { ParaGrey } from "../components/StyledComponents/textComponents";
import { Container } from "../components/StyledComponents/basicComponents";

import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/CategoryItem";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default class HomePage extends Component {
  render() {
    return (
      // Container keeps everthing within the nice spaced margins
      <Container>
        {/* Search bar is fixed to the top of the page as you scroll */}
        <SearchBar />

        <Row>
          <h2 style={{ paddingRight: "10px" }}>Company</h2>
          <ParaGrey>Please Select a Company</ParaGrey>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <CategoryItem company="amazon" />
          <CategoryItem company="facebook" />
          <CategoryItem company="netflix" />
          <CategoryItem company="google" />
          <CategoryItem company="more" />
        </Row>

        <Row>
          <h2 style={{ paddingRight: "10px" }}>Category</h2>
          <ParaGrey>Please Select a Category</ParaGrey>
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <CategoryItem company="shopping" />
          <CategoryItem company="payments" />
          <CategoryItem company="shipping" />
          <CategoryItem company="email" />
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
