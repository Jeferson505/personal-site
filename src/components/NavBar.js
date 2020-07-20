import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { linkGitHub, linkLinkedIn, linkTwitter } from '../constants/URLs';
import useStyles from './Style';

function openNewTab(url) {
    window.open(url);
}

export default function NavBar({ darkMode, changeTheme }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Jeferson Santos
                    </Typography>

                    <IconButton edge="start" onClick={() => openNewTab(linkGitHub)} color="inherit">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton edge="start" onClick={() => openNewTab(linkLinkedIn)} color="inherit">
                        <LinkedInIcon />
                    </IconButton>

                    <IconButton edge="start" onClick={() => openNewTab(linkTwitter)} color="inherit">
                        <TwitterIcon />
                    </IconButton>

                    <IconButton onClick={changeTheme} className={classes.buttonChangeTheme} edge="end" color="inherit">
                        {darkMode === true ? <Brightness4Icon /> : <NightsStayIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}