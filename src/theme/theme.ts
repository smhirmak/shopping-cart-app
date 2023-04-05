import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '500', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial']
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
      dark: '#EABF00'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});
