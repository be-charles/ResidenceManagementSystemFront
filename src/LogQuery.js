import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Container from '@material-ui/core/Container';
import { Button, Container, TextField, Typography, makeStyles, Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

//Create Component
const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(4),
    paddingRight: theme.spacing(7),
  },
  container: {
    maxWidth: 650
  },
  submit: {},
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    minHeight: 200,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 250,
  }
}));

//Create Component
const Create = () => {
  const history = useHistory();   //We'll use history later to redirect to another page
  const classes = useStyles();    //This variable contains all our css classes
  const { register, handleSubmit } = useForm();   //Form validation
  const onSubmit = data => {
    axios.post("http://localhost:8080/complaint/create", data)
      .then((response) => {
        console.log(response);
        //Redirect to another page or do something else here to indicate the request was successful
        //such as creating a diolg box
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  //Formatted response
  return (
    <>
      <Container component="main" className={classes.container}>
        <Paper className={classes.paper} elevation={3}>
            <h1>Log a Query</h1>
            <h2>Please fill in the form to log a query</h2>

            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

              <TextField
                id="studNum"
                label="Student Number"
                required
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                placeholder="Enter text here"
                multiline
                variant="outlined"
              />
              <TextField
                id="fullName"
                label="Full Name"
                required
                style={{ margin: 8 }}
                //helperText="Full width!"
                fullWidth
                margin="normal"
                placeholder="Enter text here"
                multiline
                variant="outlined"
              />

              <h2>Nature of Query</h2>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Select</InputLabel>
                <Select
                  inputRef={register}
                  required
                  id="nature"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  value={query}
                  onChange={handleChange}
                  label="Select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Complaint</MenuItem>
                  <MenuItem value={2}>Question</MenuItem>
                  <MenuItem value={3}>Suggestion</MenuItem>
                </Select>
              </FormControl>
              <h2>Please Elaborate</h2>
              <TextField
                inputRef={register}
                required
                fullWidth
                name="description"
                id="description"
                style={{ margin: 8 }}
                margin="normal"
                placeholder="Enter text here"
                multiline
                variant="outlined"
              />
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                placeholder="Enter text here"
                className={classes.submit}
              > Submit </Button>
            </form>
        </Paper>
      </Container>
    </>
  );
};


function LogQuery() {
  return (
    <>

      <Create />
    </>
  );
}

export default LogQuery;