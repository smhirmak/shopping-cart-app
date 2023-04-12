import { Box, ThemeProvider, Typography } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../theme/theme';
import './style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ backgroundColor: '#EAEAEA' }}>
      <ThemeProvider theme={theme}>
        <Typography>Nav Bar</Typography>
        <Component {...pageProps} />
      </ThemeProvider>
    </Box>
  );
}
