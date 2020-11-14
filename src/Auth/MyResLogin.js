import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Button, Container, Paper, Typography, makeStyles } from '@material-ui/core';
import { withRouter } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    container:{

    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      //width: '100%', Fix IE 11 issue.
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
function MyResidence() {
    const classes = useStyles();
  
    const { register, handleSubmit } = useForm();
  
    const onSubmit = () => {
        window.location.href="/myres/login"
    }
  
    return (
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={3}>
            <h1>Login to myRES</h1>
        
           <h2>Welcome to the new 2020 "MyRES" site!</h2>
           <p>The official CPUT Residence Management System
for <br></br>registered residence management staff and students.</p> 
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Student Login
             </Button>
             <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Staff Login
             </Button>
          </form>
        </Paper>
      </Container>
    );
  }
    export default withRouter(MyResidence);