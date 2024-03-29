import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topbar/topBar";
import GameBox from "../../common/components/gameBox/gameBox";
import gameNames from "../../data/gameData";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Body = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 1%;
  padding: 15px;
`;

const HomePage = () => {
  const [borderColor, setBorderColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBorderColor(randomColor);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <Background style={{ border: `5px dashed ${borderColor}` }}>
      <TopBar />
      <Body>
        {gameNames.map((gameName, index) => (
          <GameBox gameName={gameName} img={gameName} key={index} />
        ))}
      </Body>
    </Background>
  );
};

export default HomePage;
