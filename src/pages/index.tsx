import axios from 'axios';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Typography } from '@mui/material';

import { ProductTypes } from '@/types/ProductTypes';
import ProductList from '@/components/items/ProductList';
import { ContextProvider } from '@/components/context/cart-context';
import Header from '@/components/layout/Header';

const Home: React.FC<{ response: ProductTypes[] | any }> = ({ response }) => {
  return (
    <ContextProvider>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="pngegg.png" />
      </Head>
      <Typography>Navigation</Typography>
      <Header />
      {response.error ? <Typography>{response.error}</Typography> : <ProductList res={response} />}
    </ContextProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://dummyjson.com/products')
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });

  return {
    props: {
      response: response
    }
  };
};

export default Home;
