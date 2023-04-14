import Layout from '@/components/ui/Layout';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../theme/theme';
import './style.css';
import { CartContextProvider } from '@/context/cart-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </ThemeProvider>
  );
}
