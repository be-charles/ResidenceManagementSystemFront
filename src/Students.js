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

function Students() {

    const useStyles = makeStyles({
        table: { minWidth: 300, },
        tableContainer: { margin: 'auto', maxWidth: 1100, },
    });

    //Declaring a state variable that has its default value set to an empty array '[]'
    //The variable will be filled with an array of residence objects once we get a response from our GET call to our backend
    //See https://reactjs.org/docs/hooks-state.html for more information regarding states and hooks in react if I am unable to help you understand
    const [students, setStudents] = useState([]);

    const fetchStudents = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/student/all", { withCredentials: true }).then(response => {
            console.log(response);
            //Let residences = response.data (our array of residence objects)
            setStudents(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //On Render call above fetch residences function to get residences from back end and store the response in 'residences'
    useEffect(() => {

        fetchStudents();

    }, []);

    const classes = useStyles();

    return (
        <>
            <h1>Students</h1>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="residences table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Student Number</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name Available</TableCell>
                            <TableCell align="right">Campus ID</TableCell>
                            <TableCell align="right">Identity Number</TableCell>
                            <TableCell align="right">Student Email</TableCell>
                            <TableCell align="right">Contact Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Iterate through each residence and create a row for it */}
                        {students.map((student) => (
                            <TableRow key={student.residenceId}>
                                <TableCell align="left">{student.studNum}</TableCell>
                                <TableCell align="right">{student.firstName}</TableCell>
                                <TableCell align="right">{student.lastName}</TableCell>
                                <TableCell align="right">{student.campus}</TableCell>
                                <TableCell align="right">{student.identityNum}</TableCell>
                                <TableCell align="right">{student.studEmail}</TableCell>
                                <TableCell align="right">{student.contactNum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Students;