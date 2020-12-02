import React, { useEffect } from 'react';
import axios from 'axios';

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
      window.location.href="/"
   );
}

export default Logout;