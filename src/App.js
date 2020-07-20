import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';

import { Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import storage from 'local-storage-fallback';

const useStyles = makeStyles(() => ({
  paper: {
    height: "100vh",
  },
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    let darkMode = storage.getItem('darkMode');
    setDarkMode(darkMode === 'true' ? true : false);
  }, []);

  function changeTheme() {
    storage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  }

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    }
  });

  const defaultTheme = createMuiTheme({});

  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <Paper className={classes.paper}>
        <NavBar darkMode={darkMode} changeTheme={changeTheme} />
      </Paper>
    </ThemeProvider>
  );
}
