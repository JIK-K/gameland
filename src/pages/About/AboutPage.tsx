import React from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #228be6;
`;

const AboutPage = () => {
  return (
    <Background>
      <TopBar />
      <div>About yaya</div>
    </Background>
  );
};
export default AboutPage;
