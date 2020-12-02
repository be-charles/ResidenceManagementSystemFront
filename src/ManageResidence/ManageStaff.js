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
import '../ManagerTable.css';

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
            

            <div> <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: 'auto' }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'http://localhost:6677/add-room';
                }}
            > Add Room</button></div>
        
            <div className="mnanagertable">
    
                <table id="table" className="table table-striped">
                    <TableHead>
                        <TableCell>Employee Number</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell >Last Name </TableCell>
                        <TableCell>Employment Date</TableCell>
                        <TableCell >Residence Name</TableCell>
                        <TableCell >Access Level</TableCell>
                        <TableCell>Action</TableCell>

                    </TableHead>

                    <TableBody>
                        {/* Iterate through each residence and create a row for it */}


                        {ManageStaff.map((manager) => (
                            <TableRow key={manager.residenceId}>
                                <TableCell align="left">{manager.employeeId}</TableCell>
                                <TableCell >{manager.firstName}</TableCell>
                                <TableCell >{manager.lastName}</TableCell>
                                <TableCell >{manager.employmentDate}</TableCell>
                                <TableCell >{manager.residenceName}</TableCell>
                                <TableCell >{manager.accessLevel}</TableCell>
                                <TableCell>
                                    <button className="btn btn-info">update</button>
                                    <button style={{ marginLeft: "10px" }} className="btn btn-danger">Delete</button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </table>

            </div>
        </>
    );
}

export default ManageStaff;