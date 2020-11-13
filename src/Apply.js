import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button, Container, makeStyles, Typography, Paper, Table, TableHead, TableBody, TableCell, TableRow, Divider, Grid } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';

const ApplicationStatus = () => {
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
            <Typography className={classes.title}>Application Status</Typography>
            <Divider />
            <Paper className={classes.paper}>
               <Table>
                  <TableHead>
                     <TableCell>Submission Date</TableCell>
                     <TableCell>Reference Number</TableCell>
                     <TableCell>Status</TableCell>
                  </TableHead>
                  <TableBody>
                     <TableCell>2020-11-08</TableCell>
                     <TableCell>50dd9e79053a324e795a498e4909734220d9deb0d32637eb480437fb25e25faa</TableCell>
                     <TableCell>PROCESSING</TableCell>
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


const SubmitApplication = () => {
   //DROPZONE
   const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
   }, [])
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

   //STYLING
   const useStyles = makeStyles((theme) => ({
      title: {
         fontSize: 20,
         textAlign: "left",
         fontWeight: "bold",
      },
      subtitle: {
         textAlign: "left",
         padding: theme.spacing(3)
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
         minHeight: 100,
         verticalAlign: "middle",
      },
      button: {
         backgroundColor: theme.palette.primary.dark,
         color: theme.palette.primary.light,
         padding: theme.spacing(1),
         marginTop: theme.spacing(1),
         height: 50,
         width: 200,
      },
      divider: {
         marginTop: theme.spacing(1)
      }
   }));
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Resubmit Application</Typography>
            <Grid container justify="space-between">
               <Typography className={classes.subtitle}>Step 1: Download Documents</Typography>
               <Button className={classes.button}>Download</Button>
            </Grid>
            <Divider className={classes.divider} />
            <Typography className={classes.subtitle}>Step 2: Upload Documents</Typography>
            {/* Drop Zone */}

            <div className={classes.dropzone} {...getRootProps()}>
               <input {...getInputProps()} />
               {
                  isDragActive ?
                     <p>Drop the files here ...</p> :
                     <p>Drag and drop the completed documents here, or click to select files</p>
               }
            </div>
            <Grid container justify="flex-end">
               <Button className={classes.button}>Resubmit Application</Button>
            </Grid>
         </Paper>
      </Container>
   );
}

const ResubmitApplication = () => {
   //DROPZONE
   const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
   }, [])
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

   //STYLING
   const useStyles = makeStyles((theme) => ({
      title: {
         fontSize: 20,
         textAlign: "left",
         fontWeight: "bold",
      },
      subtitle: {
         textAlign: "left",
         padding: theme.spacing(3)
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
         minHeight: 100,
         verticalAlign: "middle",
      },
      button: {
         backgroundColor: theme.palette.primary.dark,
         color: theme.palette.primary.light,
         padding: theme.spacing(1),
         marginTop: theme.spacing(1),
         height: 50,
         width: 200,
      },
      divider: {
         marginTop: theme.spacing(1)
      }
   }));
   const classes = useStyles();

   return (
      <Container>
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Resubmit Application</Typography>
            <Grid container justify="space-between">
               <Typography className={classes.subtitle}>Step 1: Download Documents</Typography>
               <Button className={classes.button}>Download</Button>
            </Grid>
            <Divider className={classes.divider} />
            <Typography className={classes.subtitle}>Step 2: Upload Documents</Typography>
            {/* Drop Zone */}

            <div className={classes.dropzone} {...getRootProps()}>
               <input {...getInputProps()} />
               {
                  isDragActive ?
                     <p>Drop the files here ...</p> :
                     <p>Drag and drop the completed documents here, or click to select files</p>
               }
            </div>
            <Grid container justify="flex-end">
               <Button className={classes.button}>Resubmit Application</Button>
            </Grid>
         </Paper>
      </Container>
   );
}
const CancelApplication = () => {
   const useStyles = makeStyles((theme) => ({
      button: {
         backgroundColor: theme.palette.primary.dark,
         color: theme.palette.primary.light,
         padding: theme.spacing(1),
         marginTop: theme.spacing(1),
         margin: "auto",
         height: 50,
         width: 200,
      },
      container: {
         marginBottom: theme.spacing(10)
      },
      title: {
         fontSize: 20,
         textAlign: "left",
         fontWeight: "bold",
      },
      paper: {
         marginTop: theme.spacing(4),
         padding: theme.spacing(2),
         display: 'flex',
         overflow: 'auto',
         flexDirection: 'column',
         minHeight: 100,
      },
   }));
   const classes = useStyles();
   return (
      <Container className={classes.container} >
         <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.title}>Cancel Application</Typography>
            <Typography>Click below to cancel your application. You will still be able to re-apply at a later date</Typography>
            <Button className={classes.button}>Cancel Application</Button>
         </Paper>
      </Container>
   );
}

function Apply() {
   const [applicationData, setApplicationData] = useState();

   const getApplication = () => {
      axios.get("http://localhost:8080/residence/all")
         .then(response => {
            setApplicationData(response.data);
         }).catch(error => {
            console.log(error);
         });
   }

   useEffect(() => { setApplicationData({ "A": "1" }); getApplication(); }, []);

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
            <ApplicationStatus />
            <ResubmitApplication />
            <CancelApplication />
         </>);
   }

   return components;
}

export default Apply;