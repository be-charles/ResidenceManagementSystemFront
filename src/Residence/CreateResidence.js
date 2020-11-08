import React from 'react';
import axios from 'axios';
import { Button, Container, CssBaseline, TextField, Typography, makeStyles } from '@material-ui/core';
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
    form: {},
    submit: {},

});

//Create Component
const Create = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    //Formatted response
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography component="h1" variant="h5">
                Create Residence
          </Typography>
            <form className={classes.form} noValidate onSubmit={
                handleSubmit((data) => {
                    axios.post("http://localhost:8080/residence/create", data)
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
            }>
                <TextField
                    margin="normal"
                    inputRef={register}
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
            {/* Include the output from the component we made above(CreateResidence) */}
            <Create />
        </>
    );
}

export default CreateResidence