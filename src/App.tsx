import "./App.css";
import { Route, BrowserRouter as Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import SpinningSword from "./pages/Games/SpinningSword/SpinningSword";
import BattleCity from "./pages/Games/BattleCity/BattleCity";
import SnailRace from "./pages/Games/SnailRace/SnailRace";
import NeonDesert from "./pages/Games/NeonDesert/NeonDesert";
import Blank from "./pages/Games/Blank/Blank";
import MetalSlug2 from "./pages/Games/MetalSlug2/MetalSlug2";
import Striker1945 from "./pages/Games/Striker1945/Striker1945";
import RedHand from "./pages/Games/RedHand/RedHand";
import BloodyRoar from "./pages/Games/BloodyRoar/BloodyRoar";
import Dinorex from "./pages/Games/Dinorex/Dinorex";
import DungeonsDragons from "./pages/Games/DungeonsDragons/DungeonsDragons";
import Gunbird from "./pages/Games/Gunbird/Gunbird";
import SnowBros from "./pages/Games/SnowBros/SnowBros";
import SnowBros2 from "./pages/Games/SnowBros2/SnowBros2";
import Tekken3 from "./pages/Games/Tekken3/Tekken3";
import Tengai from "./pages/Games/Tengai/Tengai";
import 천공대전 from "./pages/Games/천공대전/천공대전";
import BloodyRoar2 from "./pages/Games/BloodyRoar2/BloodyRoar2";
import MapleDS from "./pages/Games/MapleDS/MapleDS";
import DragonBallZ from "./pages/Games/DragonBallZ/DragonBallZ";
import PenguinBrothers2 from "./pages/Games/PenguinBrothers2/PenguinBrothers2";
import 샤오샤오4 from "./pages/Games/샤오샤오4/샤오샤오4";
import BubbleBubble from "./pages/Games/BubbleBubble/BubbleBubble";
import SuperBomberman from "./pages/Games/SuperBomberman/SuperBomberman";
import DemonFront from "./pages/Games/DemonFront/DemonFront";
import MetalSlug4 from "./pages/Games/MetalSlug4/MetalSlug4";
import Galaga from "./pages/Games/Galaga/Galaga";
import XevosShowdown from "./pages/Games/XevosShowdown/XevosShowdonw";
import 근육맨머슬태그매치 from "./pages/Games/근육맨머슬태그매치/근육맨머슬태그매치";
import Tanks from "./pages/Games/Tanks/Tanks";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      {/* Games */}
      <Route path="/Games/SpinningSword" Component={SpinningSword} />
      <Route path="/Games/BattleCity" Component={BattleCity} />
      <Route path="/Games/SnailRace" Component={SnailRace} />
      <Route path="/Games/NeonDesert" Component={NeonDesert} />
      <Route path="/Games/Blank" Component={Blank} />
      <Route path="/Games/MetalSlug2" Component={MetalSlug2} />
      <Route path="/Games/Striker1945" Component={Striker1945} />
      <Route path="/Games/RedHand" Component={RedHand} />
      <Route path="/Games/BloodyRoar" Component={BloodyRoar} />
      <Route path="/Games/Dinorex" Component={Dinorex} />
      <Route path="/Games/DungeonsDragons" Component={DungeonsDragons} />
      <Route path="/Games/Gunbird" Component={Gunbird} />
      <Route path="/Games/SnowBros" Component={SnowBros} />
      <Route path="/Games/SnowBros2" Component={SnowBros2} />
      <Route path="/Games/Tekken3" Component={Tekken3} />
      <Route path="/Games/Tengai" Component={Tengai} />
      <Route path="/Games/천공대전" Component={천공대전} />
      <Route path="/Games/BloodyRoar2" Component={BloodyRoar2} />
      <Route path="/Games/MapleDS" Component={MapleDS} />
      <Route path="/Games/DragonBallZ" Component={DragonBallZ} />
      <Route path="/Games/PenguinBrothers2" Component={PenguinBrothers2} />
      <Route path="/Games/샤오샤오4" Component={샤오샤오4} />
      <Route path="/Games/BubbleBubble" Component={BubbleBubble} />
      <Route path="/Games/SuperBomberman" Component={SuperBomberman} />
      <Route path="/Games/DemonFront" Component={DemonFront} />
      <Route path="/Games/MetalSlug4" Component={MetalSlug4} />
      <Route path="/Games/Galaga" Component={Galaga} />
      <Route path="/Games/XevosShowdown" Component={XevosShowdown} />
      <Route path="/Games/근육맨머슬태그매치" Component={근육맨머슬태그매치} />
      <Route path="/Games/Tanks" Component={Tanks} />
    </Routes>
  );
}

export default App;
