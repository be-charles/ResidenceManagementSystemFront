import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    headerText: {
        color: 'cyan',
        fontSize: 26
    },
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
    }
});

const links = [
    { title: `home`, path: `/` },
    { title: `apply`, path: `/apply` },
    { title: `residences`, path: `/residence` }
];

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.conatinerSpacing}>
                    <Button className={classes.headerText}>Res Mana Demo</Button>
                    <IconButton>
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
export default Header