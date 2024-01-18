import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const SnailRace = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://html-classic.itch.zone/html/4969206/index.html"
        title="SnailRace"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default SnailRace;
