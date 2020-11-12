import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import Home from '../Home';
import Apply from '../Apply';
import MyProfile from '../MyProfile/MyProfile';
import Residences from '../Residence/ReadResidences';
import CreateResidence from '../Residence/CreateResidence';
import Students from '../Students';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ExamplePage from '../ExamplePage';
import MyResidence from'../MyResidence';
import StaffQuery from'../StaffQuery';
import LogQuery from '../LogQuery';
import HouseRules from '../HouseRules';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={props => (<Home  />)} />
          <Route path="/MyResidence" exact render={props => (<MyResidence  />)} />
          <Route path="/examplepage" exact render={props => (<ExamplePage  />)} />
          <Route path="/logout" exact render={props => (<Logout />)} />
          <Route path="/login" exact render={props => (<Login  />)} />
          <Route path="/students" exact render={props => (<Students  />)} />
          <Route path="/apply" exact render={props => (<Apply  />)} />
          <Route path="/myprofile" exact render={props => (<MyProfile  />)} />
          <Route path="/residence" exact render={props => (<Residences  />)} />
          <Route path="/residence/create" exact render={props => (<CreateResidence  />)} />
          <Route path="/logquery" exact render={props => (<LogQuery  />)} />
          <Route path="/houserules" exact render={props => (<HouseRules  />)} />
          <Route path="/StaffQuery" exact render={props => (<StaffQuery  />)} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
