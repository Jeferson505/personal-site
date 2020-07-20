import React, { useState, useEffect } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { useStyles } from './Style';
import storage from 'local-storage-fallback';

import NavBar from './components/NabBar/NavBar';
import Home from './screens/Home/Home';

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
        <Home />
      </Paper>
    </ThemeProvider>
  );
}
