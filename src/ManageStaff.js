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

function ManageStaff() {
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
    const [ManageStaff, setStudents] = useState([]);
    const fetchStudents = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/manager/all", { withCredentials: true }).then(response => {
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
                        <TableCell align="left">Employee Number</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name </TableCell>
                        <TableCell align="right">Employment Date</TableCell>
                        <TableCell align="right">Residence Name</TableCell>
                        <TableCell align="right">Access Level</TableCell>
                
                    </TableHead>

                    <TableBody>
                        {/* Iterate through each residence and create a row for it */}


                        {ManageStaff.map((manager) => (
                            <TableRow key={manager.residenceId}>
                                <TableCell align="left">{manager.employeeId}</TableCell>
                                <TableCell contenteditable="true" align="right">{manager.firstName}</TableCell>
                                <TableCell contenteditable="true" align="">{manager.lastName}</TableCell>
                                <TableCell contenteditable="true" align="right">{manager.employmentDate}</TableCell>
                                <TableCell contenteditable="true" align="right">{manager.residenceName}</TableCell>
                                <TableCell contenteditable="true" align="right">{manager.accessLevel}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </table>

            </div>
        </>
    );
}

export default ManageStaff;