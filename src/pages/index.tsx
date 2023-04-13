import { Box, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Basket from '@/components/basket/Basket';
import BasketButton from '@/components/buttons/BasketButton';
import Category from '@/components/category/Category';
import { CartContextProvider } from '@/components/context/cart-context';
import ProductList from '@/components/products/ProductList';
import SearchBar from '@/components/searchBar/SearchBar';
import { IProduct } from '@/types/IProduct';
import { useState } from 'react';

const Home: React.FC<{ response: IProduct[] | any }> = ({ response }) => {
  const [items, setItems] = useState(response);
  return (
    <Container maxWidth={'xl'}>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="pngegg.png" />
      </Head>
      <CartContextProvider>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Grid item xs={11} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Link href="/search?q=laptop">Search</Link>
              <SearchBar />
            </Grid>
            <Grid item xs={1} display={'flex'}>
              <Box justifyContent={'end'} alignItems={'center'}>
                <BasketButton badge={true} text="Cart" />
              </Box>
            </Grid>
          </Grid>
          <Grid item marginLeft={0} xs={2}>
            <Category res={response} setItems={setItems} items={items} />
          </Grid>
          {response.error ? (
            <Typography>{response.error}</Typography>
          ) : (
            <ProductList items={items} />
          )}
        </Grid>
        <Basket />
      </CartContextProvider>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productsResponse = await axios
    .get('https://dummyjson.com/products')
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });

  const response = productsResponse.map((item: any) => ({ ...item, quantity: 1 }));
  return {
    props: {
      response
    }
  };
};

export default Home;
