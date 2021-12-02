import React from "react";
import LanguageDropDown from "./LanguageDropDown";
// Import the styled components
import {
  VideoPlayerContainer,
  VideoPlayer,
  CardRowContainer,
  TranscriptCard,
  VideoTitleDescCard,
  GreyButton,
} from "./StyledComponents/basicComponents";

export default function TutorialVideoPlayer() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Grab from url
  const tit = urlParams.get("title");
  const des = urlParams.get("description");
  const com = urlParams.get("company");
  const src = urlParams.get("video");

  return (
    <div>
      <LanguageDropDown />
      <h1>{tit}</h1>
      <VideoPlayerContainer>
        <VideoPlayer>
          {/* videoSrc is the url of the video */}
          <iframe width="100%" height="100%" src={src}></iframe>
        </VideoPlayer>
        <div></div>
      </VideoPlayerContainer>

      {/* Bellow the video cards */}
      <CardRowContainer>
        <TranscriptCard>
          <h2>Transcript</h2>
          {/* This is placeholder text for the the transcript */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            viverra ipsum nunc aliquet bibendum enim facilisis. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Faucibus
            et molestie ac feugiat sed lectus. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. A lacus
            vestibulum sed arcu non odio euismod. Convallis a cras semper auctor neque vitae. Accumsan in nisl nisi scelerisque eu ultrices
            vitae auctor. Non tellus orci ac auctor. Proin sagittis nisl rhoncus mattis rhoncus. Semper auctor neque vitae tempus quam
            pellentesque nec. Arcu odio ut sem nulla pharetra diam sit. Pretium vulputate sapien nec sagittis aliquam malesuada. Nulla at
            volutpat diam ut. Congue eu consequat ac felis donec et. Nunc faucibus a pellentesque sit amet. Maecenas sed enim ut sem viverra
            aliquet eget sit amet. Vestibulum lorem sed risus ultricies tristique nulla. Ipsum a arcu cursus vitae congue mauris rhoncus
            aenean vel.
          </p>
        </TranscriptCard>
        <VideoTitleDescCard>
          <h2>{tit}</h2>
          <p>{des}</p>
          <GreyButton> Go to {com}.com </GreyButton>
        </VideoTitleDescCard>
      </CardRowContainer>
    </div>
  );
}
