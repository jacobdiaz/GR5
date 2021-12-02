import React from "react";
import { GreyButton } from "./StyledComponents/basicComponents";
import { ParaGrey } from "./StyledComponents/textComponents";
import styled from "styled-components";

import CompanyIcon from "./CompanyIcon";

export default function TutorialTextCard({ title, description, company }) {
  const TutorialCard = styled("div")`
    background-color: white;
    padding: 25px;
    border-radius: 10px;
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
      <GreyButton>View Tutorial</GreyButton>
    </TutorialCard>
  );
}
