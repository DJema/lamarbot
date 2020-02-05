import React from 'react';
import theme from '../muiTheme'
import {
  Typography,
  ThemeProvider,
} from '@material-ui/core';

export default () => (
  <ThemeProvider theme={theme}>
    <Typography variant="h4">Wine</Typography>
  </ThemeProvider>
);