import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';

//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
//import TableRow from '@material-ui/core/TableRow';

//import { Button, Container, TextField, Typography, makeStyles } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Button, Container, makeStyles, Typography, Paper, TextField, Table, TableHead, TableBody, TableCell, TableRow, Divider, Grid } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function MyResidence() {
   const history = useHistory();
   const classes = useStyles();
   const [level, setLevel] = React.useState('');
   const [residence, setResidence] = React.useState('');

 const handleChange = (event) => {
   setLevel(event.target.value);
   setResidence(event.target.value);

   
 };
 const { register, handleSubmit } = useForm();
 const onSubmit = data => {
  axios.get("http://localhost:8080", { auth: data })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        console.log("LOGGED IN")
        history.push('/');
      }
    }
    ).catch(error => {
      console.log(error)
    }
    );
}
 
 
   return (
     
      <React.Fragment>
      <CssBaseline />
        
      <Container maxWidth="sm">         
        <Typography  component="div"   style={{ backgroundColor: '', height: '50vh', weight: '1000' }} > <h2>Login to myResidence Profile</h2>
         
        <Paper >
               <Table>
                  <TableHead>
                     <TableCell><h3>Student</h3></TableCell>
                     <TableCell><h3>OR</h3></TableCell>
                     <TableCell><h3>Residence Coordinator</h3></TableCell>
                  </TableHead>
                  <TableBody>
                  <TableRow>
                        <TableCell> <div className={classes.form} onSubmit={handleSubmit(onSubmit)}> 
                <TextField
                    id="outlined-textarea"
                    label="Student Username"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Student Username"
                    multiline
                    variant="outlined"
                    inputRef={register}
                    autoFocus
                />
                               
                </div>     </TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right"> <div className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-textarea"
                    label="Staff Username"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Staff Username"
                    multiline
                    variant="outlined"
                    inputRef={register}
                    autoFocus
                    //variant="outlined"
                    //required
                    
                />
                                
                </div>     </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell> <div>
                <TextField
                    style={{ margin: 8 }}
                    fullWidth
                    id="outlined-textarea"
                    margin="normal"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    inputRef={register}
                   
                />
                              
                </div>      </TableCell>
                        <TableCell> </TableCell>
                        <TableCell align="right"> <div>
                <TextField
                    style={{ margin: 8 }}
                    fullWidth
                    id="outlined-textarea"
                    margin="normal"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    inputRef={register}
                   
                />
                                
                </div>     </TableCell>
                     </TableRow>
                     <TableRow>
                      <TableCell><Button
                    type="Submit for Student "
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                   
                > Submit </Button></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"><Button
                    type="Submit for Res Coodinator"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                   
                > Submit </Button></TableCell>
                     </TableRow>                     
                     <TableRow>                       
                     <TableCell align="left"><FormControl component="fieldset">
      <FormLabel component="legend">{<Checkbox color="primary" />}Remember Me</FormLabel>
      <FormGroup aria-label="position" row>
       </FormGroup>
        </FormControl></TableCell>
                     <TableCell></TableCell>
                     <TableCell align="right"><a href="https://myclassroom.cput.ac.za/">Forgot Password</a></TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
            </Typography>
        





      </Container>
    </React.Fragment>

   );


}

export default withRouter(MyResidence);


