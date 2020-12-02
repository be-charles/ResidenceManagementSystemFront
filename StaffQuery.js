import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

function Queries() {

    const useStyles = makeStyles({
        table: { minWidth: 300, },
        tableContainer: { margin: 'auto', maxWidth: 1100, },
    });

    //Declaring a state variable that has its default value set to an empty array '[]'
    //The variable will be filled with an array of residence objects once we get a response from our GET call to our backend
    //See https://reactjs.org/docs/hooks-state.html for more information regarding states and hooks in react if I am unable to help you understand
    const [queries, setQueries] = useState([]);

    const fetchQueries = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/query/all", { withCredentials: true }).then(response => {
            console.log(response);
            //Let residences = response.data (our array of residence objects)
            setQueries(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //On Render call above fetch residences function to get residences from back end and store the response in 'residences'
    useEffect(() => {

        fetchQueries();

    }, []);

    const classes = useStyles();
    

    return (
        <>
            <h1>Queries</h1>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="residences table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Query ID</TableCell>
                            <TableCell align="right">Nature</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Log Status</TableCell>
                            <TableCell align="right">Response</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Iterate through each residence and create a row for it */}
                        {queries.map((query) => (
                          <TableRow key={query.queryId}>
                            <TableCell align="left">{query.queryId}</TableCell>
                            <TableCell align="right">{query.nature}</TableCell>
                            <TableCell align="right">{query.description}</TableCell>
                            <TableCell align="right">{query.logStatus}</TableCell>
                            <TableCell align="right">{query.response}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Queries;