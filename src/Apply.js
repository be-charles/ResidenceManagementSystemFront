import React, { useState, useEffect } from 'react';
import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

//This page requires the student to be logged in
const ApplicationProgress = () => {
   const useStyles = makeStyles({

   });
   const classes = useStyles();
   return (
      <Container>
         <Typography>Application Progress</Typography>
      </Container>
   );
}

const SubmitApplication = () => {
   const useStyles = makeStyles({

   });
   const classes = useStyles();
   return (
      <Container>
         <Typography>Submit Application</Typography>
      </Container>
   );
}

const ResubmitApplication = () => {
   const useStyles = makeStyles({

   });
   const classes = useStyles();
   return (
      <Container>
         <Typography>Resubmit Application</Typography>
      </Container>
   );
}

const CancelApplication = () => {
   const useStyles = makeStyles({

   });
   const classes = useStyles();
   return (
      <Container>
         <Typography>Cancel Application</Typography>
      </Container>
   );
}

function Apply({ loginStatus }) {
   console.log(loginStatus);

   //This page requires the user to be logged in, if not logged in ,redirect to login page
   if (loginStatus == 'CHECKING') { return (<></>) }
   else if (loginStatus == 'LOGGED_OUT') { return (<div><Redirect to={'/login'} /></div>) }

   const [applicationData, setApplicationData] = useState();
   const getApplication = () => {
      // axios.get("http://localhost:8080/application").then(response => {
      //     console.log(response);
      //     setApplicationData(response.data);
      // });
      setApplicationData([{ "applicationID": "1" }]);
   }

   if (loginStatus != 'LOGGED_OUT')
      useEffect(() => { getApplication(); }, []);

   console.log("Application Data: " + applicationData);
   console.log(loginStatus);

   let components;

   if (applicationData == null) {
      components = (
         <>
            <SubmitApplication />
         </>);
   } else {
      components = (
         <>
            <ApplicationProgress />
            <ResubmitApplication />
            <CancelApplication />
         </>);
   }

   return components;
}

export default Apply;