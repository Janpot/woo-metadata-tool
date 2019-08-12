import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b'
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
