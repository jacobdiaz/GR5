import React, { Component } from "react";
import BackComponent from "../components/BackComponent";
import LanguageDropDown from "../components/LanguageDropDown";
import SearchBar from "../components/SearchBar";
import SearchResultCard from "../components/SearchResultCard";
import { Container } from "../components/StyledComponents/basicComponents";
import data from "../mockData/data.json";

export default function SearchResultPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Grab from url
  const input = urlParams.get("input");

  return (
    <Container>
      <SearchBar />
      <BackComponent />
      <LanguageDropDown />
      <h1>
        Search Results for "<span style={{ fontStyle: "italic" }}>{input}</span> "
      </h1>
      <SearchResultCard company={data[0].company} title={data[0].title} paragraph={data[0].description} video={data[0].videoSrc} />
      <SearchResultCard company={data[0].company} title={data[1].title} paragraph={data[1].description} video={data[1].videoSrc} />
      <SearchResultCard company={data[0].company} title={data[2].title} paragraph={data[2].description} video={data[2].videoSrc} />
      <SearchResultCard company={data[0].company} title={data[3].title} paragraph={data[3].description} video={data[3].videoSrc} />
    </Container>
  );
}
