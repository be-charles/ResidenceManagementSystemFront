import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Container from '@material-ui/core/Container';
import { Button, Container, TextField, Typography, makeStyles, Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function LogQuery() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      minHeight: 200,
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 200,
    },
  }));

  const classes = useStyles();
  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (

    <>
      <Container>
        <Paper className={classes.paper} elevation={3}>
          <h1>Log a Query</h1>
          <h2>Please fill in the form to log a query</h2>

          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
            </Typography>
            <form >
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Student Number"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  placeholder="Enter text here"
                  multiline
                  variant="outlined"
                />
              </div>

              <div>
                <TextField
                  id="outlined-textarea"
                  label="Full Name"
                  style={{ margin: 8 }}
                  //helperText="Full width!"
                  fullWidth
                  margin="normal"
                  placeholder="Enter text here"
                  multiline
                  variant="outlined"
                />
              </div>

              <h2>Nature of Query</h2>

              <div>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    style={{ margin: 8 }}
                    //helperText="Full width!"
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
              </div>

              <h2>Please Elaborate</h2>
              <div>
                <TextField
                  id="outlined-textarea"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  placeholder="Enter text here"
                  multiline
                  variant="outlined"
                /></div>

            </form>

            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              placeholder="Enter text here"
              className={classes.submit}
            > Submit </Button>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default LogQuery;