import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import logo from "../assets/images/logo-digidivespot-horiz-white.png";

export default function Sidebar(props) {
  const { myData } = props;
  const { loggedIn } = useContext(UserContext);
  const navItems = [
    {
      title: "Alle locaties",
      href: "alle-locaties",
    },
    {
      title: "Noord Holland",
      href: "Noord-Holland",
    },
    {
      title: "Zuid-Holland",
      href: "Zuid-Holland",
    },
    {
      title: "Zeeland",
      href: "Zeeland",
    },
    {
      title: "Noord-Brabant",
      href: "Noord-Brabant",
    },
    {
      title: "Utrecht",
      href: "Utrecht",
    },
    {
      title: "Flevoland",
      href: "Flevoland",
    },
    {
      title: "Friesland",
      href: "Friesland",
    },
    {
      title: "Groningen",
      href: "Groningen",
    },
    {
      title: "Overijssel",
      href: "Overijssel",
    },
    {
      title: "Gelderland",
      href: "Gelderland",
    },
    {
      title: "Limburg",
      href: "Limburg",
    },
  ];

  return (
    <SidebarContainer>
      <Link to="/" style={{ display: "block", textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ width: "80%" }} />
      </Link>
      <ListContainer>
        {loggedIn && (
          <ListItem>
            <Link to="/mijn-locaties">Mijn locaties</Link>
          </ListItem>
        )}
        {navItems.map((navItem) => (
          <ListItem key={navItem.href}>
            {navItem.href !== "alle-locaties" ? (
              <Link to={`/province/${navItem.href}`}>{navItem.title}</Link>
            ) : (
              <Link to={`/alle-locaties`}>{navItem.title}</Link>
            )}
          </ListItem>
        ))}
      </ListContainer>

      {loggedIn ? (
        <Link to="/profiel" style={{ textAlign: "center" }}>
          <Button>{myData.name}</Button>
        </Link>
      ) : (
        <Link to="/" style={{ textAlign: "center" }}>
          <Button>Inloggen</Button>
        </Link>
      )}
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 393px;
  background: #313638 0% 0% no-repeat padding-box;
  box-shadow: 7px 0px 10px #00000029;
  height: 100vh;
  padding: 20px;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ListContainer = styled.ul`
  list-style: none;
  margin-left: 0;
  padding: 0;
  margin-top: -20px;
`;

const ListItem = styled.li`
  text-align: center;
  font: normal normal normal 25px/26px "Big Shoulders Display";
  margin-top: 20px;

  a {
    color: #fff !important;
  }
`;

const Button = styled.button`
  width: 248px;
  height: 45px;
  font: normal normal normal 25px/26px "Big Shoulders Display";
`;
