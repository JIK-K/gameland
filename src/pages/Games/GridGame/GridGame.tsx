import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const GridGame = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://JIK-K.github.io/GridGame/"
        title="GridGame"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default GridGame;
