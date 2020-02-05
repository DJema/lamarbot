import React from 'react';
import theme from '../muiTheme'

import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider
} from '@material-ui/core';

const AppHeader = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Wine Diary
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default AppHeader;