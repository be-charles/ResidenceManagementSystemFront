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

function CityEdgeResidence() {
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
    const [CityEdgeResidence, setRoom] = useState([]);
    const fetchRoom = () => {
        //Create a GET call to backend
        axios.get("http://localhost:8080/systemsmart/room/all", { withCredentials: true }).then(response => {
            console.log(response);
            //Let residences = response.data (our array of residence objects)
            setRoom(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //On Render call above fetch residences function to get residences from back end and store the response in 'residences'
    useEffect(() => {

        fetchRoom();

    }, []);

    const classes = useStyles();
    return (

        <>

        <h1>City Edge Room Management</h1>
            <div className="mnanagertable">
            <table id="table">
            <TableHead>
                        <TableCell align="right">Room Number</TableCell>
                        <TableCell align="right">Room Type</TableCell>
                        <TableCell align="right">Double Price</TableCell>
                        <TableCell align="right">Room Status</TableCell>
            </TableHead>

            <TableBody>
                {/* Iterate through each residence and create a row for it */}


                    {CityEdgeResidence.map((room) => (
                    <TableRow key={room.residenceId}>
                            <TableCell align="left">{room.roomNumber}</TableCell>
                            <TableCell contenteditable="true" align="left">{room.type}</TableCell>
                            <TableCell contenteditable="true"  align="left">{room.price}</TableCell>
                            <TableCell contenteditable="true" align="left">{room.status}</TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </table>

        </div>
        </>
    );
}

export default CityEdgeResidence;