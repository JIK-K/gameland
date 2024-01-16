import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topBar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Body = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1%;
  padding: 15px;
`;

const AboutPage = () => {
  const [borderColor, setBorderColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBorderColor(randomColor);
    }, 500);

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
      <Body></Body>
    </Background>
  );
};
export default AboutPage;
