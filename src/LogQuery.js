import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Paper, TextField, Typography, makeStyles } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
//import { useForm } from "react-hook-form";
//import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

    
      paper: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        minHeight: 200,
        //maxWidth: 950,
       // align: center,
        
     }, 

     textField: {
        width: '25ch',
      },

    
    submit: {},
    root: {
      '& > *': {
        margin: theme.spacing(1),
        //width: '25ch',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  }));

function LogQuery() {
    
    const classes = useStyles();
    const [level, setLevel] = React.useState('');
    const [residence, setResidence] = React.useState('');

  const handleChange = (event) => {
    setLevel(event.target.value);
    setResidence(event.target.value);
  };
    return (
       <>
       
       <h1 >Log a Query</h1>
       <p>Please fill in the form to log a query</p>
       <p></p>
       <p></p>
       
       <Container component="main" fixed>
            <Typography component="h1" variant="h5">
          </Typography>
          <Paper className={classes.paper}>
            <form >
                <p>Student Number</p>
                <div>
                <TextField
                    id="outlined-textarea"
                    label="Student Number"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                <p>Full Name</p>
                
                </div>               

                <div>                    
                <TextField
                    id="outlined-textarea"
                    label="Full Name"
                    style={{ margin: 8 }}
                    //helperText="Full width!"
                    fullWidth
                    margin="normal"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                </div>
                
                <p>Level of study</p> 

                <div>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            style={{ margin: 8 }}
                            //helperText="Full width!"
                            //fullWidth
                            margin="normal"
                            value={level}
                            onChange={handleChange}
                            label="Level"
        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value ={0}>Higher Certificate</MenuItem>
                    <MenuItem value ={1}>First</MenuItem>
                    <MenuItem value = {2}>Second</MenuItem>
                    <MenuItem value = {3}>Third</MenuItem>
                    <MenuItem value = {4}>BTech</MenuItem>
                    <MenuItem value = {5}>Masters</MenuItem>
                         </Select>
                </FormControl>
                </div>
                <p>Residence Name</p> 
                <div>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">residence</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            style={{ margin: 8 }}
                            //helperText="Full width!"
                            //fullWidth
                            margin="normal"
                            value={residence}
                            onChange={handleChange}
                            label="Residence"
        >
                    <MenuItem value=""> <em>None</em> </MenuItem>
                    <MenuItem value ={1}>Protea Hof Tower 4</MenuItem>
                    <MenuItem value ={2}>Sacco Residence</MenuItem>
                    <MenuItem value ={3}>Sheriff's House Residence</MenuItem>
                         </Select>
                </FormControl>
                </div>
                
                <p>Nature of Query</p>
                <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    fullWidth
                    multiline
                    rows={5}
                    label="Enter text here"
                    variant="outlined"
                />

                </div>           
            </form>
            <p></p>
            <p></p>
            
            <Button
                    type="submit"
                    //fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                > Submit </Button>
            </Paper>

            
        </Container>
       </>
    );
 }
 
 export default LogQuery;