import ProductList from '../components/items/ProductList';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Header />
      <ProductList />
    </ThemeProvider>
  );
}
