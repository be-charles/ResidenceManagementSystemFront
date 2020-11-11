import React from 'react';
import axios from 'axios';
import { Button, Container, TextField, Typography, makeStyles } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    form: {},
    submit: {},

});

//Create Component
const Create = () => {
    const history = useHistory();   //We'll use history later to redirect to another page
    const classes = useStyles();    //This variable contains all our css classes
    const { register, handleSubmit } = useForm();   //Form validation
    const onSubmit = data => {
        axios.post("http://localhost:8080/residence/create", data)
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

    //Formatted response
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Create Residence
          </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)} >
                <TextField
                    margin="normal"
                    inputRef={register} //EACH INPUT FIELD THAT 
                    required
                    fullWidth
                    id="residenceName"
                    label="Residence Name"
                    name="residenceName"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    inputRef={register}
                    required
                    fullWidth
                    name="roomsAvailable"
                    label="Rooms Available"
                    id="roomsAvailable"
                    autoComplete="current-password"
                    type="number"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                > Create Residence </Button>
            </form>
        </Container>
    );
};

//MAIN PAGE
function CreateResidence() {
    //The following response gets displayed
    return (
        <>
            <h1>About This Page</h1>
            <p>This page contains a form which posts data to our backend API that creates new residence entries</p>
            <p>This page was created to showcase sending data to our API and should not be included in the final project 3 presentation</p>

            {/* Include the output from the component we made above(Create) */}
            <Create />
        </>
    );
}

export default CreateResidence