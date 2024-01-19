import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const 천공대전 = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.miniplay.com/embed/etherena"
        title="천공대전"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default 천공대전;
