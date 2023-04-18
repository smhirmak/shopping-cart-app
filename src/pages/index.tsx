import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Basket from '@/components/basket/Basket';
import BasketButton from '@/components/buttons/BasketButton';
import Category from '@/components/category/Category';
import ProductList from '@/components/products/ProductList';
import { CartContextProvider } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { useState } from 'react';

const Home: React.FC<{ response: IProduct[] | any }> = ({ response }) => {
  const [items, setItems] = useState(response);
  // console.log(categoriesResponse);
  return (
    <Container maxWidth={'xl'}>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            {/* <Grid item xs={12}>
              <Box>
                <Category res={response} setItems={setItems} items={items} />
                <Divider light={true} sx={{ mt: 2, backgroundColor: '#E7E7E7' }} />
              </Box>
            </Grid> */}
            {/* <Grid item xs={2} display={'flex'}>
              <Box justifyContent={'end'} alignItems={'center'}>
                <BasketButton badge={true} text="Cart" />
              </Box>
            </Grid> */}
          </Grid>
          <Grid item marginLeft={0} xs={2}>
            {/* <Category res={response} setItems={setItems} items={items} /> */}
          </Grid>
          {response.error ? (
            <Typography>{response.error}</Typography>
          ) : (
            <ProductList items={items} />
          )}
        </Grid>
        <Basket />
      </>
    </Container>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const categoriesResponse = await axios
//     .get('https://dummyjson.com/products/categories')
//     .then((res) => res.data);

//   const categories = categoriesResponse.slice(0, 5);
//   return {
//     props: {
//       categories
//     }
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const productsResponse = await axios
    .get('https://dummyjson.com/products')
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });

  // const categoriesResponse = await axios
  //   .get('https://dummyjson.com/products/categories')
  //   .then((res) => res.data);

  const response = productsResponse.map((item: any) => ({ ...item, quantity: 1 }));
  return {
    props: {
      response
      // categoriesResponse
    }
  };
};

export default Home;
