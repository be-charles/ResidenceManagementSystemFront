import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Divider, Typography, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

function ProfileInfo () {
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

      
   const [profileData, setProfileData] = useState([]);
   
   const fetchProfiles = () => {
      axios.get("http://localhost:8080/student/read/123456789", {withCredentials:true})
      .then(response => {
         console.log(response);
         setProfileData(response.data);
      }).catch(error => {
         console.log(error);
      })
   }
   
   useEffect(() => {
      fetchProfiles();
   }, []);
   
   const classes = useStyles();

   return (
      <>

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
                        <TableCell align="left">{profileData.studNum}</TableCell>
                     </TableRow>                                  
                     <TableRow>
                        <TableCell>Full Name </TableCell>
                        <TableCell align="left">{profileData.firstName} {profileData.lastName}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Gender </TableCell><TableCell align="left">{profileData.gender}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Birthdate </TableCell><TableCell align="left">{profileData.dob}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Identity Number</TableCell><TableCell align="left">{profileData.identityNum}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Home Language</TableCell><TableCell align="left">{profileData.homeLanguage}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Student Email</TableCell><TableCell align="left">{profileData.studEmail}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Contact Number</TableCell><TableCell align="left">{profileData.contactNum}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Active Residence</TableCell><TableCell align="left">if({profileData.campusId}==1) {"CPUT"}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
      </>
   );
};

function AccountInfo () {
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
         marginBottom: theme.spacing(4),
         padding: theme.spacing(2),
         display: 'flex',
         overflow: 'hidden',
         flexDirection: 'column',
         minHeight: 200,
      },
   }));

   const [accountData, setAccountData] = useState([]);
   
   const fetchAccount = () => {
      axios.get("http://localhost:8080/account/read/123456789", {withCredentials:true})
      .then(response => {
         console.log(response);
         setAccountData(response.data);
      }).catch(error => {
         console.log(error);
      })
   }
   
   useEffect(() => {
      fetchAccount();
   }, []);
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}  >MyAccount</Typography>
            <Divider />
            <Paper className={classes.paper} >
               <Table >
                  <TableHead>
                     <TableCell>Account Information</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>Statement Type</TableCell>
                        <TableCell align="left">{accountData.statementType}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Debit Amount </TableCell>
                        <TableCell align="left">R{accountData.debitAmount}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Credit Amount</TableCell>
                        <TableCell align="left">R{accountData.creditAmount}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Balance Amount</TableCell>
                        <TableCell align="left">R{accountData.balanceAmount}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Date of Balance</TableCell>
                        <TableCell align="left">{accountData.balanceDate}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
   );
}

function MyProfile() {
  
    let components;

    components = (
    <>
      <ProfileInfo />
      <AccountInfo />
    </>);

   return components;
}

export default MyProfile;