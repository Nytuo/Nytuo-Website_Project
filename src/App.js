import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/404";
import About from "./components/pages/About";
import WR from "./components/pages/WR";
import GamesPage from "./components/pages/GamesPage";
import Feedback from "./components/pages/Feedback";
import Softwares from "./components/pages/Softwares";
import NytuoLauncher from "./components/pages/NytuoLauncher";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import VITF from "./components/pages/VITF";
import Privacy from "./components/pages/Privacy";
import Help from "./components/pages/Help";
import TTD from "./components/pages/TTD";
import AE from "./components/pages/AE";
import FWD from "./components/pages/FWD";
import LA from "./components/pages/LA";
import LAATIM from "./components/pages/LAATIM";
import SF from "./components/pages/SF";
import SFO from "./components/pages/SFO";
import SGB from "./components/pages/SGB";
import SNRE from "./components/pages/SN";
import TB from "./components/pages/TB";
import React from "react";
import Profile from "./components/pages/Profile";
import FirebaseConnexion from "./FirebaseConnexion";
import store from "./components/pages/store";
import ModModal from "./components/ModModal";
import './bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <FirebaseConnexion />
        <ModModal />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />
          <Route path="/winrun" component={WR} />
          <Route path="/vincentInTheForest" component={VITF} />
          <Route path="/games" component={GamesPage} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/softwares" component={Softwares} />
          <Route path="/nytuo-launcher" component={NytuoLauncher} />
          <Route path="/TAC" component={TermsAndConditions} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/help" component={Help} />
          <Route path="/theTardisDefender" component={TTD} />
          <Route path="/asteroidEscape" component={AE} />
          <Route path="/fireWallDefender" component={FWD} />
          <Route path="/lutinAdventure" component={LA} />
          <Route path="/legendAdventureAndTheInfernalMaze" component={LAATIM} />
          <Route path="/shootFighter" component={SF} />
          <Route path="/shootFighterOrigins" component={SFO} />
          <Route path="/superGeoffreyBros" component={SGB} />
          <Route path="/sansNomReedition" component={SNRE} />
          <Route path="/tanksBattle" component={TB} />
          <Route path="/store" component={store} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
