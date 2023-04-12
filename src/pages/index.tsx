import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Basket from '@/components/basket/Basket';
import BasketButton from '@/components/buttons/BasketButton';
import Category from '@/components/category/Category';
import { ContextProvider } from '@/components/context/cart-context';
import ProductList from '@/components/items/ProductList';
import { ProductTypes } from '@/types/ProductTypes';
import { useState } from 'react';

const Home: React.FC<{ response: ProductTypes[] | any }> = ({ response }) => {
  const [items, setItems] = useState<ProductTypes[]>([]);
  const [anchor, setAnchor] = useState(false);

  return (
    <Container>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="pngegg.png" />
      </Head>
      <ContextProvider>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BasketButton setAnchor={setAnchor} />
          </Grid>
          <Grid item marginLeft={0} xs={2}>
            <Category res={response} items={items} setItems={setItems} />
          </Grid>
          <Grid container item xs={9} spacing={3}>
            {response.error ? (
              <Typography>{response.error}</Typography>
            ) : (
              <ProductList items={items} />
            )}
          </Grid>
        </Grid>
        <Basket anchor={anchor} setAnchor={setAnchor} />
      </ContextProvider>
    </Container>
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
