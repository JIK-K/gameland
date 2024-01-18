import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const MetalSlug2 = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.retrogames.cc/embed/33883-metal-slug-2-turbo-ngm-9410.html"
        title="MetalSlug2"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default MetalSlug2;
