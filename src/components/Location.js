import React from 'react';
import styled from 'styled-components';

export default function Location(props) {
  const { image, name, address, divetype, depth, sight, onClick } = props;

  return (

    <OuterContainer onClick={onClick}>
      <Img src={image} alt={name} width="330" height="330" />

      <AddressInfoContainer>
        <AddressInfo>
          <PrimaryText>Naam</PrimaryText>
          <SecondryText>{name}</SecondryText>
        </AddressInfo>

        <AddressInfo>
          <PrimaryText>Adres</PrimaryText>
          <SecondryText>{address}</SecondryText>
        </AddressInfo>

        <AddressInfo>
          <PrimaryText>Duiksoort</PrimaryText>
          <SecondryText>{divetype}</SecondryText>
        </AddressInfo>

        <AddressInfo>
          <PrimaryText>Diepte</PrimaryText>
          <SecondryText>{depth}</SecondryText>
        </AddressInfo>

        <AddressInfo>
          <PrimaryText>Zicht</PrimaryText>
          <SecondryText>{sight}</SecondryText>
        </AddressInfo>
      </AddressInfoContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  margin-top: 20px;
  background: #f7f5fb 0% 0% no-repeat padding-box;
  width: calc((100vw - 340px) * 0.8);
`;

const AddressInfoContainer = styled.div`
  width: 100%;
  margin: 20px;
  padding-bottom: 20px;
`;

const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const PrimaryText = styled.p`
  font: normal normal bold 25px/26px 'Big Shoulders Display';
  flex: 0 0 30%;
`;

const SecondryText = styled.p`
  font: normal normal normal 25px/26px 'Big Shoulders Display';
  flex: 0 0 70%;
`;

const Img = styled.img`
  width: 330px;
`;
