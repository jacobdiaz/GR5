import React from "react";
import TutorialVideoPlayer from "../components/TutorialVideoPlayer";
import BackComponent from "../components/BackComponent";
import { Container } from "../components/StyledComponents/basicComponents";
import SearchBar from "../components/SearchBar";

export default function TutorialVideoPage({ title, description, videoSrc, company }) {
  return (
    <Container>
      <SearchBar placeholder="Enter Company Name or Type of Tutorial You Need..." />
      <BackComponent />
      <TutorialVideoPlayer
        title="How to create a new Amazon Account"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        videoSrc="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
        company="Amazon"
      />
      <h1>Related Videos</h1>
    </Container>
  );
}
