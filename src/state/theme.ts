import { createTheme } from '@mui/material';
import * as colors from '@mui/material/colors';

export const muiTheme = createTheme({
  palette: {
    text: {
      primary: colors.grey[100],
      secondary: colors.grey[500],
    },
    primary: {
      main: colors.deepPurple[800],
    },
  },
});
