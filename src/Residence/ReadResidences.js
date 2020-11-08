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
    const [residences, setResidences] = useState([]);
    const fetchResidences = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/residence/all").then(response => {
            console.log(response);
            //Let residences = response.data
            setResidences(response.data);
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
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Rooms Available</TableCell>
                        <TableCell align="right">Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Iterate through each residence and create a row for it */}
                    {residences.map((residence) => (
                        <TableRow key={residence.residenceName}>
                            <TableCell align="right">{residence.residenceId}</TableCell>
                            <TableCell align="right">{residence.roomsAvailable}</TableCell>
                            <TableCell align="right">{residence.residenceName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>);
};

//MAIN PAGE
function Residences() {
    //The following response gets displayed
    return (
        <>
            <h1>About This Page</h1>
            <p>This page contains a list of all residences retrieved from the springboot backend</p>
            <h2>Residences</h2>
            {/* Include the output from the fetch residences component we made above */}
            <FetchResidences />
            <h2>Links</h2>
            <Link to="/create">
                <Button>Create</Button>
            </Link>
            
        </>
    );
}

export default Residences;