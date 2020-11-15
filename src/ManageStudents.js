import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { VerticalAlignCenter } from '@material-ui/icons';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './ManagerTable.css';

function ManageStudents() {
    const useStyles = makeStyles((theme) => ({
        media: {
            paddingTop: theme.spacing(4),
            height: 400,
        },
        title: {
            fontSize: 20,
            textAlign: "left",
            fontWeight: "bold",
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2)
        },
        paper: {
            marginTop: theme.spacing(4),
            padding: theme.spacing(5),
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            minHeight: 200,
        },
    }));
    const [ManageStudents, setStudents] = useState([]);
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
            <h1>City Edge Students</h1>
            <div className="mnanagertable">
                <table id="table">
                    <TableHead>
                        <TableCell align="left">Student Number</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name Available</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">DOB</TableCell>
                        <TableCell align="right">Identity Number</TableCell>
                        <TableCell align="right">Student Email</TableCell>
                        <TableCell align="right">Contact Number</TableCell>
                        <TableCell align="right">Res ID</TableCell>
                        <TableCell align="right">Campus ID</TableCell>
                        <TableCell align="right">Room Number</TableCell>
                        <TableCell align="right">Room Type</TableCell>
                    </TableHead>

                    <TableBody>
                        {/* Iterate through each residence and create a row for it */}


                        {ManageStudents.map((student) => (
                            <TableRow key={student.residenceId}>
                                <TableCell align="left">{student.studNum}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.firstName}</TableCell>
                                <TableCell contenteditable="true" align="">{student.lastName}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.gender}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.dob}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.identityNum}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.contactNum}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.studEmail}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.resId}</TableCell>
                                <TableCell contenteditable="true" align="right">{student.campusId}</TableCell>
                                <TableCell contenteditable="true" align="right">565</TableCell>
                                <TableCell contenteditable="true" align="right">Double</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </table>
            </div>
            
        </>
    );
}

export default ManageStudents;