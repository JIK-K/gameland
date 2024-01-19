import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  border: solid black 3px;
  margin: 1px;
  position: relative;
  cursor: pointer;
  &:hover {
    border: solid red 3px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameDescription = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const Banner = styled.img`
  width: 200px;
  height: 150px;
  object-fit: fit;
`;

interface Props {
  gameName: string;
  img: string;
}

const GameBox = (props: Props) => {
  const { gameName } = props;

  return (
    <Link to={`/Games/${gameName}`}>
      <Background>
        <Banner
          src={`${process.env.PUBLIC_URL}/img/${gameName}.png`}
          alt="banner"
        />
        <Body>
          <GameDescription>{gameName}</GameDescription>
        </Body>
      </Background>
    </Link>
  );
};

export default GameBox;
