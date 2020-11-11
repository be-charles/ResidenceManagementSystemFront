import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: { minWidth: 300, },
    tableContainer: { margin: 'auto', maxWidth: 900, },
});

//READ Component - Interact with backend
const FetchResidences = () => {
    //Declaring a state variable that has its default value set to an empty array '[]'
    //The variable will be filled with an array of residence objects once we get a response from our GET call to our backend
    //See https://reactjs.org/docs/hooks-state.html for more information regarding states and hooks in react if I am unable to help you understand
    const [residences, setResidences] = useState([]);

    const fetchResidences = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/residence/all", {withCredentials:true, })
            .then(response => {
                console.log(response);
                //Let residences = response.data (our array of residence objects)
                setResidences(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    //On Render call above fetch residences function to get residences from back end and store the response in 'residences'
    useEffect(() => {
        fetchResidences();
    }, []);

    const classes = useStyles();

    //Formatted response
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="residences table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Rooms Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Iterate through each residence and create a row for it */}
                    {residences.map((residence) => (
                        <TableRow key={residence.residenceId}>
                            <TableCell align="left">{residence.residenceId}</TableCell>
                            <TableCell align="right">{residence.residenceName}</TableCell>
                            <TableCell align="right">{residence.roomsAvailable}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>);
};

//MAIN COMPONENT
function Residences() {
    //The following response gets displayed
    return (
        <>
            <h1>About This Page</h1>
            <p>This page contains a list of all residences retrieved from the springboot backend</p>
            <p>This page was created to showcase retrieving data from an API and should not be included in the final project 3 presentation</p>
            <h2>Residences</h2>
            {/* Include the output from the fetch residences component we made above */}
            <FetchResidences />
            <h2>Related</h2>
            <Link href="/residence/create">
                <Button>Create Residence</Button>
            </Link>

        </>
    );
}

export default Residences;