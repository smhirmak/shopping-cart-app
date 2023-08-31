import { AxiosClient } from '@/axios';
import Layout from '@/components/ui/Layout';
import { CartContextProvider } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { theme } from '../theme/theme';
import './style.css';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  categories: string[];
  products: IProduct[];
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, categories, products } = props;
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CssBaseline />
        <Layout categories={categories} products={products}>
          <Component {...pageProps} products={products} />
        </Layout>
      </CartContextProvider>
    </ThemeProvider>
  );
}

App.getInitialProps = async () => {
  const productsResponse = await AxiosClient.get('/api/products').then((res) => res.data.products);
  const categoriesResponse = await AxiosClient.get('/api/categories').then((res) => res.data);
  const categories = await categoriesResponse.slice(0, 6);
  const products = await productsResponse.map((item: any) => ({ ...item, quantity: 1 }));

  return {
    categories: await categories,
    products: await products
  };
};
