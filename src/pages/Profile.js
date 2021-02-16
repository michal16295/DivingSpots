import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../actions/user.action";
import Sidebar from "../components/Sidebar";

export default function Profile(props) {
  const { myData, setLoggedIn, setLoginScreen, loggedIn } = props;

  return (
    <Outer>
      <Sidebar
        setLoginScreen={setLoginScreen}
        myData={myData}
        loggedIn={loggedIn}
      />
      <MainOuter>
        <Heading>Mijn Profiel</Heading>
        <Main>
          <AddressInfoContainer>
            <AddressInfo>
              <PrimaryText>Naam</PrimaryText>
              <SecondryText>{myData.name}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Email</PrimaryText>
              <SecondryText>{myData.email}</SecondryText>
            </AddressInfo>

            <AddressInfo>
              <PrimaryText>Favorieten</PrimaryText>
              <SecondryText>{myData.favorites}</SecondryText>
            </AddressInfo>
          </AddressInfoContainer>
        </Main>

        <Link to="/" onClick={logout}>
          <Button>Uitloggen</Button>
        </Link>
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
  padding: 20px;
`;

const AddressInfoContainer = styled.div`
  width: 100%;
  min-width: 350px;
`;

const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const PrimaryText = styled.p`
  font: normal normal bold 25px/26px "Big Shoulders Display";
  flex: 0 0 40%;
`;
const SecondryText = styled.p`
  font: normal normal normal 25px/26px "Big Shoulders Display";
  flex: 0 0 60%;
`;

const Button = styled.button`
  width: 248px;
  height: 45px;
  background: #f7f5fb 0% 0% no-repeat padding-box;
  border: none;
  margin-top: 40px;
  box-sizing: border-box;
  font: normal normal normal 25px/26px "Big Shoulders Display";
`;
