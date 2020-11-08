import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import Home from '../Home';
import Apply from '../Apply';
import Residences from '../Residence/ReadResidences';
import CreateResidence from '../Residence/CreateResidence';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apply" exact component={Apply} />
          <Route path="/residence" exact component={Residences} />
          <Route path="/residence/create" exact component={CreateResidence} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
