import ProductList from '../components/items/ProductList';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import { theme } from '../theme/theme';
import { Box, ThemeProvider } from '@mui/material';
import './style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Box sx={{ backgroundColor: '#EAEAEA' }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Box>
  );
}
