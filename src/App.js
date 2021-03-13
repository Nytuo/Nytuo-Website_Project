import logo from './logo.svg';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import NoMatch from './components/pages/404';

function App() {
  return (
      <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Games" component={Games}/>
            <Route path="*" component={NoMatch}/>
      </Switch>
      </Router>
      </>
  );
}

export default App;
