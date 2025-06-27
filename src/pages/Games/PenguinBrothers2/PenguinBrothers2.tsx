import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const PenguinBrothers2 = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.retrogames.cc/embed/9447-penguin-brothers-japan.html"
        title="PenguinBrothers2"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </Background>
  );
};
export default PenguinBrothers2;
