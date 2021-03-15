import logo from "./logo.svg";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NoMatch from "./components/pages/404";
import About from "./components/pages/About";
import "./materialize.css";
import WR from "./components/pages/WR";
import GamesPage from "./components/pages/GamesPage";
import Feedback from "./components/pages/feedback";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />
          <Route path="/games/winrun" component={WR} />
          <Route path="/games" component={GamesPage} />
          <Route path="/feedback" component={Feedback}/>
          <Route path="/profile" />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
