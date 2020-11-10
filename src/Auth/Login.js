import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Button, Checkbox, Container, FormControlLabel, TextField, Typography, makeStyles } from '@material-ui/core';
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({ loginStatus }) {
  if (loginStatus == 'LOGGED_IN') { return (<Redirect to="/" />) }
  const history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axios.get("http://localhost:8080", { auth: data }, { withCredentials: true })
      .then(response => {
        console.log(response)
        if (response.status == 200) {
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
         </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            inputRef={register}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={register}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
           </Button>
          {/* <Grid container>
             <Grid item xs>
               <Link href="#" variant="body2">
                 Forgot password?
               </Link>
             </Grid>
             <Grid item>
               <Link href="#" variant="body2">
                 {"Don't have an account? Sign Up"}
               </Link>
             </Grid>
           </Grid> */}
        </form>
      </div>
    </Container>
  );
}

export default Login;