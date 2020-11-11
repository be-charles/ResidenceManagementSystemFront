import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, makeStyles } from '@material-ui/core';

function ExamplePage() {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));

    const classes = useStyles();
   return (
      <>
      <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
      </>
   );
}

export default ExamplePage;