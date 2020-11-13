import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Button, Container,  TextField, Typography, makeStyles } from '@material-ui/core';
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

function Login() {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios.get("http://localhost:8080", { auth: data })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          window.location.href="/"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
           </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Login);