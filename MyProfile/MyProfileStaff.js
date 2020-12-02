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
      axios.get("http://localhost:8080/manager/read/987654321", {withCredentials:true})
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
    <h1>MyProfile</h1> 
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Residence Co-ordinator Information</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table >
                  <TableBody>
                     <TableRow>
                        <TableCell>Employee Number</TableCell>
                           <TableCell align="left"> {profileData.employeeId}</TableCell>
                     </TableRow>                                  
                     <TableRow>
                        <TableCell>Full Name </TableCell>
                        <TableCell align="left">{profileData.firstName} {profileData.lastName}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Employment Date </TableCell><TableCell align="left">{profileData.employmentDate}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Residence Name </TableCell><TableCell align="left">{profileData.residenceName}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
      </>
   );
};

function MyProfileStaff() {
  
    let components;

    components = (
    <>
      <ProfileInfo />
    </>);

   return components;
}

export default MyProfileStaff;