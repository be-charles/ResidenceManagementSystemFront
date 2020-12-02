import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header';
import Home from '../Home';
import Apply from '../Apply';
import MyProfile from '../MyProfile/MyProfile';
import MyProfileStaff from '../MyProfile/MyProfileStaff';
import Residences from '../Residence/ReadResidences';
import CreateResidence from '../Residence/CreateResidence';
import Students from '../Students';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ExamplePage from '../ExamplePage';
import MyResLogin from '../Auth/MyResLogin';
import StaffQuery from '../StaffQuery';
import LogQuery from '../LogQuery';
import HouseRules from '../HouseRules';
import FAQ from '../FAQ';
import ManageResidences from '../ManageResidences';

import CreateResRoom from '../ManageResidence/CreateResRoom';
import CraeteStudent from '../ManageResidence/CreateStudent'
import CreateCityEdgeResRoom from '../ManageResidence/CreateCityEdgeResRoom';
import CreateResidenceHanover from '../ManageResidence/CreateCityEdgeResRoom'
import UpdateCatsvilleResRoom from '../ManageResidence/UpdateCatsvilleResRoom';
import UpdateStudent from '../ManageResidence/UpdateStudents'

import ManageStudents from '../ManageStudents';
import CityEdgeResidence from '../CityEdgeResidence';
import HanovorResince from '../HanovorResince';
import CatsvilleResidence from '../CatsvilleResidence';
import ManageStaff from '../ManageStaff';
import StaffQueryResponse from '../StaffQueryResponse';


function App() {
  //LOGIN CHECK
  const [loginInfo, setLoginInfo] = useState({"loggedIn": "false", "role": "0"});

  const loginCheck = () => {
    console.log('LOGIN CHECK')
    axios.get("http://localhost:8080", { withCredentials: true })
      .then(response => {
        if(response.status !== 401)
        setLoginInfo({"loggedIn": "true", "role": response.data})
      })
      .catch(error => {
       return setLoginInfo({"loggedIn": "false", "role": "0"})
      })
  }

  useEffect(() => {
    loginCheck();
  }, []);

  console.log(loginInfo);
  return (
    <Router>
      <div className="App">
        <Header loginInfo={loginInfo} />
        <Switch>
          <Route path="/" exact render={props => (<Home />)} />
          <Route path="/myres/login" exact render={props => (<Login />)} />
          <Route path="/logout" exact render={props => (<Logout />)} />
          <Route path="/faq"exact render={props => (<FAQ />)} />

          <Route path="/myres" exact render={props => (<MyResLogin />)} />
          <Route path="/apply" exact render={props => (<Apply />)} />
          <Route path="/staffquery" exact render={props => (<StaffQuery />)} />
          <Route path="/logquery" exact render={props => (<LogQuery />)} />
          <Route path="/houserules" exact render={props => (<HouseRules />)} />
          <Route path="/myprofile" exact render={props => (<MyProfile />)} />
          <Route path="/myprofilestaff" exact render={props => (<MyProfileStaff />)} />

          {/* Example pages REMOVE WHEN PROJECT IS COMPLETE */}
          <Route path="/examplepage" exact render={props => (<ExamplePage />)} />
          <Route path="/students" exact render={props => (<Students />)} />
          <Route path="/residence" exact render={props => (<Residences />)} />
          <Route path="/residence/create" exact render={props => (<CreateResidence />)} />
          <Route path="/manageResidences" exact render={props => (<ManageResidences />)} />

          {/* For Residences*/}
          <Route path="/CityEdgeResidence" exact render={props => (<CityEdgeResidence />)} />
          <Route path="/HanovorResince" exact render={props => (<HanovorResince />)} />
          <Route path="/CatsvilleResidence" exact render={props => (<CatsvilleResidence />)} />
          <Route path="/add-room" exact render={props => (<CreateResRoom/>)} />
          <Route path="/add-room-CityEdge" exact render={props => (<CreateCityEdgeResRoom />)} />
          <Route path="/add-room-Hanover" exact render={props => (<CreateResidenceHanover />)} />
          <Route path="/add-student" exact render={props => (<CraeteStudent />)} />
          <Route path="/update-CatRoom/:roomNumber" render={props => (<UpdateCatsvilleResRoom/>)} />
          <Route path="/update-student/:studNum" render={props => (<UpdateStudent />)} />
          {/* For Staff and Students*/}
          <Route path="/ManageStudents" exact render={props => (<ManageStudents />)} />
          <Route path="/ManageStaff" exact render={props => (<ManageStaff />)} />
          <Route path="/StaffQueryResponse" exact render={props => (<StaffQueryResponse />)} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
