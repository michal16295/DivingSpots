import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout } from "../actions/user.action";
import logo from "../assets/images/logo-digidivespot-square-white.png";
import background from "../assets/images/snorkeling.jpg";
import { UserContext } from "../context/UserContext";

export default function Home(props) {
  const { loginScreen, setLoginScreen } = props;
  const { loggedIn } = useContext(UserContext);
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    if (formData.username === "" || formData.password === "") {
      setError("All fields are required");
    } else {
      const response = login(formData);
      if (!response) {
        setError("Invalid username or password");
      } else window.location = "/alle-locaties";
    }
  };
  return (
    <StyledHome>
      <MainContent>
        <Heading>FIND YOUR PERFECT DIVE SPOT</Heading>
        <div>{error}</div>
        {loginScreen && !loggedIn ? (
          <FormContainer>
            <Input1
              name="username"
              value={formData.username}
              onChange={handelChange}
            />
            <Input2
              name="password"
              value={formData.password}
              onChange={handelChange}
            />

            <Link to="mijn-locaties" onClick={handleLogin}>
              <Button>Inloggen</Button>
            </Link>
          </FormContainer>
        ) : (
          <ButtonContainer>
            <Link to="/alle-locaties">
              <Button>Zoeken</Button>
            </Link>
            {loggedIn ? (
              <Button onClick={logout}>Uitloggen</Button>
            ) : (
              <Button onClick={() => setLoginScreen(true)}>Inloggen</Button>
            )}
          </ButtonContainer>
        )}
      </MainContent>
      <LogoContainer>
        <Img />
      </LogoContainer>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  font: normal normal normal 80px/85px "Big Shoulders Display";
  margin-bottom: 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 110px;
`;

const ButtonContainer = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #313638;
  border: none;
  margin-top: 20px;
  color: white;
  font: normal normal normal 25px/26px "Big Shoulders Display";
  box-sizing: border-box;
`;

const Input1 = styled.input.attrs({
  placeholder: "Gebruikersnaam",
})`
  width: 248px;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-left: 20px;
  box-sizing: border-box;
`;

const Input2 = styled.input.attrs({
  placeholder: "Wachtwoord",
})`
  width: 248px;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-left: 20px;
  margin-top: 7px;
  box-sizing: border-box;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Img = styled.img.attrs({
  src: logo,
})`
  width: 170px;
  height: 170px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 13px;
  left: 38px;
`;

const LogoText = styled.p`
  font: normal normal normal 26px/39px "Big Shoulders Display";
  color: #ffffff;
`;
