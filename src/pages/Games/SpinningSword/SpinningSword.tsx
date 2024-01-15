import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #228be6;
`;

const SpinningSword = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://falcon5077.github.io/WebglTest/SpinningSword/index.html"
        title="SpinningSword"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default SpinningSword;
