import Layout from '@/components/ui/Layout';
import { CartContextProvider } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
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
  const productsResponse = await axios
    .get('https://dummyjson.com/products')
    .then((res) => res.data.products);

  const categoriesResponse = await axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => res.data);
  const categories = categoriesResponse.slice(0, 6);
  const products = productsResponse.map((item: any) => ({ ...item, quantity: 1 }));

  return {
    categories,
    products
  };
};
