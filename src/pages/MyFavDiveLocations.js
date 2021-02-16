import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Location from '../components/Location';

import myData from '../data/myData';

export default function MyFavDiveLocations(props) {
  const { locations, setLocation, setLoginScreen, myData, loggedIn } = props;

    let myFavDivespots = locations.filter(function(location){
        return myData.favorites.indexOf(location.id) > -1;
    });
    console.log(myFavDivespots)


  return (
    <OuterContainer>
      <Sidebar
        setLoginScreen={setLoginScreen}
        myData={myData}
        loggedIn={loggedIn}
      />
      <MainSection>
        <Heading>Mijn Duiklocaties</Heading>
        {myFavDivespots.map((location) => (
          <Link to="/locationdetails" key={location.id}>
            <Location
              image={location.image}
              name={location.name}
              address={location.address}
              divetype={location.divetype}
              depth={location.depth}
              sight={location.sight}
              onClick={() => setLocation(location.id)}
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
