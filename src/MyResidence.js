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


function MyResidence() {
   
   //const classes = useStyles();
   const [level, setLevel] = React.useState('');
   const [residence, setResidence] = React.useState('');

 const handleChange = (event) => {
   setLevel(event.target.value);
   setResidence(event.target.value);

   
 };
 
 
   return (
     
      <React.Fragment>
      <CssBaseline />
        
      <Container maxWidth="sm">         
        <Typography  component="div"   style={{ backgroundColor: '#cfe8fc', height: '50vh', weight: '1000' }} > <h2>Login to myResidence Profile</h2>
         
        <Paper >
               <Table>
                  <TableHead>
                     <TableCell><h3>Student</h3></TableCell>
                     <TableCell><h3>OR</h3></TableCell>
                     <TableCell><h3>Residence Coordinator</h3></TableCell>
                  </TableHead>
                  <TableBody>
                  <TableRow>
                        <TableCell> <div>
                <TextField
                    id="outlined-textarea"
                    label="Student Email"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                               
                </div>     </TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right"> <div>
                <TextField
                    id="outlined-textarea"
                    label="Staff Email"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                                
                </div>     </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell> <div>
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                              
                </div>      </TableCell>
                        <TableCell> </TableCell>
                        <TableCell align="right"> <div>
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                                
                </div>     </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell><Button
                    type="Submit for Student "
                    fullWidth
                    variant="contained"
                    color="primary"
                   
                > Submit </Button></TableCell>
                <TableCell></TableCell>
                        <TableCell align="right"><Button
                    type="Submit for Res Coodinator"
                    fullWidth
                    variant="contained"
                    color="primary"
                   
                > Submit </Button></TableCell>
                     </TableRow>                     
                     <TableRow>                       
                     <TableCell align="left"><FormControl component="fieldset">
      <FormLabel component="legend">{<Checkbox color="primary" />}Remember Me</FormLabel>
      <FormGroup aria-label="position" row>
       </FormGroup>
        </FormControl></TableCell>
                     <TableCell></TableCell>
                     <TableCell align="right">Forgot Password</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </Paper>
            </Typography>
        





      </Container>
    </React.Fragment>

   );


}

export default MyResidence;

