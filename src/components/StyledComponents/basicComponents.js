import styled from "styled-components";

//#region Tutorial Video Player Components

const VideoPlayer = styled("div")`
  width: 100%;
  height: 500px;
  background-color: #000;
`;

const VideoPlayerContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

const Container = styled("div")`
  padding: 5vw;
`;

const CardRowContainer = styled("div")`
  display: flex;
  flex-direction: Row;
  width: 100%;
  height: 400px;
  justify-content: space-between;
`;
// The card on bottom left
const TranscriptCard = styled("div")`
  width: 60%;
  background-color: green;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

// The card on bottom right
const VideoTitleDescCard = styled("div")`
  width: 30%;
  background-color: blue;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const GreyButton = styled("button")`
  background-color: #838383;
  padding: 12px;
  color: white;
  border: none
  outline: none;
  decoration: none;
  border-decoration: none!important;
  border-radius: 5px;
  width: 100%;
  text-decoration: none!important;

  :hover {
    cursor: pointer;
  }
`;

//#endregion
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { Row, VideoPlayer, VideoPlayerContainer, Container, CardRowContainer, TranscriptCard, VideoTitleDescCard, GreyButton };
