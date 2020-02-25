import React from 'react';
import theme from '../muiTheme'
import {
  Typography,
  ThemeProvider,
} from '@material-ui/core';

import WineCard from '../components/WineCard';

export default () => (
  <ThemeProvider theme={theme}>
    <WineCard />
  </ThemeProvider>
);