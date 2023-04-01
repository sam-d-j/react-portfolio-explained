import { ThemeOptions, createTheme } from '@mui/material';
import * as colors from '@mui/material/colors';

export const defaultMuiThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Poppins, Roboto',
  },
  palette: {
    text: {
      primary: colors.grey[100],
      secondary: colors.grey[500],
    },
    primary: {
      main: colors.deepPurple[800],
    },
    secondary: {
      main: colors.blueGrey[500],
    },
  },
};

export const defaultMuiTheme = createTheme(defaultMuiThemeOptions);
