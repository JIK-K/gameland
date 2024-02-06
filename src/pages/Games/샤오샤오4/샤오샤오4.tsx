import React from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const 샤오샤오4 = () => {
  return (
    <Background>
      <TopBar />
      <iframe
        src="https://www.miniplay.com/helpers/game/sandbox.php?mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=871&mp_game_uid=xiaoxiao-04&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fembed%2Fxiaoxiao-04&mp_int=1&mp_locale=en_US&mp_player_type=FLASH&mp_player_url=aHR0cHM6Ly93d3cubWluaWp1ZWdvc2dyYXRpcy5jb20vZmxhc2gxMjM0L25vX2hvdGxpbmsveGlhbzA0LnN3Zg%3D%3D&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=Asia%2FSeoul&mp_view_type="
        title="샤오샤오4"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Background>
  );
};
export default 샤오샤오4;
