import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";

import { FaHome, FaMap, FaTable } from 'react-icons/fa';

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import TableScreen from './screens/TableScreen'


function App() {
    return (
      <div className="App">
          <Router>
              <div className="nav">
                      <NavLink className="navItem" activeClassName="activeItem" to="/home">
                          <span className="navItemIcon"><FaHome /></span>
                          <span className="navItemLabel">Accueil</span>
                      </NavLink>
                      <NavLink className="navItem" activeClassName="activeItem"  to="/map">
                          <span className="navItemIcon"><FaMap /></span>
                          <span className="navItemLabel">Carte</span>
                      </NavLink>
                      <NavLink className="navItem" activeClassName="activeItem"  to="/table">
                          <span className="navItemIcon"><FaTable /></span>
                          <span className="navItemLabel">Chantiers</span>
                      </NavLink>
              </div>
              <div className="main">
                  <div className="container">
                      <Switch>
                          <Route exact path="/">
                              <Redirect to="/home" />
                          </Route>
                          <Route exact path="/home">
                              <HomeScreen />
                          </Route>
                          <Route path="/map">
                              <MapScreen />
                          </Route>
                          <Route path="/table">
                              <TableScreen />
                          </Route>
                      </Switch>
                  </div>
              </div>
          </Router>
      </div>
  );
}

export default App;
