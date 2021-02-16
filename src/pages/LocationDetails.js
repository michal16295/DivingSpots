import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

export default function LocationDetails(props) {
  const { location, setLoginScreen, myData } = props;

  console.log(location.maps);
  return (
    <Outer>
      <Sidebar setLoginScreen={setLoginScreen} myData={myData} />
      <MainOuter>
        <Heading>{location.name}</Heading>
        <Main>
          <Map mapUrl={location.maps} />
          <AddressInfoContainer>
            <AddressInfo>
              <PrimaryText>Naam</PrimaryText>
              <SecondryText>{location.name}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Adres</PrimaryText>
              <SecondryText>{location.address}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Duiksoort</PrimaryText>
              <SecondryText>{location.divetype}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Diepte</PrimaryText>
              <SecondryText>{location.depth}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Zicht</PrimaryText>
              <SecondryText>{location.sight}</SecondryText>
            </AddressInfo>

            <DescriptionContainer>
              <PrimaryText>Overige informatie</PrimaryText>
              <Description>{location.description}</Description>
            </DescriptionContainer>
          </AddressInfoContainer>
        </Main>
      </MainOuter>
    </Outer>
  );
}

const Outer = styled.div`
  display: flex;
`;

const MainOuter = styled.div`
  width: 100%;
  padding-left: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 88px;
`;

const Heading = styled.h1`
  text-align: center;
  font: normal normal normal 57px/61px "Big Shoulders Display";
  margin-bottom: 88px;
`;

const Main = styled.div`
  width: calc((100vw - 340px) * 0.8);
  background: #f7f5fb 0% 0% no-repeat padding-box;
`;

const AddressInfoContainer = styled.div`
  min-width: 350px;
  margin: 20px;
`;

const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PrimaryText = styled.p`
  font: normal normal bold 25px/26px "Big Shoulders Display";
  flex: 0 0 40%;
`;
const SecondryText = styled.p`
  font: normal normal normal 25px/26px "Big Shoulders Display";
  flex: 0 0 60%;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;
const Description = styled.p`
  font: normal normal normal 25px/26px "Big Shoulders Display";
  margin-top: 20px;
`;
