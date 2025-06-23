import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const Tanks = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.crazygames.co.kr/embed/tanks"
        title="Tanks"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default Tanks;
