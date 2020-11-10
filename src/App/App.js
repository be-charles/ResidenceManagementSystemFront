import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import Home from '../Home';
import Apply from '../Apply';
import Residences from '../Residence/ReadResidences';
import CreateResidence from '../Residence/CreateResidence';
import Students from '../Students';
import Login from '../Auth/Login';
import NewPage from '../NewPage';
import axios from 'axios';
import Logout from '../Auth/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={props => (<Home  />)} />
          <Route path="/logout" exact render={props => (<Logout />)} />
          <Route path="/newpage" exact render={props => (<NewPage  />)} />
          <Route path="/login" exact render={props => (<Login  />)} />
          <Route path="/students" exact render={props => (<Students  />)} />
          <Route path="/apply" exact render={props => (<Apply  />)} />
          <Route path="/residence" exact render={props => (<Residences  />)} />
          <Route path="/residence/create" exact render={props => (<CreateResidence  />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
