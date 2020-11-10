import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Logout({ loginStatus, setLoginStatus, setCredentials }) {
    setLoginStatus('CHECKING');
    setCredentials();

   return (
      <Redirect></Redirect>
   );
}

export default Logout;