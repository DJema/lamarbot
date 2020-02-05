import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,'
  },
  palette: {
    primary: {
      light: '#d7ccc8',
      main: '#a1887f',
      dark: '#a1887f',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;