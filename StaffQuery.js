import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Typography, Container, Paper, Button, form } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  submit: {},
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    minHeight: 200,
  },
  button: {
    padding: theme.spacing(2)
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  const [queries, setQueries] = useState([]);
  const { register, handleSubmit, control } = useForm();
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

  const onSubmit = () => {
    window.location.href = "/staffqueryresponse"

  }

  //On Render call above fetch residences function to get residences from back end and store the response in 'residences'
  useEffect(() => {

    fetchQueries();

  }, []);
  return (

    <div className={classes.root}>
      <h1>Student Queries</h1>
      <Container component="main" maxWidth="lg">
        <Paper className={classes.paper} elevation={3}>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Button className={classes.button}
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              placeholder="Enter text here"
              className={classes.submit}
            > Respond to Query </Button>
          </form>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Inbox</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="residences table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Query ID</TableCell>
                      <TableCell align="left">Student Number</TableCell>
                      <TableCell align="left">Full Name</TableCell>
                      <TableCell align="left">Nature</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="left">Log Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Iterate through each residence and create a row for it */}
                    {queries.map((query) => {
                      console.log(query.logStatus)
                      if (query.logStatus == "Processing") {
                        return (

                          <TableRow key={query.queryId}>
                            <TableCell align="left">{query.queryId}</TableCell>
                            <TableCell align="left">{query.studNum}</TableCell>
                            <TableCell align="left">{query.fullName}</TableCell>
                            <TableCell align="left">{query.nature}</TableCell>
                            <TableCell align="left">{query.description}</TableCell>
                            <TableCell align="left">{query.logStatus}</TableCell>
                          </TableRow>
                        )
                      }
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Processed Queries</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="residences table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Query ID</TableCell>
                      <TableCell align="left">Student Number</TableCell>
                      <TableCell align="left">Full Name</TableCell>
                      <TableCell align="left">Nature</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="left">Log Status</TableCell>
                      <TableCell align="left">Response</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Iterate through each residence and create a row for it */}
                    {queries.map((query) => {

                      if (query.logStatus == "Processed") {
                        return (
                          <TableRow key={query.queryId}>
                            <TableCell align="left">{query.queryId}</TableCell>
                            <TableCell align="left">{query.studNum}</TableCell>
                            <TableCell align="left">{query.fullName}</TableCell>
                            <TableCell align="left">{query.nature}</TableCell>
                            <TableCell align="left">{query.description}</TableCell>
                            <TableCell align="left">{query.logStatus}</TableCell>
                            <TableCell align="left">{query.response}</TableCell>
                          </TableRow>
                        )
                      }
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

            </ExpansionPanelDetails>
          </ExpansionPanel>
        
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              placeholder="Enter text here"
              className={classes.submit}
            > Respond to Query </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);