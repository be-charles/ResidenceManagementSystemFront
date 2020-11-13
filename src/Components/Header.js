import React from 'react';
import axios from 'axios';
import { AppBar, Button, Container, IconButton, Toolbar } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import myResLogo from '../ImageFiles/myRES_logo_small.png'

const useStyles = makeStyles({
    conatinerSpacing: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    navSpacing: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkText: {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase'
    },
    navColour: {
        background: 'white'
    }
});
const defaultNavigationLinks = [
    { title: `home`, path: `/` },
    { title: `faq`, path: `/faq`},
    { title: `login`, path: `/login`}
];
const studentNavigationLinks = [
    { title: `home`, path: `/` },
    { title: `apply`, path: `/apply` },
    { title: `myProfile`, path: `/myprofile` },
    { title: `log query`, path: `/logquery` },
    { title: `house rules`, path: `/houserules` },
    { title: `MyResidence`, path: `/MyResidence` },
    { title: `logout`, path: `/logout`}
];
const staffNavigationLinks = [
    { title: `home`, path: `/` },
    { title: `StaffQuery`, path: `/StaffQuery` },
    { title: `logout`, path: `/logout`}
];
const Banner = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.navColour}>
                <Container className={classes.conatinerSpacing}>
                    <IconButton className={classes.menuButton} target="_blank" href="https://www.cput.ac.za/" color="inherit" aria-label="menu">
                        <img src={myResLogo} alt="Web Logo" /> 
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
const DefaultNavigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.conatinerSpacing}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navSpacing}>
                        {/* Iterating through defaultNavigationLinks and creating buttons for them... */}
                        {defaultNavigationLinks.map(({ title, path }) => (
                            <Link key={title} to={path} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
const StudentNavigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.conatinerSpacing}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navSpacing}>
                        {/* Iterating through defaultNavigationLinks and creating buttons for them... */}
                        {studentNavigationLinks.map(({ title, path }) => (
                            <Link key={title} to={path} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
const StaffNavigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.conatinerSpacing}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navSpacing}>
                        {/* Iterating through defaultNavigationLinks and creating buttons for them... */}
                        {staffNavigationLinks.map(({ title, path }) => (
                            <Link key={title} to={path} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
function DisplayHeaders({ loginInfo }) {

    if (loginInfo.role === "student") { return <> <Banner /> <StudentNavigation />  </> }
    else if (loginInfo.role === "admin") { return <> <Banner /> <StaffNavigation />  </> }
    return <> <Banner /> <DefaultNavigation /> </>
}
export default DisplayHeaders