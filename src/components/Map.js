import React from "react";
import styled from "styled-components";

export default function Map({ mapUrl }) {
  const uri =
    "http://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=1%20Gooimeer&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  return (
    <StyledMapContainer
      title="Map"
      width="100%"
      height="250"
      frameBorder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src={uri}
    ></StyledMapContainer>
  );
}

const StyledMapContainer = styled.iframe`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;
