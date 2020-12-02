import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Button, Container, TextField, makeStyles, Paper } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

//Create Component
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
}));

function StaffQueryResponse() {
  const history = useHistory();   //We'll use history later to redirect to another page
  const classes = useStyles();    //This variable contains all our css classes

  const { register, handleSubmit, control } = useForm();   //Form validation
  const onSubmit = data => {
    axios.post("http://localhost:8080/query/update", data)
      .then((response) => {
        console.log(data);
        console.log(response);
        //Redirect to another page or do something else here to indicate the request was successful
        //such as creating a diolg box
        alert("You query response has been captured.");
        history.push("/staffquery");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={3}>
          <h1>Respond to Query</h1>
          <h2>Please use this form to respond to queries</h2>

          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register}
              name="queryId"
              id="queryId"
              label="Query ID"
              required
              style={{ margin: 8 }}
              fullWidth
              placeholder="Enter an unprocessed Query ID here"
              multiline
              variant="outlined"
            />

            <h2>Query Response</h2>
            <TextField
              inputRef={register}
              required
              fullWidth
              name="response"
              id="response"
              style={{ margin: 8 }}
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
}

export default StaffQueryResponse;