import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { VerticalAlignCenter } from '@material-ui/icons';
import './Dropbox.css';

function ManageResidence() {
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
    const classes = useStyles();
    return (

        <>
                <h1> Residence Managment</h1>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Choose Residence</button>
                    <div id="myDropdown" class="dropdown-content">
                    <a href="http://localhost:6677/HanovorResince">Hanovor</a>
                    <a href="http://localhost:6677/CityEdgeResidence/">City Edge</a>
                    <a href="http://localhost:6677/CatsvilleResidence">Catsville</a>
                    </div> </div>


                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Manage Residence</button>
                    <div id="myDropdown" class="dropdown-content">
                    <a href="http://localhost:6677/ManageStudents">Students</a>
                    <a href="http://localhost:6677/ManageStaff">Staff</a>
                    </div>
                </div>

            <CardMedia
                className={classes.media}
                image="https://educonnect.co.za/wp-content/uploads/2019/02/CPUT_1-2000x1200-1.jpg"
                title="Belleville Campus"
            />


        </>
    );
}

export default ManageResidence;