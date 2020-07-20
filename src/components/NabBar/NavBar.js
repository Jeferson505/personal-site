import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Brightness7 from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { linkGitHub, linkLinkedIn, linkTwitter } from '../../constants/URLs';
import CustomIconButton from '../CustomIconButton/CustomIconButton';
import useStyles from './Style';

export default function NavBar({ darkMode, changeTheme }) {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Jeferson Santos
                </Typography>

                <CustomIconButton url={linkGitHub} tooltipTitle="GitHub" children={<GitHubIcon />} />
                <CustomIconButton url={linkLinkedIn} tooltipTitle="LinkedIn" children={<LinkedInIcon />} />
                <CustomIconButton url={linkTwitter} tooltipTitle="Twitter" children={<TwitterIcon />} />

                <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
                    <IconButton onClick={changeTheme} className={classes.buttonChangeTheme} edge="end" color="inherit">
                        {darkMode === true ? <Brightness7 /> : <Brightness4Icon />}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}