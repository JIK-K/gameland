import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const Galaga = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.retrogames.cc/embed/17653-galaga-demons-of-death-usa.html"
        title="Gunbird"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default Galaga;
