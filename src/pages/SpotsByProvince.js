import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Location from "../components/Location";

import myData from "../data/myData";

export default function SpotstByProvince({ locations, loggedIn, match }) {
  const [province, setProvince] = useState(null);
  const [stateLocations, setStateLocations] = useState([]);
  useEffect(() => {
    setProvince(match.params.name.replace("-", " "));
    if (locations) {
      setStateLocations(
        locations.filter(
          (i) => i.province === match.params.name.replace("-", " ")
        )
      );
      console.log(locations.filter((i) => i.province === match.params.name));
    }
  }, [locations, match.params.name]);

  return (
    <OuterContainer>
      <Sidebar myData={myData} />
      <MainSection>
        <Heading>{province}</Heading>
        {stateLocations.map((location) => (
          <Link to="/locationdetails" key={location.id}>
            <Location
              image={location.image}
              name={location.name}
              address={location.address}
              divetype={location.divetype}
              depth={location.depth}
              sight={location.sight}
            />
          </Link>
        ))}
      </MainSection>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  padding-left: 393px;
  margin-bottom: 88px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

const Heading = styled.h1`
  text-align: center;
  font: normal normal normal 57px/61px "Big Shoulders Display";
  margin-bottom: 88px;
  text-transform: capitalize;
`;
