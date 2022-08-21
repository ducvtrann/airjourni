import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      dark: '#003f82',
      light: '#337bc8',
      main: '#005bbb',
    },
    secondary: {
      dark: '#b29500',
      light: '#ffdd33',
      main: '#ffd500',
    },
  },
});
