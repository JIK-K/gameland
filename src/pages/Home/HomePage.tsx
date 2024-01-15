import React from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const HomePage = () => {
  return (
    <Background>
      <TopBar />
    </Background>
  );
};
export default HomePage;
