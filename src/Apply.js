import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, makeStyles, Typography } from "@material-ui/core";

//This page requires the student to be logged in
const ApplicationProgress = () => {
   const useStyles = makeStyles((theme) => ({
      container: {
         backgroundColor: theme.palette.primary.dark,
         marginTop: theme.spacing(4),
         paddingTop: theme.spacing(4),
         paddingBottom: theme.spacing(4),
      },
      paper: {
         padding: theme.spacing(2),
         display: 'flex',
         overflow: 'auto',
         flexDirection: 'column',
      },
   }));
   const classes = useStyles();
   return (
      <Container className={classes.container}>
         <div className={classes.paper}>
            <Typography>Application Progress</Typography>
         </div>
      </Container>
   );
}

const SubmitApplication = () => {
   return (
      <Container >
         <Typography>Submit Application</Typography>
      </Container>
   );
}

const ResubmitApplication = () => {
   return (
      <Container>
         <Typography>Resubmit Application</Typography>
      </Container>
   );
}

const CancelApplication = () => {
   return (
      <Container>
         <Typography>Cancel Application</Typography>
      </Container>
   );
}

function Apply() {
   const [applicationData, setApplicationData] = useState();

   const getApplication = () => {
      axios.get("http://localhost:8080/residence/all")
         .then(response => {
            setApplicationData(response.data);
         }).catch(error =>{
            console.log(error);
         });
   }

   useEffect(() => { getApplication(); }, []);

   console.log("Application Data: " + applicationData);

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