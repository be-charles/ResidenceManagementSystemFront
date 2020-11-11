import React, { useEffect }  from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Logout() {
   const logout = () => {
      axios.get("http://localhost:8080/logout")
         .then(response => {
            console.log(response);
         }).catch(error => {
            console.log(error);
         });
   }

   useEffect(() => { logout(); }, []);
   return (
      <Redirect to="/" />
   );
}

export default Logout;