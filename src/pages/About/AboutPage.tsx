import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Body = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
`;

const AboutPage: React.FC = () => {
  const [borderColor, setBorderColor] = useState<string>("red");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBorderColor(randomColor);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const iframeGridGame = () => {
    return {
      __html: `<iframe src="./one.html" width="1000px" height="100%"></iframe>`,
    };
  };

  return (
    <Background style={{ border: `5px dashed ${borderColor}` }}>
      <TopBar />
      <Body>
        <div dangerouslySetInnerHTML={iframeGridGame()} />
      </Body>
    </Background>
  );
};

export default AboutPage;
