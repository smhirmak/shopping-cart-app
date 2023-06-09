import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial']
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    success: {
      main: '#000',
      contrastText: '#fff',
      dark: '#EABF00'
    },
    warning: {
      main: '#000',
      contrastText: '#fff',
      dark: '#EABF00'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});
