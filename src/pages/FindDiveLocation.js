import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Location from '../components/Location';

export default function FindDiveLocation(props) {
  const { locations, setLocation, setLoginScreen, myData, loggedIn } = props;

  return (
    <OuterContainer>
      <Sidebar
        setLoginScreen={setLoginScreen}
        myData={myData}
        loggedIn={loggedIn}
      />
      <MainSection>
        <Heading>Overzicht duiklocaties</Heading>

        {locations && locations.map((location, index) => (
          <Link to="/locationdetails" key={index}>
            <Location
              image={location.image}
              name={location.name}
              address={location.address}
              divetype={location.divetype}
              depth={location.depth}
              sight={location.sight}
              onClick={() => setLocation(index)}
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
  font: normal normal normal 57px/61px 'Big Shoulders Display';
  margin-bottom: 88px;
`;
