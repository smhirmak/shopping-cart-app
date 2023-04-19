import { Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';

import Basket from '@/components/basket/Basket';
import ProductList from '@/components/products/ProductList';
import { CartContext } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { useContext } from 'react';

const Home: React.FC<{ products: IProduct[] | any }> = ({ products }) => {
  const { items } = useContext(CartContext);

  return (
    <Container maxWidth={'xl'}>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <>
        <Grid
          container
          spacing={3}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          {products.error ? (
            <Typography>{products.error}</Typography>
          ) : (
            <ProductList items={items} />
          )}
        </Grid>
        <Basket />
      </>
    </Container>
  );
};

export default Home;
