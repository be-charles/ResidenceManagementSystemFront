import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';

function FAQ() {
    const useStyles = makeStyles((theme) => ({
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
            padding: theme.spacing(1),
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            minHeight: 200,
        },
    }));

    const classes = useStyles();
    return (
        <>
            <Container>
                <Paper className={classes.paper} elevation={3}>
                    <h1>Frequently Asked Questions</h1>
                    <h2>How do I apply for a residence?</h2>
                    <p>If you are an incoming first-year undergraduate, consult your CPUT application form or visit the Application and Registration web page.
                    You will only be accepted into the residence on condition you meet the requirements and there is available space.
For returning undergraduate or graduate student, contact your residence coordinator.</p>
                    <h2>Who is responsible for CPUT residences?</h2>
                    <p>The Residences Department reports to the Dean of Students. She provides operational and strategic direction for the planning and management 
                        of university residential communities. The Residences Head of Department has been delegated the authority to run campus residences. 
                        Individual residences are managed by residence co-ordinators.</p>
                    <h2>Are Cput Applications open for 2021?</h2>
                    <p>Cape Peninsula University of Technology have opened their applications for the 2021 intake. 
                        CPUT aims to have an impact on the world of technology.</p>
                </Paper>
            </Container>
        </>
    );
}

export default FAQ;