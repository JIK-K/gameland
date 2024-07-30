import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TopBar from "../../common/components/topbar/topBar";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Body = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
    <>
      <GlobalStyle />
      <Background style={{ border: `5px dashed ${borderColor}` }}>
        <TopBar />
        <Body>
          <div
            dangerouslySetInnerHTML={iframeGridGame()}
            style={{
              display: "flex",
              height: "100%",
            }}
          />
        </Body>
      </Background>
    </>
  );
};

export default AboutPage;
