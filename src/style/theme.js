import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#223A4D',
    },
    secondary: pink,
  },
  status: {
    danger: 'orange',
  },
});

module.theme = theme;
export {theme};