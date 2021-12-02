import React, { useEffect } from "react";
import TutorialTextCard from "../components/TutorialTextCard";
import { ParaGrey } from "../components/StyledComponents/textComponents";
import { Container, Row } from "../components/StyledComponents/basicComponents";
import LanguageDropDown from "../components/LanguageDropDown";
import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/CategoryItem";
import data from "../mockData/data.json";
export default function TutorialVideoPage() {
  // Reset the scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render all tutorials
  function renderCards() {
    let cards = [];

    // Create a random permutation of nums
    var nums = [1, 2, 3, 4, 5, 6, 7, 8],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }

    // Loop through those random numbers and create Cards
    for (let i = 0; i < ranNums.length; i++) {
      let index = ranNums[i];
      cards.push(
        <TutorialTextCard
          company={data[index].company}
          title={data[index].title}
          description={data[index].description}
          video={data[index].videoSrc}
        />
      );
    }

    // Return jsx of card elements
    return cards;
  }
  return (
    // Container keeps everthing within the nice spaced margins
    <Container>
      {/* Search bar is fixed to the top of the page as you scroll */}
      <SearchBar placeholder="Enter Company Name or Type of Tutorial You Need..." />

      <LanguageDropDown />

      <h2>Step-by-step Instructions</h2>
      <h4>1) Choose the Company you need help with</h4>
      <h4>2) Then choose the the Category of services you might need help with for that Company</h4>
      <h4>OR Just type it in the search bar!</h4>

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

      <h2>Tutorials</h2>
      {/* Todo populate a list of tutorial cards */}

      {renderCards()}
    </Container>
  );
}
