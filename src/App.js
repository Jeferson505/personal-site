import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';

import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import storage from 'local-storage-fallback';

import { useStyles } from './Style';
import { createMuiTheme } from '@material-ui/core/styles';

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    let isDarkMode = storage.getItem('darkMode');
    setDarkMode(isDarkMode === 'true' ? true : false);
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
