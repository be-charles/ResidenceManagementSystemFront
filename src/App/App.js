import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import Home from '../Home';
import Apply from '../Apply';
import Residences from '../Residence/ReadResidences';
import CreateResidence from '../Residence/CreateResidence';
import Students from '../Students';
import Login from '../Auth/Login';
import axios from 'axios';

function App() {
  const [loginStatus, setLoginStatus] = useState('CHECKING');

  const checkLoginStatus = () => {
    axios.get("http://localhost:8080", { withCredentials: true })
      .then(response => {
        console.log("RESPONSE: " + response);
        if (response.status == 200) setLoginStatus('LOGGED_IN');
        else setLoginStatus('LOGGED_OUT');
      })
      .catch(error => {
        if (error.response.status == 401) {
          setLoginStatus('LOGGED_OUT');
        } else console.log("CHECKING LOGIN STATUS ERROR: " + error);
      })
  }

  useEffect(() => { checkLoginStatus(); });

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={props => (<Home {...props} loginStatus={loginStatus} />)} />
          <Route path="/login" exact render={props => (<Login {...props} />)} />
          <Route path="/students" exact render={props => (<Students {...props} loginStatus={loginStatus} />)} />
          <Route path="/apply" exact render={props => (<Apply {...props} loginStatus={loginStatus} />)} />
          <Route path="/residence" exact render={props => (<Residences {...props} loginStatus={loginStatus} />)} />
          <Route path="/residence/create" exact render={props => (<CreateResidence {...props} loginStatus={loginStatus} />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
