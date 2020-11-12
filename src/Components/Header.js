import React from 'react';
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

const links = [
    { title: `home`, path: `/` },
    { title: `apply`, path: `/apply` },
    { title: `myProfile`, path: `/myprofile` },
    { title: `residences`, path: `/residence` },
    { title: `students`, path: `/students`},
    { title: `example page`, path: `/examplepage` },
    { title: `StaffQuery`, path: `/StaffQuery` },
    { title: `log query`, path: `/logquery` },
    { title: `house rules`, path: `/houserules` },
];
const Header2 = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.navColour}>
                <Container className={classes.conatinerSpacing}>
                    <IconButton edge="Start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={myResLogo} alt="Web Logo"/>
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.conatinerSpacing}>
                    <IconButton edge="Start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* Put Logo Here AND REMOVE BUTTON ABOVE */}
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navSpacing}>
                        {/* Iterating through links and creating buttons for them... */}
                        {links.map(({ title, path }) => (
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

function DisplayHeaders(){
    let components;

    components = (
    <>
        <Header2/>
        <Header/>
    </>);

    return components;
}
export default DisplayHeaders