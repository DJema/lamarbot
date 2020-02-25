import React from 'react';
import theme from '../muiTheme';

import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  withStyles,
} from '@material-ui/core';

import LoginButton from './LoginButton';

const styles = {
  flex : {
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Wine Diary
        </Typography>
        <div className={classes.flex} />
        <LoginButton />
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default withStyles(styles)(AppHeader);