import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, makeStyles, Typography, Paper, Table, TableHead, TableBody, TableCell, TableRow, TextField, Divider, Grid } from "@material-ui/core";
import { useForm } from 'react-hook-form';

const apiBaseURL = "http://localhost:8080/applications";

//STYLING
const useStyles = makeStyles((theme) => ({
   title: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold",
   },
   subtitle: {
      textAlign: "left",
      paddingLeft: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(2),
   },
   paper: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      minHeight: 100,
   },
   dropzone: {
      borderStyle: {},
      backgroundColor: theme.palette.primary.light,
      borderRadius: 10,
      color: theme.palette.primary.dark,
      minHeight: 50,
      verticalAlign: "middle",
      padding: 25,
      marginLeft: 100,
      marginRight: 100,
   },
   button: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      height: 50,
      width: 200,
   },
   divider: {
      marginTop: theme.spacing(2)
   },
   textField: {
      marginLeft: theme.spacing(3),
      padding: 0,
   }
}));

//QUERIES
const GetApplicationData = (setApplicationData) => {
   axios.get(`${apiBaseURL}/myapplication`)
      .then((response) => { setApplicationData(response); })
      .catch((error) => { });
}

//COMPONENTS
//NO APPLICATION DATA
const SubmitApplication = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      let formData = new FormData();
      formData.append('studentId', data.studentId);
      formData.append('applicationForms', data.applicationForms[0]);
      axios.post(`${apiBaseURL}/new`,
         formData,
         { headers: { 'Content-Type': 'multipart/form-data' } }
      )
         .then(response => {
            console.log(response)

         })
         .catch(error => { console.log(error) });
   }

   //STYLING
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
               <Typography className={classes.title}>Submit Application</Typography>
               <Typography className={classes.subtitle}>Step 1: Enter your student number</Typography>
               <Grid container justify="space-between">
                  <TextField
                     className={classes.textField}
                     margin="normal"
                     required
                     align="left"
                     id="studentId"
                     label="Student Number"
                     name="studentId"
                     fullWidth
                     inputRef={register}
                     autoFocus
                     type="text"
                  />
               </Grid>
               <Divider className={classes.divider} />
               <Grid container justify="space-between">
                  <Typography className={classes.subtitle}>Step 2: Download Documents</Typography>
                  <Button className={classes.button} href="/data/apply.pdf" download>Download</Button>
               </Grid>
               <Divider className={classes.divider} />
               <Typography className={classes.subtitle}>Step 3: Upload Documents and Press Submit</Typography>
               <input ref={register} type="file" name="applicationForms" required />
               <Grid container justify="flex-end">
                  <Button className={classes.button} type="submit">Submit Application</Button>
               </Grid>
            </form>
         </Paper>
      </Container>
   );
}

//WE HAVE APPLICATION DATA
const ApplicationStatus = ({applicationData}) => {
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Application Status</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table>
                  <TableHead>
                     <TableCell>Submission Date</TableCell>
                     <TableCell>Status</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableCell>{applicationData.data.data.submissionDate}</TableCell>
                     <TableCell>{applicationData.data.data.applicationStatus}</TableCell>
                  </TableBody>
               </Table>
            </Paper>
            <Typography className={classes.title}>Application Progress</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table >
                  <TableHead>
                     <TableCell>Step</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>1. Receive Application</TableCell>
                        <TableCell align="right">COMPLETE</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>2. Application Accepted </TableCell>
                        <TableCell align="right">PENDING</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>3. Room Assigned</TableCell>
                        <TableCell align="right">PENDING</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>4. Application Complete </TableCell>
                        <TableCell align="right">PENDING</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
         </Paper>
      </Container>
   );
}

const CancelApplication = () => {
   const classes = useStyles();
   const onSubmit = () => {
      axios.delete(`${apiBaseURL}/cancel`)
         .then(response => {
            console.log(response)
            //window.location.reload(false);
         })
         .catch(error => { console.log(error) });
   }
   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Cancel Application</Typography>
            <Typography className={classes.subtitle}>
               Click on the button below to cancel your application.You can re-apply at a later date.
            </Typography>
            <Grid container justify="flex-end">
               <form className={classes.form} onSubmit={onSubmit}>
                  <Button className={classes.button} type="submit">Cancel Application</Button>
               </form>
            </Grid>
         </Paper>
      </Container>
   );
}

//MAIN
function Apply() {
   const [applicationData, setApplicationData] = useState();

   let components = (<> <SubmitApplication /> </>);

   useEffect(() => {
      GetApplicationData(setApplicationData);
   }, []);

   console.log(applicationData);
   if (applicationData) {
      if (applicationData.data.isSuccessful) {
         components = (
            <>
               <ApplicationStatus applicationData={applicationData} />
               <CancelApplication />
            </>
         );
      }
   }

   return components;
}

export default Apply;