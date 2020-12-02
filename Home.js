import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { VerticalAlignCenter } from '@material-ui/icons';

function Home() {
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
         <Container>
            
            <Paper className={classes.paper} elevation={3}>
               <h1>Welcome to the new 2020 "MyRES" site!</h1>
               <CardMedia
               className={classes.media}
               image="https://www.cput.ac.za/storage/about/visit/img_bellville.jpg"
               title="Belleville Campus"
               />
               <br></br>
               <h2>The official CPUT Residence Management System
for <br></br>registered residence management staff and students.</h2> 
               <br></br>
               <p>The Cape Peninsula University of Technology is at the heart of technology education and 
                  innovation in Africa. An internationally acclaimed institution, it is the only university 
                  of technology in the Western Cape and is the largest university in the region with an 
                  enrolment of more than 30 000 students. The university has six faculties offering a wide 
                  range of accredited undergraduate and postgraduate courses in the fields of Applied Sciences, 
                  Business, Education and Social Sciences,
         Engineering, Informatics and Design as well as Health and Wellness Sciences.</p>

               <br></br>
               <p>CPUT offers residence space for almost 8 000 students.
            Our residences are spread across the Cape Peninsula in the areas surrounding our campuses.</p>

               <br></br>

               <h1>About MyRES</h1>
               <p> 
               </p>
            </Paper>
         </Container>

      </>
   );
}

export default Home;