import React from "react";
import { GreyButton, Row } from "./StyledComponents/basicComponents";
import { ParaGrey } from "./StyledComponents/textComponents";
import styled from "styled-components";

import CompanyIcon from "./CompanyIcon";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
export default function TutorialTextCard({ title, description, company }) {
  const TutorialCard = styled("div")`
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 25px;
  `;
  return (
    <TutorialCard>
      {/* Title and image */}
      <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
        <h2>{title}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ParaGrey style={{ paddingRight: "10px" }}> {company}</ParaGrey>
          <CompanyIcon company={company} size="25px" />
        </div>
      </div>
      {/* Description and the button */}
      <p>{description}</p>
      <Row style={{ alignItems: "space-between" }}>
        <div style={{ width: "70%", paddingRight: "10px" }}>
          <GreyButton>View Tutorial</GreyButton>
        </div>

        <div style={{ width: "25%" }}>
          <GreyButton style={{ alignItems: "center", backgroundColor: "white", color: "black" }}>
            <BookmarkAddIcon style={{ fontSize: "20px" }} />
            Save Tutorial
          </GreyButton>
        </div>
      </Row>
    </TutorialCard>
  );
}
