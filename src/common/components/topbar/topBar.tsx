import styled from "styled-components";
import banner from "../../../assets/image/banner.png";
import { NavLink } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  height: 50px;
  background-color: black;
  border-bottom: solid 3px yellow;
`;

const MeauBar = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 1%;
`;

const Banner = styled.img`
  height: 50px;
`;

const LinkBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  background-color: black;
  background-image: linear-gradient(to bottom, black, yellow);
`;

const TopBar = () => {
  return (
    <Background>
      <MeauBar>
        <Banner src={banner} alt="banner" />
        <LinkBox>
          <NavLink to="/" style={{ color: "#E6E6E6", fontWeight: "bold" }}>
            Home
          </NavLink>
        </LinkBox>

        <NavLink to="/about" style={{ color: "#E6E6E6", fontWeight: "bold" }}>
          About
        </NavLink>
      </MeauBar>
    </Background>
  );
};

export default TopBar;
// <div>
//   <NavLink to="/home">Home</NavLink>
//   <NavLink to="/about">About</NavLink>
// </div>
