import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Divider, Typography, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

const ProfileInfo = () => {
   const useStyles = makeStyles((theme) => ({
      title: {
         fontSize: 20,
         textAlign: "left",
         fontWeight: "bold",
         paddingTop: theme.spacing(3),
         paddingBottom: theme.spacing(1),
         paddingLeft: theme.spacing(2)
      },
      paper: {
         marginTop: theme.spacing(4),
         padding: theme.spacing(2),
         display: 'flex',
         overflow: 'hidden',
         flexDirection: 'column',
         minHeight: 200,
      },
   }));
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>MyProfile</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table >
                  <TableHead>
                     <TableCell>Student Information</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>Student Number</TableCell>
                        <TableCell align="left">123456789</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Full Name </TableCell>
                        <TableCell align="left">Junaid Martin</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Gender </TableCell>
                        <TableCell align="left">Male</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Birthdate </TableCell>
                        <TableCell align="left">10-Jul-1997</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Identity Number</TableCell>
                        <TableCell align="left">1234567890123</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Home Language</TableCell>
                        <TableCell align="left">English</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Student Email</TableCell>
                        <TableCell align="left">123456789@mycput.ac.za</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Contact Number</TableCell>
                        <TableCell align="left">060 123 4567</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Active Residence</TableCell>
                        <TableCell align="left">President House (Southpoint)</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
   );
}

const AccountInfo = () => {
   const useStyles = makeStyles((theme) => ({
      title: {
         fontSize: 20,
         textAlign: "left",
         fontWeight: "bold",
         paddingTop: theme.spacing(3),
         paddingBottom: theme.spacing(1),
         paddingLeft: theme.spacing(2)
      },
      paper: {
         marginTop: theme.spacing(4),
         padding: theme.spacing(2),
         display: 'flex',
         overflow: 'hidden',
         flexDirection: 'column',
         minHeight: 200,
      },
   }));
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>MyAccount</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table >
                  <TableHead>
                     <TableCell>Account Information</TableCell>
                     <TableCell>Account Information</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>Statement Type</TableCell>
                        <TableCell align="left">Fee</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Debit Amount </TableCell>
                        <TableCell align="left">R39469.00</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Credit Amount</TableCell>
                        <TableCell align="left">R37567.00</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Balance Amount</TableCell>
                        <TableCell align="left">R1902.00</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Date of Balance</TableCell>
                        <TableCell align="left">11-NOV-2020</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
   );
}

function MyProfile() {
   // const [profileData, setProfileData] = useState();
   
   // const getProfile = () => {
   //    axios.get("http://localhost:8080/student/all")
   //    .then(response => {
   //       setProfileData(response.data);
   //    }).catch(error => {
   //       console.log(error);
   //    });
   // }
   
   // useEffect(() => {setProfileData({"A":"1"}); getProfile();}, []);
   
   // console.log("Profile Data: " + profileData);

    let components;

    components = (
    <>
      <ProfileInfo />
      <AccountInfo />
    </>);

   return components;
}

export default MyProfile;