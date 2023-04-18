import Layout from '@/components/ui/Layout';
import { ThemeProvider } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';
import { theme } from '../theme/theme';
import './style.css';
import { CartContextProvider } from '@/context/cart-context';
import axios from 'axios';
import { GetStaticProps } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { EmotionCache } from '@emotion/react';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  categories: string[];
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, categories } = props;
  // console.log(categories);

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CssBaseline />
        <Layout categories={categories}>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ req }: any) => {
  const categoriesResponse = await axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => res.data);
  const categories = categoriesResponse.slice(0, 7);

  return {
    categories
  };
};
